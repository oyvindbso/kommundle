import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { SloganGame } from "./components/SloganGame";
import { InfosSlagord } from "./components/panels/InfosSlagord";
import { Settings } from "./components/panels/Settings";
import { useSettings } from "./hooks/useSettings";
import { Stats } from "./components/panels/Stats";
import { Slagordle } from "./components/Slagordle";
import { SLOGAN_GUESSES_STORAGE_KEY } from "./domain/guess";

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

function Title() {
  return (
    <h1 className="text-[clamp(1.125rem,5.8vw,2rem)] font-bold uppercase tracking-wide text-center my-1 flex-auto whitespace-nowrap">
      {Array.from("SLAGORDLE").map((letter, index) => {
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
  useTranslation();

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
      <InfosSlagord
        isOpen={infoOpen}
        close={() => setInfoOpen(false)}
        settingsData={settingsData}
      />
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
        storageKey={SLOGAN_GUESSES_STORAGE_KEY}
      />
      <div className="flex justify-center flex-auto dark:bg-slate-900 dark:text-slate-50">
        <div className="w-full max-w-lg flex flex-col">
          <header className="border-b-2 px-3 border-gray-200 flex items-center gap-2 sm:gap-3">
            <div className="flex flex-col items-start leading-none">
              <button
                className="text-xl leading-none"
                type="button"
                onClick={() => setInfoOpen(true)}
              >
                ❓
              </button>
              <a
                className="text-xl leading-none no-underline whitespace-nowrap"
                href="https://kommundle.no/"
                target="_blank"
                rel="noopener noreferrer"
                title="Spill Kommundle"
                aria-label="Spill Kommundle"
              >
                ←<span className="hidden sm:inline">🌍</span>
              </a>
            </div>
            <Title />
            <div className="flex flex-col items-end leading-none">
              <div className="flex gap-2 sm:gap-3">
                <button
                  className="text-xl leading-none"
                  type="button"
                  onClick={() => setStatsOpen(true)}
                >
                  📈
                </button>
                <button
                  className="text-xl leading-none"
                  type="button"
                  onClick={() => setSettingsOpen(true)}
                >
                  ⚙️
                </button>
              </div>
              <a
                className="text-xl leading-none no-underline whitespace-nowrap"
                href="https://valg.kommundle.no/"
                target="_blank"
                rel="noopener noreferrer"
                title="Spill Valgle"
                aria-label="Spill Valgle"
              >
                <span className="hidden sm:inline">🗳️</span>→
              </a>
            </div>
          </header>
          <SloganGame settingsData={settingsData} />
          <footer className="text-center text-xs leading-relaxed px-3 mt-8 mb-3 space-y-1">
            <p>
              ❤️ <Slagordle /> og vil du gjette kommunevåpen?{" "}
              <a
                className="underline"
                href="https://kommundle.no/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spill Kommundle!
              </a>
            </p>
            <p>
              Kjedelig at valget er over?{" "}
              <a
                className="underline"
                href="https://valg.kommundle.no/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spill Valgle!
              </a>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
