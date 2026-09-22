import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Game } from "./components/Game";
import React, { useEffect, useState } from "react";
import { Infos } from "./components/panels/Infos";
import { useTranslation } from "react-i18next";
import { InfosFr } from "./components/panels/InfosFr";
import { Settings } from "./components/panels/Settings";
import { useSettings } from "./hooks/useSettings";
import { Stats } from "./components/panels/Stats";
import { Worldle } from "./components/Worldle";

function App() {
  const { i18n } = useTranslation();

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
      {i18n.resolvedLanguage === "no" ? (
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
                href="https://valg.kommundle.no/"
                target="_blank"
                rel="noopener noreferrer"
                title="Spill Valgle"
                aria-label="Spill Valgle"
              >
                ←<span className="hidden sm:inline">🗳️</span>
              </a>
            </div>
            <h1 className="text-[clamp(1.125rem,5.8vw,2rem)] font-bold uppercase tracking-wide text-center my-1 flex-auto whitespace-nowrap">
              <span style={{color:"#d04b36"}}>K</span>
              <span style={{color:"#e36511"}}>O</span>
              <span style={{color:"#ffba00"}}>M</span>
              <span style={{color:"#00b180"}}>M</span>
              <span style={{color:"#147aab"}}>U</span>
              <span style={{color:"#675997"}}>N</span>
              <span style={{ color: "#FFFFFF",textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black" }}>D</span>
              <span style={{color:"#4fa5c2"}}>L</span>
              <span style={{color:"#f587ac"}}>E</span>
              <span style={{ color: "#149954" }}> </span>
              <span>🇵🇸</span>
            </h1>
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
                href="https://slagordle.kommundle.no/"
                target="_blank"
                rel="noopener noreferrer"
                title="Spill Slagordle"
                aria-label="Spill Slagordle"
              >
                <span className="hidden sm:inline">💬</span>→
              </a>
            </div>
          </header>
          <Game settingsData={settingsData} />
          <footer className="text-center text-xs leading-relaxed px-3 mt-8 mb-3 space-y-1">
            <p>
              Så du har fiksa dagens <Worldle />? Hvor god er du på
              kommuneslagord?!?{" "}
              <a
                className="underline"
                href="https://slagordle.kommundle.no/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spill Slagordle!
              </a>
            </p>
            <p>
              Snart er det valg også.{" "}
              <a
                className="underline"
                href="https://valg.kommundle.no/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hva med litt Valgle!
              </a>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
