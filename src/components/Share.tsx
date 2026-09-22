import { DateTime, Interval } from "luxon";
import { useMemo } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import {
  computeProximityPercent,
  generateSquareCharacters,
} from "../domain/geography";
import { Guess } from "../domain/guess";
import React from "react";
import { SettingsData } from "../hooks/useSettings";

const START_DATE = DateTime.fromISO("2023-02-24");
const SLOGAN_START_DATE = DateTime.fromISO("2026-09-22");

interface ShareProps {
  guesses: Guess[];
  dayString: string;
  settingsData: SettingsData;
  hideImageMode: boolean;
  rotationMode: boolean;
  gameName?: "Kommundle" | "Slagordle";
}

export function Share({
  guesses,
  dayString,
  settingsData,
  hideImageMode,
  rotationMode,
  gameName = "Kommundle",
}: ShareProps) {
  const { theme } = settingsData;
  const isSlogan = gameName === "Slagordle";

  const shareText = useMemo(() => {
    const guessCount =
      guesses[guesses.length - 1]?.distance === 0 ? guesses.length : "X";
    const dayCount = Math.floor(
      Interval.fromDateTimes(
        isSlogan ? SLOGAN_START_DATE : START_DATE,
        DateTime.fromISO(dayString)
      ).length("day")
    );
    const difficultyModifierEmoji = hideImageMode
      ? " "
      : rotationMode
      ? " "
      : "";
    const title = `#${gameName} #${dayCount} ${guessCount}/6${difficultyModifierEmoji}`;

    const guessString = guesses
      .map((guess) => {
        const percent = computeProximityPercent(guess.distance);
        return generateSquareCharacters(percent, theme).join("");
      })
      .join("\n");

    return [
      title,
      guessString,
      isSlogan ? "https://slagordle.kommundle.no/" : "https://kommundle.no",
    ].join("\n");
  }, [dayString, gameName, guesses, hideImageMode, isSlogan, rotationMode, theme]);

  return (
    <CopyToClipboard
      text={shareText}
      onCopy={() => toast("Resultatene ble kopiert til utklippstavlen")}
      options={{
        format: "text/plain",
      }}
    >
      <button className="border-2 px-4 uppercase bg-green-600 hover:bg-green-500 active:bg-green-700 text-white w-full">
        {"Del"}
      </button>
    </CopyToClipboard>
  );
}
