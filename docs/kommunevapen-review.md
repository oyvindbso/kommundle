# Review of the municipal coat-of-arms SVGs

I reviewed all 357 SVG files in `public/images/countries/*/vector.svg` (356 municipalities plus one orphan file). No SVG files were changed. This document only lists what needs fixing.

## How the review was done

> **Limitation:** the environment that produced this review has no internet access, so it could **not** open the municipality home pages or Wikimedia. Instead, every SVG was rendered and checked against how official Norwegian municipal arms are drawn: flat tinctures, normally two colours, **no black contour lines** around charges or between fields, and the standard pointed shield. Items marked ❓ need a manual comparison with the municipality home page.

1. Every SVG was rendered to PNG at 300–500 px.
2. **Outline detection:** thin black lines inside the shield (excluding the shield edge and anything touching black/sable charges) were measured. When black lines cover at least 0.05 % of the shield interior, the arms are marked as having black outlines. This is the "Wikimedia style": a black line around every charge and along partition lines, plus black detail lines such as eyes and leaf veins. The official versions draw these details in the field colour or leave them out.
3. **Visual review:** all arms were inspected on contact sheets, and suspicious ones were zoomed in. That step caught grey "silver", shading, extra bordures, crowns and wrong shield shapes.

Note: almost every file also has a thin black line around the **shield edge**. That is not listed per municipality. It can be removed together with the outlines if wanted.

## Legend

| Symbol | Meaning |
|---|---|
| ✅ | Looks correct (flat colours, no outlines, no other deviations found) |
| ⚠️ | Correct motif, but drawn with black outlines/detail lines around the charges (Wikimedia style) |
| ❌ | Clearly wrong (wrong colour, shape, shading or missing file) |
| ❓ | Possible deviation; verify against the municipality home page |

## Summary

| Status | Count |
|---|---|
| ✅ Correct | 45 |
| ⚠️ Black outlines only | 269 |
| ❌ Wrong | 5 |
| ❓ Verify | 38 |

### Most important corrections

1. **Ålesund has no coat of arms in the game.** `countries.ts` uses `municip1508` (the code after the 2024 split from Haram), but the SVG is in `public/images/countries/municip1507/`. Rename the folder to `municip1508`.
2. **Black outlines (⚠️, 269 files):** strip the black `stroke` attributes and black detail paths, or replace the files with the borderless versions from the municipality or from the Norwegian heraldic register.
3. **Grey instead of silver / shading:** Smøla (1573), Grue (3417), Kragerø (4014). Possibly also Alver (4631), Orkland (5059) and Nordre Follo (3207).
4. **Wrong shield shape:** Rana (1833). Possibly also Vennesla (4223), Harstad (5503), Vestre Slidre (3452) and Vang (3454).
5. **Extra bordures/frames:** Fitjar (4615), and possibly Levanger (5037), Ullensaker (3209) and Nærøysund (5060).

## All municipalities

