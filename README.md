# Slagord**l**e

[Slagord**l**e](https://www.kommundle.no) er et spill der man får et kommuneslagord og må gjette kommunen som bruker det slagordet. Man får vite hvor langt unna man er når man gjetter en kommune, og man har seks forsøk.

Slagordle er søsterspillet til [Kommund**l**e](https://www.kommundle.no), der man gjetter kommunen ut fra kommunevåpenet i stedet. Denne greina (`slagordle`) inneholder slagordspillet; kommunevåpenspillet ligger på `kom_24`. De to er ment å leve hver for seg, så de kan bygges og publiseres som to separate spill.

Slagordene ligger i `src/domain/slogans.ts`, der kommunenavnet må være identisk med `name`-feltet i `src/domain/countries.ts`. Resultater og statistikk lagres under `slagordGuesses` i localStorage, atskilt fra Kommundles `guesses`, slik at de to spillene teller hver for seg om de kjøres på samme domene.

Kommundle er en fork av spillet [Wordle](https://worldle.teuteuf.fr/) som er laget av [@teuteuf@mastodon.social](https://mastodon.social/@teuteuf). 

Kommunenes geografiske posisjon er beregnet basert på Folkehelseinstituttets r-pakke [splmaps](https://docs.sykdomspulsen.no/splmaps/articles/splmaps.html). 

Slagordene er samlet inn fra kommunenes egne nettsider og andre åpne kilder. 

Det er [Øyvind Solheim](https://github.com/oyvindbso) og [Sandra Bruce](https://twitter.com/SandraBruce) som har laget Kommundle.
