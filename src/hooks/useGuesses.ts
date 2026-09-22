import { useCallback, useState } from "react";
import {
  Guess,
  GUESSES_STORAGE_KEY,
  loadAllGuesses,
  saveGuesses,
} from "../domain/guess";

export function useGuesses(
  dayString: string,
  storageKey: string = GUESSES_STORAGE_KEY
): [Guess[], (guess: Guess) => void] {
  const [guesses, setGuesses] = useState<Guess[]>(
    loadAllGuesses(storageKey)[dayString] ?? []
  );

  const addGuess = useCallback(
    (newGuess: Guess) => {
      const newGuesses = [...guesses, newGuess];

      setGuesses(newGuesses);
      saveGuesses(dayString, newGuesses, storageKey);
    },
    [dayString, guesses, storageKey]
  );

  return [guesses, addGuess];
}
