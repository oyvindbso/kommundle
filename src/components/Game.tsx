import React, { useCallback, useEffect, useMemo, useState, useRef } from "react";
import { DateTime } from "luxon";
import { toast } from "react-toastify";
import seedrandom from "seedrandom";
import { countries, countriesWithImage } from "../domain/countries";
import { useGuesses } from "../hooks/useGuesses";
import { CountryInput } from "./CountryInput";
import * as geolib from "geolib";
import { Share } from "./Share";
import { Guesses } from "./Guesses";
import { SettingsData } from "../hooks/useSettings";

function getDayString() {
  return DateTime.now().toFormat("dd-MM-yyyy");
}

function getDayStringOld() {
  return DateTime.now().toFormat("yyyy-MM-dd");
}

const MAX_TRY_COUNT = 6;

// Helper function to parse CSV data into a 2D array
function parseCSV(csvText: string) {
  const lines = csvText.trim().split('\n');
  return lines.map(line => {
    // Using semicolon as separator to support commas in numbers (European format)
    return line.split(';').map(cell => cell.trim());
  });
}

interface GameProps {
  settingsData: SettingsData;
}

export function Game({ settingsData }: GameProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const dayString = useMemo(getDayStringOld, []); 
  const dayStringNew = useMemo(getDayString, []);
  const country = useMemo(
    () =>
      countriesWithImage[
        Math.floor(seedrandom.alea(dayStringNew)() * countriesWithImage.length)
      ],
    [dayStringNew]
  );

  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, addGuess] = useGuesses(dayStringNew);
  const [csvData, setCsvData] = useState<string[][] | null>(null);
  const [isLoadingCsv, setIsLoadingCsv] = useState(true);

  const gameEnded = guesses.length === MAX_TRY_COUNT || guesses.at(-1)?.distance === 0;

  // Load CSV data for the selected country
  useEffect(() => {
    const loadCsvData = async () => {
      try {
        setIsLoadingCsv(true);
        // Assuming CSV files are stored similar to SVG files
        const response = await fetch(`data/countries/${country.code.toLowerCase()}/data.csv`);
        if (!response.ok) {
          throw new Error('Failed to load CSV data');
        }
        const csvText = await response.text();
        const parsedData = parseCSV(csvText);
        setCsvData(parsedData);
      } catch (error) {
        console.error('Error loading CSV data:', error);
        toast.error('Kunne ikke laste data!');
        setCsvData([]); // Set empty array as fallback
      } finally {
        setIsLoadingCsv(false);
      }
    };

    loadCsvData();
  }, [country.code]);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const guessedCountry = countries.find(
        (country) => country.name.toLowerCase() === currentGuess.toLowerCase()
      );

      if (guessedCountry == null) {
        toast.error("Ukjent kommune!");
        return;
      }

      const newGuess = {
        name: currentGuess,
        distance: geolib.getDistance(guessedCountry, country),
        direction: geolib.getCompassDirection(guessedCountry, country),
      };

      addGuess(newGuess);
      setCurrentGuess("");

      if (newGuess.distance === 0) {
        toast.success("Godt gjort!");
      }
    },
    [addGuess, country, currentGuess]
  );

  useEffect(() => {
    const lastGuess = guesses.at(-1);
    if (guesses.length === MAX_TRY_COUNT && lastGuess && lastGuess.distance > 0) {
      toast.info(country.name.toUpperCase(), { autoClose: false });
    }
  }, [country.name, guesses]);

  // Render the data table
  const renderDataTable = () => {
    if (isLoadingCsv) {
      return (
        <div className="flex justify-center items-center h-52">
          <div className="text-lg">Laster data...</div>
        </div>
      );
    }

    if (!csvData || csvData.length === 0) {
      return (
        <div className="flex justify-center items-center h-52">
          <div className="text-lg text-red-500">Kunne ikke laste data</div>
        </div>
      );
    }

    // Ensure we have exactly 6 rows (pad with empty strings if needed)
    const tableRows = csvData.slice(0, 6);
    while (tableRows.length < 6) {
      tableRows.push(['', '']);
    }

    return (
      <div className="max-h-52 my-1 overflow-hidden">
        <table className="w-full border-collapse border border-gray-300 bg-white shadow-sm">
          <tbody>
            {tableRows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b border-gray-200">
                <td className="border-r border-gray-200 p-2 text-sm font-medium bg-gray-50">
                  {row[0] || ''}
                </td>
                <td className="p-2 text-sm">
                  {row[1] || ''}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="flex flex-col mx-2">
      {renderDataTable()}
      <Guesses
        rowCount={MAX_TRY_COUNT}
        guesses={guesses}
        settingsData={settingsData}
      />
      <div className="my-2">
        {gameEnded ? (
          <Share 
            guesses={guesses} 
            dayString={dayString} 
            settingsData={settingsData}
            hideImageMode={false}
            rotationMode={false}
          />
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <CountryInput
                currentGuess={currentGuess}
                setCurrentGuess={setCurrentGuess}
                inputRef={inputRef}
              />
              <button
                className="border-2 uppercase my-0.5 hover:bg-gray-50 active:bg-gray-100"
                type="submit"
              >
                🌍 Gjett
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
