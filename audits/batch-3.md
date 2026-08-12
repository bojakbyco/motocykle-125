# Audyt katalogu motocykli 125 — batch 3

**Data weryfikacji:** 2026-08-12  
**Rynek:** Polska  
**Zakres:** 8 rekordów; dostępność, rok modelowy, cena, silnik, ABS, masa wraz z definicją, wysokość siedzenia, koła, zbiornik i wyposażenie.  
**Metoda:** aktualna oficjalna strona PL > oficjalny PDF PL > oficjalna strona regionalna/globalna. Wartości nieudokumentowanych nie dopowiadano. `null` oznacza brak wartości potwierdzonej dla rynku PL. W kolumnach „obecnie” pokazano stan rekordu; brak pola to `null`.

## Podsumowanie

- Wszystkie rekordy poza Zontesem mają aktualną, oficjalną stronę produktu PL potwierdzającą lokalną ofertę. Rekordy Suzuki i wszystkich pięciu Yamah mają nieaktualny `marketYear: 2025`; aktualne strony są oznaczone jako **2026**. Vespa nadal używa URL/arkusza z oznaczeniem 2024, a cena zawiera zastrzeżenie, że może zależeć od rocznika — nie ma podstaw do wpisania MY 2026.
- Wszystkie skutery mają błędne `engine.gearbox: 5`: Vespa publikuje **CVT**, Yamaha NMAX/XMAX — **automatyczną przekładnię z pasem klinowym**. To nie są skrzynie 5-biegowe.
- `yamaha-wr125r.chassis.abs: dual` jest sprzeczne ze stroną: Yamaha jawnie podaje **jednokanałowy ABS tylko z przodu**.
- `suzuki-gsx-r125.dimensions.wetWeightKg: 137` jest nieaktualne i błędnie nazwane: MY 2026 publikuje **`masa własna: 134 kg`**, bez definicji płynów/paliwa.
- Dla MT-125 i R125 Yamaha nie nazywa ABS-u dwukanałowym na pobranej stronie. Nie należy utrzymywać `dual` bez dodatkowego oficjalnego dowodu. Dla NMAX-a tekst jawnie mówi, że **obie tarcze** są wyposażone w ABS, co potwierdza działanie na obu kołach.
- Oficjalny polski adres `https://zontes.pl/` nie jest obecnie witryną marki: przekierowuje przez tracker do Ceneo. Nie da się potwierdzić polskiej dostępności, ceny ani rocznika ZT125-C. Dane techniczne poniżej są wyłącznie z oficjalnej strony Zontes UK i są oznaczone jako **non-PL**.

## 1. Suzuki GSX-R125

**Źródło PL:** https://suzuki.pl/lpmoto/gsxr125  
**Dostępność:** `current-pl` — aktualna strona MY 2026, cennik, „Zamów ofertę”, jazda testowa i lista dealerów.  
**Cena:** `17900` PLN brutto, regularna/rekomendowana cena detaliczna, rok produkcji i modelowy 2026.

| Pole | Obecnie | Potwierdzone / zalecane (YAML-compatible) | Ocena |
|---|---:|---:|---|
| `status` | `current-pl` | `current-pl` | zgodne |
| `marketYear` | `2025` | `2026` | **zmiana** |
| `pricePln` | `null` | `17900` | brak w rekordzie |
| `engine.capacityCc` | `124` | `124.4` | **zmiana precyzji** |
| `engine.powerKw` | `11` | `11` | zgodne |
| `engine.cooling` | `liquid` | `liquid` | zgodne |
| `engine.gearbox` | `6` | `6` | zgodne |
| `chassis.abs` | `dual` | `abs` | **niepotwierdzone `dual`**; strona mówi tylko, że ABS chroni „koła”, bez specyfikacji kanałów |
| `dimensions.wetWeightKg` | `137` | `null` | **usunąć tę semantykę**; oficjalne `masa własna: 134 kg`, bez definicji wet |
| `dimensions.kerbWeightKg` | `null` | `null` | brak definicji kerb/running order |
| `dimensions.seatHeightMm` | `785` | `785` | zgodne |
| `chassis.frontWheelIn` | `17` | `17` | zgodne; opona 90/80-17 |
| `chassis.rearWheelIn` | `17` | `17` | zgodne; opona 130/70-17 |
| `dimensions.tankL` | `11` | `11` | zgodne |
| `equipment.led` | `true` | `true` | zgodne; przednie i pozycyjne LED |