| Code | Municipality | Status | Comment |
|---|---|---|---|
| 0301 | Oslo-Oslove | ❓ | City seal (round, multicolour) rather than a heraldic shield. This is what Oslo uses, but it is very detailed. |
| 1101 | Eigersund | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1103 | Stavanger | ❓ | Mural crown / city-arms frame drawn around the shield. This is a civic-style rendering; check that the municipality uses the same version. |
| 1106 | Haugesund | ❓ | Mural crown / city-arms frame drawn around the shield. This is a civic-style rendering; check that the municipality uses the same version. |
| 1108 | Sandnes | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1111 | Sokndal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1112 | Lund | ✅ | No outlines or other deviations found |
| 1114 | Bjerkreim | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1119 | Hå | ✅ | No outlines or other deviations found |
| 1120 | Klepp | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1121 | Time | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. Black detail lines (eye, feathers) inside the bird. |
| 1122 | Gjesdal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. Black detail lines in the ram head. |
| 1124 | Sola | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1127 | Randaberg | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1130 | Strand | ✅ | No outlines or other deviations found |
| 1133 | Hjelmeland | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1134 | Suldal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1135 | Sauda | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1144 | Kvitsøy | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1145 | Bokn | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1146 | Tysvær | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1149 | Karmøy | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1151 | Utsira | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1160 | Vindafjord | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1505 | Kristiansund | ❓ | Mural crown / city-arms frame drawn around the shield. This is a civic-style rendering; check that the municipality uses the same version. |
| 1506 | Molde | ❓ | Mural crown / city-arms frame drawn around the shield. This is a civic-style rendering; check that the municipality uses the same version. |
| 1507 | Ålesund (old file) | ❌ | Orphan folder: Ålesund is listed as `municip1508`, but the SVG is stored as `municip1507`, so Ålesund has no image in the game. Rename the folder to `municip1508`. |
| 1511 | Vanylven | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1514 | Sande | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1515 | Herøy (Møre og Romsdal) | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1516 | Ulstein | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1517 | Hareid | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1520 | Ørsta | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1525 | Stranda | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1528 | Sykkylven | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1531 | Sula | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1532 | Giske | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1535 | Vestnes | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1539 | Rauma | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1547 | Aukra | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1554 | Averøy | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1557 | Gjemnes | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1560 | Tingvoll | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1563 | Sunndal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1566 | Surnadal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1573 | Smøla | ❌ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. Silver gulls are drawn light grey with shading and black outlines; silver should be flat white. The red is also a non-standard shade. |
| 1576 | Aure | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1577 | Volda | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1578 | Fjord | ✅ | No outlines or other deviations found |
| 1579 | Hustadvika | ✅ | No outlines or other deviations found |
| 1580 | Haram | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1804 | Bodø | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1806 | Narvik | ✅ | No outlines or other deviations found |
| 1811 | Bindal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1812 | Sømna | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1813 | Brønnøy | ✅ | No outlines or other deviations found |
| 1815 | Vega | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1816 | Vevelstad | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1818 | Herøy (Nordland) | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1820 | Alstahaug | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1822 | Leirfjord | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1824 | Vefsn | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1825 | Grane | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. Black detail lines in the salmon. |
| 1826 | Hattfjelldal | ✅ | No outlines or other deviations found |
| 1827 | Dønna | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1828 | Nesna | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1832 | Hemnes | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1833 | Rana | ❌ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. Wrong shield shape (square with rounded lower corners) instead of the standard pointed shield. |
| 1834 | Lurøy | ✅ | No outlines or other deviations found |
| 1835 | Træna | ✅ | No outlines or other deviations found |
| 1836 | Rødøy | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1837 | Meløy | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1838 | Gildeskål | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1839 | Beiarn | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1840 | Saltdal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1841 | Fauske-Fuosko | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1845 | Sørfold | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1848 | Steigen | ✅ | No outlines or other deviations found |
| 1851 | Lødingen | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1853 | Evenes | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1856 | Røst | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1857 | Værøy | ❓ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. Puffin has red beak and feet and black detailing. Official arms may be a plain two-tincture design; check against the municipality version. |
| 1859 | Flakstad | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1860 | Vestvågøy | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1865 | Vågan | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1866 | Hadsel | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1867 | Bø | ✅ | No outlines or other deviations found |
| 1868 | Øksnes | ✅ | No outlines or other deviations found |
| 1870 | Sortland-Suortá | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1871 | Andøy | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1874 | Moskenes | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 1875 | Hamarøy | ❓ | Charge drawn only as a white line (hollow) on light blue, with a flat-topped shield. Check against the municipality version. |
| 3101 | Halden | ❓ | Mural crown / city-arms frame drawn around the shield. This is a civic-style rendering; check that the municipality uses the same version. |
| 3103 | Moss | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3105 | Sarpsborg | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3107 | Fredrikstad | ❓ | Civic arms with a non-standard shield shape and/or several tinctures. Check against the municipality version. |
| 3110 | Hvaler | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3112 | Råde | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3114 | Våler (Østfold) | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3116 | Skiptvet | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3118 | Indre Østfold | ✅ | No outlines or other deviations found |
| 3120 | Rakkestad | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3122 | Marker | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3124 | Aremark | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3201 | Bærum | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3203 | Asker | ✅ | No outlines or other deviations found |
| 3205 | Lillestrøm | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3207 | Nordre Follo | ❓ | Charge drawn in grey instead of white (silver). Check against the municipality version. |
| 3209 | Ullensaker | ❓ | Gold bordure, dark blue field and a non-standard shield shape. Check against the municipality version. |
| 3212 | Nesodden | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3214 | Frogn | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3216 | Vestby | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3218 | Ås | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3220 | Enebakk | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3222 | Lørenskog | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3224 | Rælingen | ✅ | No outlines or other deviations found |
| 3226 | Aurskog-Høland | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3228 | Nes | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3230 | Gjerdrum | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3232 | Nittedal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3234 | Lunner | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3236 | Jevnaker | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3238 | Nannestad | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3240 | Eidsvoll | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3242 | Hurdal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3301 | Drammen | ❓ | Mural crown / city-arms frame drawn around the shield. This is a civic-style rendering; check that the municipality uses the same version. |
| 3303 | Kongsberg | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3305 | Ringerike | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3310 | Hole | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3312 | Lier | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3314 | Øvre Eiker | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3316 | Modum | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3318 | Krødsherad | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3320 | Flå | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3322 | Nesbyen | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3324 | Gol | ✅ | No outlines or other deviations found |
| 3326 | Hemsedal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3328 | Ål | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3330 | Hol | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3332 | Sigdal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3334 | Flesberg | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3336 | Rollag | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3338 | Nore og Uvdal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3401 | Kongsvinger | ❓ | Civic arms with a non-standard shield shape and/or several tinctures. Check against the municipality version. |
| 3403 | Hamar | ❓ | Civic arms with a non-standard shield shape and/or several tinctures. Check against the municipality version. |
| 3405 | Lillehammer | ❓ | Mural crown / city-arms frame drawn around the shield. This is a civic-style rendering; check that the municipality uses the same version. |
| 3407 | Gjøvik | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3411 | Ringsaker | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3412 | Løten | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3413 | Stange | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3414 | Nord-Odal | ✅ | No outlines or other deviations found |
| 3415 | Sør-Odal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3416 | Eidskog | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3417 | Grue | ❌ | Silver drawn as light grey (#ddd); should be flat white. |
| 3418 | Åsnes | ✅ | No outlines or other deviations found |
| 3419 | Våler (Innlandet) | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3420 | Elverum | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3421 | Trysil | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3422 | Åmot | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3423 | Stor-Elvdal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3424 | Rendalen | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3425 | Engerdal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3426 | Tolga | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3427 | Tynset | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3428 | Alvdal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3429 | Folldal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3430 | Os | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3431 | Dovre | ✅ | No outlines or other deviations found |
| 3432 | Lesja | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3433 | Skjåk | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3434 | Lom | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3435 | Vågå | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3436 | Nord-Fron | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3437 | Sel | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3438 | Sør-Fron | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3439 | Ringebu | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3440 | Øyer | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3441 | Gausdal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3442 | Østre Toten | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3443 | Vestre Toten | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3446 | Gran | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3447 | Søndre Land | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3448 | Nordre Land | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3449 | Sør-Aurdal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3450 | Etnedal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3451 | Nord-Aurdal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3452 | Vestre Slidre | ❓ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. Non-standard outer shape (scalloped shield). Check against the municipality version. |
| 3453 | Øystre Slidre | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3454 | Vang | ❓ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. Non-standard shield shape with a gold border of fleurs-de-lis. Check against the municipality version. |
| 3901 | Horten | ❓ | Mural crown / city-arms frame drawn around the shield. This is a civic-style rendering; check that the municipality uses the same version. |
| 3903 | Holmestrand | ✅ | No outlines or other deviations found |
| 3905 | Tønsberg | ✅ | No outlines or other deviations found |
| 3907 | Sandefjord | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3909 | Larvik | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 3911 | Færder | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4001 | Porsgrunn | ❓ | Civic arms with a non-standard shield shape and/or several tinctures. Check against the municipality version. |
| 4003 | Skien | ❓ | The SVG uses XML entity declarations (Illustrator export), which some renderers reject. Mural crown / city-arms frame drawn around the shield. |
| 4005 | Notodden | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4010 | Siljan | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4012 | Bamble | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4014 | Kragerø | ❌ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. Ship drawn in grey with black hatching and shading, not a flat two-tincture design. |
| 4016 | Drangedal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4018 | Nome | ✅ | No outlines or other deviations found |
| 4020 | Midt-Telemark | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4022 | Seljord | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4024 | Hjartdal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4026 | Tinn | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4028 | Kviteseid | ✅ | No outlines or other deviations found |
| 4030 | Nissedal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4032 | Fyresdal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4034 | Tokke | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4036 | Vinje | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4201 | Risør | ❓ | Civic arms with a non-standard shield shape and/or several tinctures. Check against the municipality version. |
| 4202 | Grimstad | ❓ | Civic arms with a non-standard shield shape and/or several tinctures. Check against the municipality version. |
| 4203 | Arendal | ❓ | Mural crown / city-arms frame drawn around the shield. This is a civic-style rendering; check that the municipality uses the same version. |
| 4204 | Kristiansand | ❓ | Civic arms with a non-standard shield shape and/or several tinctures. Check against the municipality version. |
| 4205 | Lindesnes | ✅ | No outlines or other deviations found |
| 4206 | Farsund | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4207 | Flekkefjord | ❓ | Civic arms with a non-standard shield shape and/or several tinctures. Check against the municipality version. |
| 4211 | Gjerstad | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4212 | Vegårshei | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4213 | Tvedestrand | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4214 | Froland | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4215 | Lillesand | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4216 | Birkenes | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4217 | Åmli | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4218 | Iveland | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4219 | Evje og Hornnes | ✅ | No outlines or other deviations found |
| 4220 | Bygland | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4221 | Valle | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4222 | Bykle | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4223 | Vennesla | ❓ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. Square shield shape with rounded corners instead of the standard pointed shield. |
| 4224 | Åseral | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4225 | Lyngdal | ✅ | No outlines or other deviations found |
| 4226 | Hægebostad | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4227 | Kvinesdal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4228 | Sirdal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4601 | Bergen | ❓ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. Round seal-like version with a gold ring instead of a shield. Check which version Bergen kommune uses. |
| 4602 | Kinn | ✅ | No outlines or other deviations found |
| 4611 | Etne | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4612 | Sveio | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4613 | Bømlo | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4614 | Stord | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4615 | Fitjar | ❓ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. Extra double bordure (white and dark-blue edge) around the shield, which is probably not part of the official arms. |
| 4616 | Tysnes | ✅ | No outlines or other deviations found |
| 4617 | Kvinnherad | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4618 | Ullensvang | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4619 | Eidfjord | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4620 | Ulvik | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4621 | Voss herad | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4622 | Kvam | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4623 | Samnanger | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4624 | Bjørnafjorden | ✅ | No outlines or other deviations found |
| 4625 | Austevoll | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4626 | Øygarden | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4627 | Askøy | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4628 | Vaksdal | ✅ | No outlines or other deviations found |
| 4629 | Modalen | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4630 | Osterøy | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4631 | Alver | ❓ | Bridge/boat drawn in grey instead of white (silver). Check against the municipality version. |
| 4632 | Austrheim | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4633 | Fedje | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4634 | Masfjorden | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4635 | Gulen | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4636 | Solund | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4637 | Hyllestad | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4638 | Høyanger | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4639 | Vik | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4640 | Sogndal | ✅ | No outlines or other deviations found |
| 4641 | Aurland | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4642 | Lærdal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4643 | Årdal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4644 | Luster | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4645 | Askvoll | ✅ | No outlines or other deviations found |
| 4646 | Fjaler | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4647 | Sunnfjord | ✅ | No outlines or other deviations found |
| 4648 | Bremanger | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4649 | Stad | ✅ | No outlines or other deviations found |
| 4650 | Gloppen | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 4651 | Stryn | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5001 | Trondheim | ❓ | Mural crown / city-arms frame drawn around the shield. This is a civic-style rendering; check that the municipality uses the same version. |
| 5006 | Steinkjer | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5007 | Namsos | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5014 | Frøya | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5020 | Osen | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5021 | Oppdal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5022 | Rennebu | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5025 | Røros | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5026 | Holtålen | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5027 | Midtre Gauldal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5028 | Melhus | ❓ | Colours are off: the archer is orange (#fc0) on crimson instead of heraldic gold on red. |
| 5029 | Skaun | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5031 | Malvik | ✅ | No outlines or other deviations found |
| 5032 | Selbu | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5033 | Tydal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5034 | Meråker | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5035 | Stjørdal | ✅ | No outlines or other deviations found |
| 5036 | Frosta | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5037 | Levanger | ❓ | Gold bordure and squared shield shape. Check whether the official version has a bordure. |
| 5038 | Verdal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5041 | Snåase-Snåsa | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5042 | Lierne | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5043 | Raarvihke-Røyrvik | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5044 | Namsskogan | ✅ | No outlines or other deviations found |
| 5045 | Grong | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5046 | Høylandet | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5047 | Overhalla | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5049 | Flatanger | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5052 | Leka | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5053 | Inderøy | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5054 | Indre Fosen | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5055 | Heim | ✅ | No outlines or other deviations found |
| 5056 | Hitra | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5057 | Ørland | ✅ | No outlines or other deviations found |
| 5058 | Åfjord | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5059 | Orkland | ❓ | Silver field drawn as light grey and the shield has a heavy black border. Check against the municipality version. |
| 5060 | Nærøysund | ❓ | Dark-blue border around the shield and three tinctures. Check against the municipality version. |
| 5061 | Rindal | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5501 | Tromsø | ❓ | Mural crown / city-arms frame drawn around the shield. This is a civic-style rendering; check that the municipality uses the same version. |
| 5503 | Harstad | ❓ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. Non-standard shield shape (notched top corners). |
| 5510 | Kvæfjord | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5512 | Tjeldsund | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5514 | Ibestad | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5516 | Gratangen | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5518 | Loabák-Lavangen | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5520 | Bardu | ✅ | No outlines or other deviations found |
| 5522 | Salangen | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5524 | Målselv | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5526 | Sørreisa | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5528 | Dyrøy | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5530 | Senja | ✅ | No outlines or other deviations found |
| 5532 | Balsfjord | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5534 | Karlsøy | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5536 | Lyngen | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5538 | Storfjord-Omasvuotna-Omasvuono | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5540 | Gáivuotna-Kåfjord-Kaivuono | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5542 | Skjervøy | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5544 | Nordreisa | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5546 | Kvænangen | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5601 | Alta | ✅ | No outlines or other deviations found |
| 5603 | Hammerfest | ❓ | Mural crown / city-arms frame drawn around the shield. This is a civic-style rendering; check that the municipality uses the same version. |
| 5605 | Sør-Varanger | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5607 | Vadsø | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5610 | Kárášjohka-Karasjok | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5612 | Guovdageaidnu-Kautokeino | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5614 | Loppa | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5616 | Hasvik | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5618 | Måsøy | ✅ | No outlines or other deviations found |
| 5620 | Nordkapp | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5622 | Porsanger-Porsáŋgu-Porsanki | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5624 | Lebesby | ✅ | No outlines or other deviations found |
| 5626 | Gamvik | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5628 | Deatnu-Tana | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5630 | Berlevåg | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5632 | Båtsfjord | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
| 5634 | Vardø | ❓ | Mural crown / city-arms frame drawn around the shield. This is a civic-style rendering; check that the municipality uses the same version. |
| 5636 | Unjárga-Nesseby | ⚠️ | Black outlines around the charges/partition lines (Wikimedia style); the official versions have no contour lines. |
