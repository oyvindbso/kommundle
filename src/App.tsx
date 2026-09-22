import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Game } from "./components/Game";
import { SloganGame } from "./components/SloganGame";
import React, { useEffect, useState } from "react";
import { Infos } from "./components/panels/Infos";
import { useTranslation } from "react-i18next";
import { InfosFr } from "./components/panels/InfosFr";
import { InfosSlagord } from "./components/panels/InfosSlagord";
import { Settings } from "./components/panels/Settings";
import { useSettings } from "./hooks/useSettings";
import { Stats } from "./components/panels/Stats";
import { Worldle } from "./components/Worldle";
import { Slagordle } from "./components/Slagordle";
import { useGameVariant } from "./hooks/useGameVariant";
import {
  GUESSES_STORAGE_KEY,
  SLOGAN_GUESSES_STORAGE_KEY,
} from "./domain/guess";

const TITLE_COLORS = [
  "#d04b36",
  "#e36511",
  "#ffba00",
  "#00b180",
  "#147aab",
  "#675997",
  "#FFFFFF",
  "#4fa5c2",
  "#f587ac",
];

interface TitleProps {
  text: string;
}

function Title({ text }: TitleProps) {
  return (
    <h1 className="text-4xl font-bold uppercase tracking-wide text-center my-1 flex-auto">
      {Array.from(text).map((letter, index) => {
        const color = TITLE_COLORS[index % TITLE_COLORS.length];
        return (
          <span
            key={index}
            style={
              color === "#FFFFFF"
                ? {
                    color,
                    textShadow:
                      "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
                  }
                : { color }
            }
          >
            {letter}
          </span>
        );
      })}
      <span style={{ color: "#149954" }}> </span>
      <span>🇵🇸</span>
    </h1>
  );
}

function App() {
  const { i18n } = useTranslation();

  const gameVariant = useGameVariant();
  const isSlogan = gameVariant === "slagordle";

  const [infoOpen, setInfoOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [statsOpen, setStatsOpen] = useState(false);

  const [settingsData, updateSettings] = useSettings();

  useEffect(() => {
    if (settingsData.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [settingsData.theme]);

  useEffect(() => {
    document.title = isSlogan ? "Slagordle" : "Kommundle";
  }, [isSlogan]);

  return (
    <>
      <ToastContainer
        hideProgressBar
        position="top-center"
        transition={Flip}
        theme={settingsData.theme}
        autoClose={2000}
        bodyClassName="font-bold text-center"
      />
      {isSlogan ? (
        <InfosSlagord
          isOpen={infoOpen}
          close={() => setInfoOpen(false)}
          settingsData={settingsData}
        />
      ) : i18n.resolvedLanguage === "no" ? (
        <InfosFr
          isOpen={infoOpen}
          close={() => setInfoOpen(false)}
          settingsData={settingsData}
        />
      ) : (
        <Infos
          isOpen={infoOpen}
          close={() => setInfoOpen(false)}
          settingsData={settingsData}
        />
      )}
      <Settings
        isOpen={settingsOpen}
        close={() => setSettingsOpen(false)}
        settingsData={settingsData}
        updateSettings={updateSettings}
      />
      <Stats
        isOpen={statsOpen}
        close={() => setStatsOpen(false)}
        distanceUnit={settingsData.distanceUnit}
        storageKey={
          isSlogan ? SLOGAN_GUESSES_STORAGE_KEY : GUESSES_STORAGE_KEY
        }
      />
      <div className="flex justify-center flex-auto dark:bg-slate-900 dark:text-slate-50">
        <div className="w-full max-w-lg flex flex-col">
          <header className="border-b-2 px-3 border-gray-200 flex">
            <button
              className="mr-3 text-xl"
              type="button"
              onClick={() => setInfoOpen(true)}
            >
              ❓
            </button>
            <Title text={isSlogan ? "SLAGORDLE" : "KOMMUNDLE"} />
            <button
              className="ml-3 text-xl"
              type="button"
              onClick={() => setStatsOpen(true)}
            >
              📈
            </button>
            <button
              className="ml-3 text-xl"
              type="button"
              onClick={() => setSettingsOpen(true)}
            >
              ⚙️
            </button>
          </header>
          {isSlogan ? (
            <SloganGame settingsData={settingsData} />
          ) : (
            <Game settingsData={settingsData} />
          )}
          <footer className="flex flex-col items-center text-sm mt-8 mb-1">
            {isSlogan ? (
              <div className="text-center">
                ❤️ <Slagordle /> og vil du gjette kommunevåpen?{" "}
                <a className="underline" href="/">
                  {"Spill Kommundle!"}
                </a>
              </div>
            ) : (
              <div className="text-center">
                ❤️ <Worldle /> og vil du gjette slagord?{" "}
                <a className="underline" href="/slagord">
                  {"Spill Slagordle!"}
                </a>
              </div>
            )}
            <div className="text-center">
              Kjedelig at valget er over?{" "}
              <a
                className="underline"
                href="https://valg.kommundle.no/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Spill Valgle!"}
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