**Masa publikowana dosłownie:** `weightKg: 134`, `weightDefinition: "masa własna"`. Nie mapować automatycznie do `wetWeightKg`.  
**Wyposażenie potwierdzone:** LCD, LED przód/pozycja, bezkluczykowy zapłon, Suzuki Easy Start, ABS.

## 2. Vespa GTS 125 Euro 5+

**Strona PL:** https://www.vespa.com/pl_PL/models/gts/gts-125-4s4v-2024/  
**Oficjalny arkusz PL:** https://wlassets.vespa.com/wlassets/vespa/pl/tech_spec/2024/New-range-GTS/Vespa_GTS_125_tech_spec_PL/original/Vespa_GTS_125_tech_spec_PL.pdf?1729516516977  
**Dostępność:** `current-pl` — cena, dealer locator i jazda próbna są aktywne.  
**Rocznik:** `2024` jest jedynym jawnym oznaczeniem URL/arkusza; sama strona ostrzega, że cena może się różnić zależnie od rocznika. Nie potwierdzono MY 2025 ani MY 2026.  
**Cena:** `28500` PLN brutto, rekomendowana; nie przypisywać bezwarunkowo do jednego roku produkcji.

| Pole | Obecnie | Potwierdzone / zalecane (YAML-compatible) | Ocena |
|---|---:|---:|---|
| `status` | `current-pl` | `current-pl` | zgodne |
| `marketYear` | `2025` | `2024` | **2025 niepotwierdzone**; zachować uwagę o niejednoznacznym roczniku |
| `pricePln` | `null` | `28500` | brak w rekordzie |
| `engine.capacityCc` | `125` | `125` | zgodne |
| `engine.powerKw` | `10.3` | `10.3` | zgodne |
| `engine.cooling` | `liquid` | `liquid` | zgodne |
| `engine.gearbox` | `5` | `null` | **błąd**; źródło: `transmission: "CVT z serwerem momentu obrotowego"` |
| `chassis.abs` | `dual` | `dual` | zgodne; strona: ABS na obu kołach |
| masa | `null` | `null` | ani strona, ani oficjalny arkusz nie publikują masy |
| siedzenie | `null` | `790` | brak w rekordzie |
| `chassis.frontWheelIn` | `12` | `12` | zgodne |
| `chassis.rearWheelIn` | `12` | `12` | zgodne |
| bak | `null` | `7` | brak w rekordzie |
| `chassis.tractionControl` | `true` | `true` | zgodne; ASR |
| `equipment.led` | `true` | `true` | zgodne; reflektor i tylne światło LED |

**Wyposażenie potwierdzone:** ABS/ASR, Start & Stop RISS, keyless, Bike Finder, zdalne otwieranie siedzenia, USB w schowku, 3-calowy analogowy zestaw z LCD; Vespa MIA jest akcesorium, nie wyposażeniem standardowym.

## 3. Yamaha MT-125

**Źródło PL:** https://www.yamaha-motor.eu/pl/pl/motorcycles/hyper-naked/pdp/mt-125/  
**Dostępność:** `current-pl` — MY 2026, konfigurator, cena i jazda próbna.  
**Cena:** promocyjna/rekomendowana `23000` PLN; regularna `24300` PLN (Ice Storm), MY 2026.

| Pole | Obecnie | Potwierdzone / zalecane (YAML-compatible) | Ocena |
|---|---:|---:|---|
| `marketYear` | `2025` | `2026` | **zmiana** |
| cena | `null` | `23000` | promocyjna; `regularPricePln: 24300` |
| silnik | `125`, `11`, `liquid`, `6` | `125`, `11`, `liquid`, `6` | zgodne |
| `chassis.abs` | `dual` | `abs` | **`dual` niepotwierdzone** na aktualnej stronie |
| masa | `null` | `142` | definicja: `Masa z obciążeniem (wliczając wypełnione zbiorniki oleju i paliwa)` |
| siedzenie | `null` | `810` | brak w rekordzie |
| koła | `17 / 17` | `17 / 17` | zgodne; opony 100/80-17 i 140/70-17 |
| bak | `null` | `10` | brak w rekordzie |
| TCS / LED | `true / true` | `true / true` | zgodne |

