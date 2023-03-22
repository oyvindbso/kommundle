import { DateTime, Interval } from "luxon";
import { useMemo } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { computeProximityPercent } from "../domain/geography";
import { Guess } from "../domain/guess";

const START_DATE = DateTime.fromISO("2023-02-24");
  
interface ShareProps {
  guesses: Guess[]
  dayString: string
}

export function Share({guesses, dayString}: ShareProps) {

  const shareText = useMemo(() => {
    const guessCount = guesses.at(-1)?.distance === 0 ? guesses.length : "X";
    const dayCount = Math.floor(
      Interval.fromDateTimes(START_DATE, DateTime.fromISO(dayStringOld)).length(
        "day"
      )
    );
    const title = `#Kommundle #${dayCount} ${guessCount}/6`;

    const guessString = guesses
      .map((guess) => {
        const percent = computeProximityPercent(guess.distance);
        const greenSquareCount = Math.floor(percent / 20);
        const yellowSquareCount = percent - greenSquareCount * 20 >= 10 ? 1 : 0;
        const green = "🟩".repeat(greenSquareCount);
        const yellow = "🟨".repeat(yellowSquareCount);
        const white = "⬜".repeat(5 - greenSquareCount - yellowSquareCount);
        return `${green}${yellow}${white}`;
      })
      .join("\n");

    return [title, guessString, "https://kommundle.no"].join("\n");
  }, [dayString, guesses]);
  
  return (
    <CopyToClipboard
      text={shareText}
      onCopy={() => toast("Kopierte resultatene til utklippstavlen")}
    >
      <button className="border-2 px-4 uppercase bg-green-600 hover:bg-green-500 active:bg-green-700 text-white w-full">
        Del 
      </button>
    </CopyToClipboard>
  );
}
