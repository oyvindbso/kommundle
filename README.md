# Kommund**l**e

[Kommund**l**e](https://www.kommundle.no) er et spill der man får et kommunevåpen og må gjette kommunen som har det kommunevåpenet. Man får vite hvor langt unna man er når man gjetter en kommune og man har seks forsøk. 

## Slagord**l**e

Slagord**l**e er samme spill, men med kommunens slagord i midten av siden i stedet for kommunevåpenet. Slagordene ligger i `src/domain/slogans.ts`, der kommunenavnet må være identisk med `name`-feltet i `src/domain/countries.ts`.

Varianten velges ut fra adressen i nettleseren: `/slagord` (eller `?slagord`, eller et vertsnavn som starter med `slagord.`) gir Slagordle, alt annet gir Kommundle. Siden dette er en single-page-app må webserveren levere `index.html` også for `/slagord` (på S3: sett `index.html` som feilside/404-dokument).

Slagordle har egne resultater og egen statistikk i nettleseren (`slagordGuesses` i localStorage), så de to spillene teller hver for seg.

Kommundle er en fork av spillet [Wordle](https://worldle.teuteuf.fr/) som er laget av [@teuteuf@mastodon.social](https://mastodon.social/@teuteuf). 

Kommunenes geografiske posisjon er beregnet basert på Folkehelseinstituttets r-pakke [splmaps](https://docs.sykdomspulsen.no/splmaps/articles/splmaps.html). 

Bildene av kommunevåpnene er hentet fra Wikipedias artikkel om [kommunevåpen](https://no.m.wikipedia.org/wiki/Kommunev%C3%A5pen_i_Norge). 

Det er [Øyvind Solheim](https://github.com/oyvindbso) og [Sandra Bruce](https://twitter.com/SandraBruce) som har laget Kommundle.