**Wyposażenie potwierdzone:** TCS, LED, 5-calowy TFT, łączność MyRide i nawigacja turn-by-turn, sprzęgło A&S.

## 4. Yamaha NMAX 125

**Źródło PL:** https://www.yamaha-motor.eu/pl/pl/scooters/sport/pdp/nmax-125/  
**Dostępność:** `current-pl` — MY 2026, konfigurator, cena i jazda próbna.  
**Cena:** promocyjna/rekomendowana `14499` PLN; regularna `15499` PLN, MY 2026.

| Pole | Obecnie | Potwierdzone / zalecane (YAML-compatible) | Ocena |
|---|---:|---:|---|
| `marketYear` | `2025` | `2026` | **zmiana** |
| silnik | `125`, `9`, `liquid` | `125`, `9`, `liquid` | zgodne |
| `engine.gearbox` | `5` | `null` | **błąd**; `transmission: "Automatyczna z pasem klinowym"` |
| `chassis.abs` | `dual` | `dual` | potwierdzone funkcjonalnie: obie tarcze mają ABS |
| masa | `null` | `132` | definicja na stronie: `Waga w stanie gotowym do jazdy`; karta skrótowa: `Masa całkowita z płynami` |
| siedzenie | `null` | `770` | tabela wymiarów i karta skrótowa: 770 mm |
| siedzenie — konflikt wewnętrzny | — | `765` | tekst marketingowy „Świetna ergonomia” podaje 765 mm; raportować konflikt, nie wybierać po cichu |
| koła | `13 / 13` | `13 / 13` | zgodne |
| bak | `null` | `7.1` | brak w rekordzie |
| TCS | `true` | `null` | aktualna strona bazowego NMAX 125 nie potwierdza TCS; nie mylić z Tech MAX |
| LED / USB / szyba | `true / true / true` | `true / true / true` | potwierdzone |

**Wyposażenie potwierdzone:** LED, Start & Stop, USB-C, Smart Key, 4,2-calowy LCD z MyRide, schowek pod siedzeniem (zależnie od kasku).  
**Konflikt:** `seatHeightMm` ma dwa oficjalne odczyty: `770` (specyfikacja/skrót) i `765` (opis cechy). Bezpieczna forma audytowa: `seatHeightMm: 770`, `conflictNote: "opis cechy podaje 765 mm"`.

## 5. Yamaha R125

**Źródło PL:** https://www.yamaha-motor.eu/pl/pl/motorcycles/supersport/pdp/r125/  
**Dostępność:** `current-pl` — MY 2026, konfigurator i cena.  
**Cena:** rekomendowana `25600` PLN, MY 2026 (Icon Blue; strona pokazuje również Tech Black i Anniversary White).

| Pole | Obecnie | Potwierdzone / zalecane (YAML-compatible) | Ocena |
|---|---:|---:|---|
| `marketYear` | `2025` | `2026` | **zmiana** |
| silnik | `125`, `11`, `liquid`, `6` | `125`, `11`, `liquid`, `6` | zgodne |
| `chassis.abs` | `dual` | `abs` | **`dual` niepotwierdzone** na pobranej stronie |
| masa | `null` | `141` | `Masa z obciążeniem (wliczając wypełnione zbiorniki oleju i paliwa)` |
| siedzenie | `null` | `820` | brak w rekordzie |
| koła | `17 / 17` | `17 / 17` | zgodne; opony 100/80-17 i 140/70-17 |
| bak | `null` | `11` | brak w rekordzie |
| TCS / LED | `true / true` | `true / true` | zgodne |

**Wyposażenie potwierdzone:** TCS, LED, 5-calowy TFT, Bluetooth/nawigacja, sprzęgło Assist & Slipper; quickshifter jest przygotowaniem/akcesorium, nie potwierdzonym standardem.

## 6. Yamaha WR125R

**Źródło PL:** https://www.yamaha-motor.eu/pl/pl/motorcycles/adventure/pdp/wr125r/  
**Dostępność:** `current-pl`, ale z niuansem: strona MY 2026 pokazuje cenę i konfigurator, a przy kolorze widnieje „Powiadom mnie”, co może oznaczać oczekiwanie na fizyczną dostępność.  
**Cena:** rekomendowana `19999` PLN, MY 2026.

