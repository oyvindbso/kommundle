import { Direction } from "./geography";

export const GUESSES_STORAGE_KEY = "guesses";
export const SLOGAN_GUESSES_STORAGE_KEY = "slagordGuesses";

export interface Guess {
  name: string;
  distance: number;
  direction: Direction;
}

export function loadAllGuesses(
  storageKey: string = GUESSES_STORAGE_KEY
): Record<string, Guess[]> {
  const storedGuesses = localStorage.getItem(storageKey);
  return storedGuesses != null ? JSON.parse(storedGuesses) : {};
}

export function saveGuesses(
  dayStringNew: string,
  guesses: Guess[],
  storageKey: string = GUESSES_STORAGE_KEY
): void {
  const allGuesses = loadAllGuesses(storageKey);
  localStorage.setItem(
    storageKey,
    JSON.stringify({
      ...allGuesses,
      [dayStringNew]: guesses,
    })
  );
}
