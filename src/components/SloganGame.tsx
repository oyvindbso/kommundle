import { DateTime } from "luxon";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { toast } from "react-toastify";
import {
  countries,
  getCountryName,
  sanitizeCountryName,
} from "../domain/countries";
import { SLOGAN_GUESSES_STORAGE_KEY } from "../domain/guess";
import { useGuesses } from "../hooks/useGuesses";
import { CountryInput } from "./CountryInput";
import * as geolib from "geolib";
import { Share } from "./Share";
import { Guesses } from "./Guesses";
import { useTranslation } from "react-i18next";
import { SettingsData } from "../hooks/useSettings";
import { useSlogan } from "../hooks/useSlogan";

function getDayString() {
  return DateTime.now().toFormat("yyyy-MM-dd");
}

function getDayStringNew() {
  return DateTime.now().toFormat("dd-MM-yyyy");
}

const MAX_TRY_COUNT = 6;

interface SloganGameProps {
  settingsData: SettingsData;
}

export function SloganGame({ settingsData }: SloganGameProps) {
  const { i18n } = useTranslation();
  const dayString = useMemo(getDayString, []);
  const dayStringNew = useMemo(getDayStringNew, []);

  const countryInputRef = useRef<HTMLInputElement>(null);

  const [country, slogan] = useSlogan(dayStringNew);

  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, addGuess] = useGuesses(
    dayStringNew,
    SLOGAN_GUESSES_STORAGE_KEY
  );

  const gameEnded =
    guesses.length === MAX_TRY_COUNT ||
    guesses[guesses.length - 1]?.distance === 0;

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const guessedCountry = countries.find(
        (country) =>
          sanitizeCountryName(
            getCountryName(i18n.resolvedLanguage, country)
          ) === sanitizeCountryName(currentGuess)
      );

      if (guessedCountry == null) {
        toast.error("Ukjent kommune");
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
        toast.success("Godt gjort!", { delay: 2000 });
      }
    },
    [addGuess, country, currentGuess, i18n.resolvedLanguage]
  );

  useEffect(() => {
    if (
      guesses.length === MAX_TRY_COUNT &&
      guesses[guesses.length - 1].distance > 0
    ) {
      toast.info(getCountryName(i18n.resolvedLanguage, country).toUpperCase(), {
        autoClose: false,
        delay: 2000,
      });
    }
  }, [country, guesses, i18n.resolvedLanguage]);

  return (
    <div className="flex-grow flex flex-col mx-2">
      <div className="my-1 flex flex-col items-center justify-center min-h-[13rem] px-2">
        <blockquote className="text-center text-2xl sm:text-3xl font-bold italic leading-snug">
          «{slogan}»
        </blockquote>
        {gameEnded && (
          <div className="mt-3 uppercase tracking-wide font-bold">
            {getCountryName(i18n.resolvedLanguage, country)}
          </div>
        )}
      </div>
      <Guesses
        rowCount={MAX_TRY_COUNT}
        guesses={guesses}
        settingsData={settingsData}
        countryInputRef={countryInputRef}
      />
      <div className="my-2">
        {gameEnded ? (
          <>
            <Share
              guesses={guesses}
              dayString={dayString}
              settingsData={settingsData}
              hideImageMode={false}
              rotationMode={false}
              gameName="Slagordle"
            />
            <a
              className="underline w-full text-center block mt-4"
              href={`https://www.google.com/maps?q=${getCountryName(
                i18n.resolvedLanguage,
                country
              )}%20kommune&hl=${i18n.resolvedLanguage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {"Vis på Google Maps"}
            </a>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <CountryInput
                inputRef={countryInputRef}
                currentGuess={currentGuess}
                setCurrentGuess={setCurrentGuess}
              />
              <button
                className="border-2 uppercase my-0.5 hover:bg-gray-50 active:bg-gray-100 dark:hover:bg-slate-800 dark:active:bg-slate-700"
                type="submit"
              >
                🗣️ {"Gjett"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