| Pole | Obecnie | Potwierdzone / zalecane (YAML-compatible) | Ocena |
|---|---:|---:|---|
| `marketYear` | `2026` | `2026` | zgodne |
| silnik | `125`, `10.7`, `liquid`, `6` | `125`, `10.7`, `liquid`, `6` | zgodne |
| `chassis.abs` | `dual` | `front-only` | **błąd krytyczny**; Yamaha: jednokanałowy ABS tylko przedniego hamulca |
| masa | `null` | `138` | `Masa z obciążeniem (wliczając wypełnione zbiorniki oleju i paliwa)` |
| siedzenie | `null` | `875` | brak w rekordzie |
| koła | `21 / 18`, `spoked` | `21 / 18`, `spoked` | rozmiary potwierdzone; konstrukcja szprychowa widoczna/opisana w oficjalnym materiale, lecz tabela tekstowa podaje przede wszystkim rozmiary opon |
| bak | `null` | `8.1` | opis marketingowy zaokrągla do 8 l; tabela: 8,1 l |
| LED | `true` | `true` | zgodne |

**Wyposażenie potwierdzone:** przedni jednokanałowy ABS, LED, LCD, łączność MyRide, Dunlop D605, VVA. Brak podstaw do TCS.

## 7. Yamaha XMAX 125

**Źródło PL:** https://www.yamaha-motor.eu/pl/pl/scooters/sport/pdp/xmax-125/  
**Dostępność:** `current-pl` — MY 2026, konfigurator i cena.  
**Cena:** promocyjna/rekomendowana `22500` PLN; regularna `23500` PLN, MY 2026.

| Pole | Obecnie | Potwierdzone / zalecane (YAML-compatible) | Ocena |
|---|---:|---:|---|
| `marketYear` | `2025` | `2026` | **zmiana** |
| silnik | `125`, `9`, `liquid` | `125`, `9`, `liquid` | zgodne |
| `engine.gearbox` | `5` | `null` | **błąd**; `transmission: "Automatyczna z pasem klinowym"` |
| `chassis.abs` | `dual` | `abs` | aktualna strona potwierdza ABS, ale nie podaje jawnie liczby kanałów w pobranej treści |
| masa | `null` | `167` | definicja: `Waga w stanie gotowym do jazdy` |
| siedzenie | `null` | `800` | brak w rekordzie |
| koła | `15 / 14` | `15 / 14` | zgodne |
| bak | `null` | `13.2` | karta skrótowa zaokrągla do 13 l; tabela: 13,2 l |
| TCS / LED / USB / szyba | `true / true / true / true` | `true / true / true / true` | potwierdzone |

**Wyposażenie potwierdzone:** ABS, TCS, full LED, USB-C, Smart Key, 4,3-calowy LCD/MyRide, regulowana szyba i kierownica, schowek na 2 kaski (zależnie od rozmiaru/kształtu). Strona podaje szybę regulowaną narzędziami; zapis wysokości całkowitej mówi „elektronicznie regulowana szyba” — wewnętrzna niespójność, nie przenosić bez wyjaśnienia.

## 8. Zontes ZT125-C

**Adres w rekordzie:** https://zontes.pl/ — **nie jest obecnie wiarygodnym źródłem marki**; zwraca stronę z przekierowaniem przez `am-track.pl` do Ceneo.  
**Oficjalna strona regionalna (UK, nie PL):** https://zontes.co.uk/zt125-c/  
**Dostępność PL / cena PL / MY PL:** `unverified` / `null` / `null`. Nie znaleziono działającej oficjalnej strony polskiego importera ani polskiej karty technicznej.  
**Uwaga:** poniższe parametry mogą służyć wyłącznie jako jawnie oznaczone dane oficjalne **non-PL**; nie dowodzą polskiej oferty ani identycznej homologacji.

