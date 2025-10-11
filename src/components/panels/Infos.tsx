import { Guesses } from "../Guesses";
import { Panel } from "./Panel";
import React from "react";
import { Worldle } from "../Worldle";
import { formatDistance } from "../../domain/geography";
import { SettingsData } from "../../hooks/useSettings";

interface InfosProps {
  isOpen: boolean;
  close: () => void;
  settingsData: SettingsData;
}

export function Infos({ isOpen, close, settingsData }: InfosProps) {
  return (
    <Panel title="Spillemåte" isOpen={isOpen} close={close}>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div>
          Gjett riktig kommune på seks forsøk. Hver gjetning må være en norsk
          kommune.
        </div>
        <div>
          Etter hver gjetning får du vite hvor langt unna du er og hvilken
          retning den korrekte kommunen ligger relativ til den du har gjetta. I
          tillegg får du en prosentandel som sier hvor nærme du er relativ til
          Norges lengde. Et lavt tall nær 0 % tilsier at du er nesten hele
          Norges lengde unna den riktige kommunen. Et tall nær 100 % betyr at
          det ikke er langt igjen til riktig kommune. Kommunenes plassering er
          det beregnede midtpunktet i kommunen. Nabokommuner kan dermed være en
          god del kilometer fra hverandre.
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">Examples</div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Vadsø",
                direction: "SW",
                distance: 1_195_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Din første gjetning{" "}
            <span className="uppercase font-bold">Vadsø</span> er
            {formatDistance(1195000, settingsData.distanceUnit)} unna riktig
            kommune, den riktige kommunen ligger sørvestover.
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Tydal",
                direction: "W",
                distance: 127_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Din andre gjetning{" "}
            <span className="uppercase font-bold">Tydal</span> er nærmere og{" "}
            {formatDistance(127000, settingsData.distanceUnit)} unna riktig
            kommune. Den riktige kommunen ligger vestover.
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Rindal",
                direction: "N",
                distance: 0,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Din tredje gjetning,{" "}
            <span className="uppercase font-bold">Rindal</span>, er riktig.
            Gratulerer! 🎉
          </div>
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3 font-bold">
        Det kommer en ny <Worldle /> hver dag.
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">Angående avstander</div>
        <div>
          Avstandene som brukes er mellom midtpunkteti hver kommune. Selv
          nabokommuner har dermed mer enn 0 i avstand.
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <Worldle /> er inspirert av og baserer seg på kode fra{" "}
        <a
          className="underline"
          href="https://worldle.teuteuf.fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          WORLDLE
        </a>{" "}
        laget og generøst delt av{" "}
        <a
          className="underline"
          href="https://mastodon.social/@teuteuf"
          target="_blank"
          rel="noopener noreferrer"
        >
          @teuteuf@mastodon.social
        </a>
        .
      </div>
      <div className="space-y-3 text-justify pb-3">
        <div>
          <Worldle /> er laget av{" "}
          <a
            className="underline"
            href="https://nerdculture.de/@Oyvindbs"
            target="_blank"
            rel="me noopener noreferrer"
          >
            Øyvind Solheim{" "}
          </a>
          og{" "}
          <a
            className="underline"
            href="https://twitter.com/sandrabruce"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sandra Bruce.
          </a>
        </div>
        <div>
          <a
            className="underline"
            href="https://www.buymeacoffee.com/oyvindbs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lyst til å kjøpe oss en kaffe? ☕
          </a>
        </div>
        <div className="font-bold">TAKK</div>
        Denne siden hadde ikke vært mulig uten data tilrettelagt av andre og vi
        er veldig takknemlige for dette dugnadsarbeidet og for det offentliges
        tilgjengeliggjøring av data. Kommunevåpnene er hentet fra{" "}
        <a
          className="underline"
          href="https://no.m.wikipedia.org/wiki/Kommunev%C3%A5pen_i_Norge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wikipedia
        </a>
        . Norske kommuners geografiske plassering er beregnet ved hjelp av
        kartene som er tilgjengelige i r-pakka{" "}
        <a
          className="underline"
          href="https://www.csids.no/csmaps/"
          target="_blank"
          rel="noopener noreferrer"
        >csmaps </a>
          fra{" "}
        <a  
          className="underline"
          href="https://www.csids.no/"
          target="_blank"
          rel="noopener noreferrer"
        >
        Consortium for Statistics in Disease Surveillance
        </a>. Takk også til   <a
          className="underline"
          href="https://github.com/joonerik"
          target="_blank"
          rel="noopener noreferrer"
        >
          joonerik
        </a> og @joengene.bsky.social for hjelp til forbedringer av spillet.
      </div>
    </Panel>
  );
}