| Pole | Obecnie | Potwierdzone oficjalnie UK (YAML-compatible) | Ocena dla rekordu PL |
|---|---:|---:|---|
| `status` | `current-pl` | `unverified-pl` | **brak dowodu aktualnej dostępności PL** |
| `marketYear` | `2025` | `null` | niepotwierdzone |
| cena PL | `null` | `null` | UK pokazuje GBP, nie wolno przenosić do PL |
| `engine.capacityCc` | `125` | `124.7` | różnica precyzji; non-PL |
| `engine.powerKw` | `10.8` | `10.8` | zgodne z UK |
| `engine.cooling` | `liquid` | `liquid` | zgodne z UK |
| `engine.gearbox` | `6` | `6` | zgodne z UK |
| `chassis.abs` | `dual` | `dual` | UK jawnie: Bosch dual-channel ABS |
| masa | `null` | `153` | UK: `Mass in running order`; definicja składników niepodana |
| siedzenie | `null` | `700` | UK |
| koła | `16 / 15` | `16 / 16` | **konflikt:** rekord ma tylne 15, oficjalna UK podaje obręcze/opony 16 z przodu i z tyłu |
| bak | `null` | `16.5` | UK |
| LED | `true` | `true` | UK |

**Wyposażenie potwierdzone tylko dla UK:** dual-channel Bosch ABS, pełne LED, keyless, USB-A + USB-C (do 18 W), TPMS, LCD, odlewane aluminiowe obręcze.  
**Konflikt na stronie UK:** tabela podaje moc `10.8 kW / 8500 rpm`, opis `10.8 kW / 9000 rpm`; nie rozstrzygać bez właściwej karty homologacyjnej.

## Zalecane korekty rekordów (bez wykonywania zmian)

1. Ustawić MY 2026 dla Suzuki GSX-R125 oraz Yamaha MT-125, NMAX 125, R125 i XMAX 125.
2. Suzuki: `capacityCc: 124.4`; nie używać `wetWeightKg: 137`. Zachować oficjalne `134 kg` jako `masa własna` tylko w polu pozwalającym zachować definicję.
3. Vespa/NMAX/XMAX: usunąć `gearbox: 5`; schemat powinien obsługiwać `transmission: cvt` / `automatic-belt` zamiast wymuszać liczbę przełożeń.
4. WR125R: zmienić ABS z `dual` na jednoznaczny wariant `front-only`/`single-channel-front`.
5. NMAX: dodać konflikt siedzenia 770 vs 765 mm; podstawowa tabela techniczna wspiera 770 mm.
6. Zontes: nie utrzymywać `current-pl` na podstawie `zontes.pl`; wymagane nowe źródło oficjalnego polskiego importera. Nie przenosić ceny ani statusu z UK. Zweryfikować tylne koło — oficjalne UK podaje 16 cali.
7. Dla MT-125, R125, XMAX i Suzuki nie nazywać ABS-u `dual`, dopóki oficjalne źródło nie określi obu kół/kanałów; samo słowo „ABS” nie wystarcza.

## Rejestr źródeł

1. Suzuki GSX-R125 PL: https://suzuki.pl/lpmoto/gsxr125
2. Suzuki gama PL (potwierdza promowanie modelu): https://suzuki.pl/moto
3. Vespa GTS 125 PL: https://www.vespa.com/pl_PL/models/gts/gts-125-4s4v-2024/
4. Vespa GTS 125 oficjalny PDF PL: https://wlassets.vespa.com/wlassets/vespa/pl/tech_spec/2024/New-range-GTS/Vespa_GTS_125_tech_spec_PL/original/Vespa_GTS_125_tech_spec_PL.pdf?1729516516977
5. Yamaha MT-125 PL: https://www.yamaha-motor.eu/pl/pl/motorcycles/hyper-naked/pdp/mt-125/
6. Yamaha NMAX 125 PL: https://www.yamaha-motor.eu/pl/pl/scooters/sport/pdp/nmax-125/
7. Yamaha R125 PL: https://www.yamaha-motor.eu/pl/pl/motorcycles/supersport/pdp/r125/
8. Yamaha WR125R PL: https://www.yamaha-motor.eu/pl/pl/motorcycles/adventure/pdp/wr125r/
9. Yamaha XMAX 125 PL: https://www.yamaha-motor.eu/pl/pl/scooters/sport/pdp/xmax-125/
10. Zontes — wadliwy adres z rekordu: https://zontes.pl/
11. Zontes ZT125-C oficjalna strona UK (źródło non-PL): https://zontes.co.uk/zt125-c/
