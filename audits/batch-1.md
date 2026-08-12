# Audyt katalogu 125 cm³ — batch 1

**Rynek:** Polska  
**Data weryfikacji i odczytu cen:** `2026-08-12`  
**Zakres:** 9 modeli wskazanych w zleceniu. Nie edytowano rekordów katalogu.

## Metoda i znaczniki

Priorytet dowodów: oficjalna strona PL producenta/importera → oficjalny PDF podlinkowany z tej strony → strona EU/global. Wartości zapisano bez domysłów i bez normalizacji definicji masy. `verified` oznacza wartość podaną w źródle pierwszej strony; `unverified` — brak jednoznacznego potwierdzenia w pobranym źródle; `conflict` — rekord lub dwa źródła pierwszej strony są sprzeczne. Cena jest stanem strony w dniu audytu, nie gwarancją ceny historycznej ani przyszłej.

> **Ważne dla automatycznych zmian:** pola „Potwierdzone” są zapisane w formie YAML-compatible. Tekst `unverified` nie powinien być automatycznie zamieniany na wartość liczbową ani logiczną. Honda publikuje etykietę `Masa własna pojazdu`; bez dodatkowej definicji nie wolno przepisywać jej automatycznie do `wetWeightKg`.

## Podsumowanie konfliktów wysokiego priorytetu

1. Wszystkie trzy rekordy Hondy mają nieaktualny `marketYear: 2025`: CB125R i Forza są już jawnie `model 2026, produkcja 2026`; PCX pozostaje `model 2025`, ale ma `produkcja 2026`.
2. `gearbox: 5` w Aprilia SR GT 125, Honda Forza 125 i Honda PCX125 jest błędne: oficjalne źródła podają bezstopniową przekładnię `CVT`.
3. Junak M12 Vintage ma w rekordzie stare dane silnika (`7.5 kW`) i błędny typ kół (`cast`). Aktualna wersja ABS ma `9.0 kW`, koła szprychowe, 15-litrowy bak, siedzenie 720 mm i masę własną 144 kg.
4. `wetWeightKg` Hondy jest semantycznie ryzykowne: źródło mówi tylko `Masa własna pojazdu`. PCX dodatkowo zmienił wartość z 134 na 133 kg.
5. BKX: lokalna strona wprost publikuje `Waga sucha (KG): N/A`; nie wolno uzupełniać masy z innego rynku. Zakres ABS nie jest jednoznaczny — nie potwierdzono `dual`.
6. Leoncino: aktywna właściwa strona ma slug `leoncino-125-2`; obecny URL `.../leoncino-125` zwraca 404. Lokalna strona nie potwierdza ABS, więc `abs: dual` jest nieudokumentowane.
7. Aprilia RS/RX oficjalne PDF-y potwierdzają precyzyjną masę mokrą wg VO (EU) 168/2013; oba rekordy pomijają tę wartość, siedzenie i bak. RX ma także standardowy skid plate i uchwyty pasażera.

---

## Aprilia RS 125

**Dostępność PL / rocznik:** `status: current-pl` — aktywna polska karta, cena, jazda testowa i dealerzy; wariant URL i materiały: `marketYear: 2025`.  
**Źródła:** [karta PL](https://www.aprilia.com/pl_PL/models/rs-125/rs-125-125-4s4v-2025/) · [oficjalny PDF](https://wlassets.aprilia.com/wlassets/aprilia/master/tech_spec/RS-125/RS_125_tech_spec_EN/original/RS_125_tech_spec_EN.pdf?1747315624901)

| Atrybut | Obecne | Potwierdzone | Status / dowód |
|---|---|---|---|
| dostępność / rocznik | `current-pl`; `2025` | `current-pl`; `2025` | verified — karta PL, dealerzy i jazda testowa |
| cena | brak | `pricePln: 23900`; `priceType: recommended-retail-vat-included`; `priceObservedAt: 2026-08-12` | verified — „23 900 zł Cena rekomendowana (z VAT)”; zastrzeżenie: może zależeć od rocznika |
| pojemność | `124` | `124.2` | conflict — PDF: „Engine capacity 124.2 cc” |
| moc | `11 kW` | `11 kW`; `15 HP`; `10500 rpm` | verified — PDF |
| chłodzenie | `liquid` | `liquid` | verified — „liquid-cooled” |
| skrzynia | `6` | `6` | verified — „Gearbox 6 speed” |
| ABS | `dual` | `dual` | verified — „Dual-channel ABS with anti-roll-over system” |
| masa | brak | `wetWeightKg: 144`; `weightDefinition: "VO (EU) 168/2013; all fluids; standard equipment; at least 90% usable tank volume"` | verified — PDF i przypis |
| siedzenie | brak | `seatHeightMm: 820` | verified — PDF |
| koła | `17 / 17`; `cast` | `frontWheelIn: 17`; `rearWheelIn: 17`; `wheelType: cast` | verified — PDF: cast 17×2.75 / 17×3.5 |
| bak | brak | `tankL: 14.5` | verified — PDF i karta PL |
| wyposażenie | `led: true` | `led: true`; `tractionControl: true`; `lcd: true`; `quickshifter: optional`; `apriliaMia: optional`; `usb: optional` | verified — Full LED i ATC standard; pozostałe jawnie opisane |

## Aprilia RX 125

**Dostępność PL / rocznik:** `status: current-pl`; `marketYear: 2025` — aktywna polska karta, cena, jazda testowa i dealerzy.  
**Źródła:** [karta PL](https://www.aprilia.com/pl_PL/models/rx-125/rx-125-125-4s4v-2025/) · [oficjalny PDF EN](https://wlassets.aprilia.com/wlassets/aprilia/master/tech_spec/RX-SX/RX_125_tech_spec_EN/original/RX_125_tech_spec_EN.pdf?1743177019932) · [oficjalny PDF PL](https://wlassets.aprilia.com/wlassets/aprilia/pl/tech_spec/2025/RX_125_tech_spec_PL/original/RX_125_tech_spec_PL.pdf?1745480821763)

| Atrybut | Obecne | Potwierdzone | Status / dowód |
|---|---|---|---|
| dostępność / rocznik | `current-pl`; `2025` | `current-pl`; `2025` | verified |
| cena | brak | `pricePln: 19500`; `priceType: recommended-retail-vat-included`; `priceObservedAt: 2026-08-12` | verified — „19 500 zł Cena rekomendowana (z VAT)” |
| pojemność | `124` | `124.2` | conflict — PDF |
| moc | `11 kW` | `11 kW`; `15 HP`; `10500 rpm` | verified |
| chłodzenie | `liquid` | `liquid` | verified |
| skrzynia | `6` | `6` | verified |
| ABS | `front` | `front` | verified — „Single-channel ABS”; opis mówi, że moduluje przedni hamulec |
| masa | brak | `wetWeightKg: 136`; `weightDefinition: "VO (EU) 168/2013; all fluids; standard equipment; at least 90% usable tank volume"` | verified — PDF |
| siedzenie | `905` | `905` | verified |
| koła | `21 / 18`; `spoked` | `frontWheelIn: 21`; `rearWheelIn: 18`; `wheelType: spoked` | verified |
| bak | brak | `tankL: 7` | verified — PDF |
| wyposażenie | `led: true` | `led: true`; `colorDigitalDashboard: true`; `passengerGrabHandles: true`; `skidPlate: true`; `usb: optional` | verified — PDF/karta; USB jest akcesorium, nie standardem |

**Konflikt wewnątrz oficjalnej karty:** opis sekcji podwozia mówi o tylnym skoku `220 mm`, późniejszy blok marketingowy o `210 mm`; PDF podaje `220 mm`. Nie dotyczy żądanego schematu, ale nie należy automatycznie kopiować 210 mm.

## Aprilia SR GT 125

**Dostępność PL / rocznik:** `status: current-pl`; `marketYear: 2025` — aktywna lokalna karta cenowa.  
**Źródła:** [karta PL](https://www.aprilia.com/pl_PL/models/sr-gt/sr-gt-125-4s4v-2025/) · [oficjalny PDF](https://wlassets.aprilia.com/wlassets/aprilia/master/tech_spec/SR-GT/SR_GT_125_tech_spec_EN/original/SR_GT_125_tech_spec_EN.pdf?1739199512864)

| Atrybut | Obecne | Potwierdzone | Status / dowód |
|---|---|---|---|
| dostępność / rocznik | `current-pl`; `2025` | `current-pl`; `2025` | verified |
| cena | brak | `pricePln: 16900`; `priceType: recommended-retail-vat-included`; `priceObservedAt: 2026-08-12` | verified |
| pojemność | `125` | `125` | verified |
| moc | `11 kW` | `11 kW`; `8900 rpm` | verified |
| chłodzenie | `liquid` | `liquid` | verified |
| skrzynia | `5` | `gearboxType: CVT`; `gearbox: null` | **conflict** — PDF: „Continuously variable transmission (CVT)” |
| ABS | `front` | `front` | verified — karta: „jednokanałowy ABS”; PDF oznacza ABS tylko przy przednim hamulcu |
| masa | brak | `unverified` | PDF nie publikuje masy; nie uzupełniać |
| siedzenie | brak | `seatHeightMm: 799` | verified — PDF |
| koła | `14 / 13`; `cast` | `frontWheelIn: 14`; `rearWheelIn: 13`; `wheelType: unverified` | średnice verified; PDF mówi o oponach, nie definiuje materiału/typu obręczy |
| bak | brak | `tankL: 9` | verified — PDF |
| wyposażenie | `led: true`; `windscreen: true` | `led: true`; `windscreen: true`; `usb: true`; `lcd: true`; `startStop: true`; `apriliaMia: optional` | verified — karta PL |

## Benelli BKX 125

**Dostępność PL / rocznik:** `status: current-pl` — lokalna strona podaje cenę i prowadzi do stanów polskiego importera dla czterech wariantów `2025`; najbezpieczniej `marketYear: 2025`.  
**Źródło:** [Benelli Polska](https://www.benelli.com/pl-pl/products/bkx-125)

| Atrybut | Obecne | Potwierdzone | Status / dowód |
|---|---|---|---|
| dostępność / rocznik | `current-pl`; `2025` | `current-pl`; `2025` | verified — „Sprawdź dostępność” prowadzi do ofert importera oznaczonych 2025 |
| cena | brak | `pricePln: 15490`; `priceType: from`; `priceObservedAt: 2026-08-12` | verified — „Cena od 15,490 PLN” |
| pojemność | `125` | `125` | verified |
| moc | `11 kW` | `11.0 kW`; `15.0 hp`; `9500 rpm` | verified |
| chłodzenie | `liquid` | `liquid` | verified |
| skrzynia | `6` | `6` | verified |
| ABS | `dual` | `abs: generic` | **conflict / zakres unverified** — opis mówi tylko „wyposażony w ABS”; tabela przypisuje ABS do przedniego hamulca, lecz nie do tylnego. Nie ma podstaw do `dual` |
| masa | brak | `weightKg: null`; `weightDefinition: dry`; `sourceValue: N/A` | verified brak wartości — strona wprost: „Waga sucha (KG) N/A” |
| siedzenie | brak | `seatHeightMm: 860` | verified |
| koła | `19 / 17`; `spoked` | `frontWheelIn: 19`; `rearWheelIn: 17`; `wheelType: spoked` | verified |
| bak | brak | `tankL: 12` | verified |
| wyposażenie | `led: true`; `usb: true`; `windscreen: true` | `led: true`; `handguards: true`; `usb: unverified`; `windscreen: unverified` | **conflict** — karta potwierdza DRL/LED i kierunkowskazy zintegrowane z handbarami; nie znaleziono potwierdzenia USB ani szyby |

## Benelli Leoncino 125

**Dostępność PL / rocznik:** `status: current-pl` — aktywna lokalna karta i cena. `marketYear: unverified`: karta nie deklaruje rocznika; nie wolno zachować `2025` jako zweryfikowanego.  
**Źródło:** [Benelli Polska — aktualny slug](https://www.benelli.com/pl-pl/products/leoncino-125-2) (obecny w rekordzie `https://www.benelli.com/pl-pl/products/leoncino-125` zwraca 404)

| Atrybut | Obecne | Potwierdzone | Status / dowód |
|---|---|---|---|
| dostępność / rocznik | `current-pl`; `2025` | `current-pl`; `marketYear: unverified` | dostępność verified; rocznik unverified |
| cena | brak | `pricePln: 14990`; `priceType: from`; `priceObservedAt: 2026-08-12` | verified — „Cena od 14,990 PLN” |
| pojemność | `125` | `125` | verified |
| moc | `9.4 kW` | `9.4 kW`; `12.8 KM`; `9500 rpm` | verified |
| chłodzenie | `liquid` | `liquid` | verified |
| skrzynia | `6` | `6` | verified |
| ABS | `dual` | `unverified` | **conflict** — lokalna karta nie podaje ABS; nie inferować z dwóch tarcz |
| masa | brak | `dryWeightKg: 137`; `weightDefinition: dry` | verified — „Waga sucha (kg) 137” |
| siedzenie | brak | `seatHeightMm: 800` | verified |
| koła | `17 / 17`; `cast` | `frontWheelIn: 17`; `rearWheelIn: 17`; `wheelType: cast-aluminium` | verified — stop aluminium; uwaga: strona ma oczywistą literówkę opony przód `1000/80-17`, więc nie kopiować rozmiaru opony bez korekty źródła |
| bak | brak | `tankL: 12.5` | verified |
| wyposażenie | `led: true` | `led: true`; `digitalDashboard: true`; `gearIndicator: true` | verified |

## Honda CB125R

**Dostępność PL / rocznik:** `status: current-pl`; `marketYear: 2026`; `productionYear: 2026` — lokalna karta cenowa, konfiguracja, jazda próbna i dealer.  
**Źródła:** [specyfikacja i cena PL](https://www.honda.pl/motorcycles/range/street/cb125r/specifications.html) · [opis PL](https://www.honda.pl/motorcycles/range/street/cb125r/overview.html)

| Atrybut | Obecne | Potwierdzone | Status / dowód |
|---|---|---|---|
| dostępność / rocznik | `current-pl`; `2025` | `current-pl`; `marketYear: 2026`; `productionYear: 2026` | **conflict** — karta: „model 2026, produkcja 2026” |
| cena | brak | `pricePln: 21800`; `priceType: current-list-price`; `priceObservedAt: 2026-08-12`; `marketYear: 2026`; `productionYear: 2026` | verified |
| pojemność | `125` | `124.9` | conflict — oficjalnie 124,9 cm³ |
| moc | `11 kW` | `11 kW`; `15 KM`; `10000 rpm` | verified |
| chłodzenie | `liquid` | `liquid` | verified |
| skrzynia | `6` | `6` | verified |
| ABS | `dual` | `dual`; `imuManaged: true` | verified — opis: „2-kanałowy układ ABS zarządzany przez ... IMU” |
| masa | `wetWeightKg: 130` | `weightKg: 130`; `weightDefinition: masa-wlasna-pojazdu` | wartość verified, **definicja w rekordzie conflict** — źródło nie mówi `wet` |
| siedzenie | `816` | `816` | verified |
| koła | `17 / 17`; `cast` | `frontWheelIn: 17`; `rearWheelIn: 17`; `wheelType: unverified` | średnice verified; typ obręczy nie został jednoznacznie nazwany w pobranej specyfikacji |
| bak | `10.1` | `10.1` | verified |
| wyposażenie | `led: true` | `led: true`; `tftIn: 5`; `hiss: true` | verified |

## Honda Forza 125

**Dostępność PL / rocznik:** `status: current-pl`; `marketYear: 2026`; `productionYear: 2026`.  
**Źródła:** [specyfikacja i cena PL](https://www.honda.pl/motorcycles/range/scooter/forza-125/specifications.html) · [opis PL](https://www.honda.pl/motorcycles/range/scooter/forza-125/overview.html)

| Atrybut | Obecne | Potwierdzone | Status / dowód |
|---|---|---|---|
| dostępność / rocznik | `current-pl`; `2025` | `current-pl`; `marketYear: 2026`; `productionYear: 2026` | **conflict** |
| cena | brak | `pricePln: 23900`; `priceType: current-list-price`; `priceObservedAt: 2026-08-12`; `variant: standard`; `marketYear: 2026`; `productionYear: 2026` | verified; specjalna z kufrem: 25 900 PLN, nie mieszać z bazową |
| pojemność | `125` | `125` | verified |
| moc | `10.7 kW` | `10.7 kW`; `14.5 KM`; `8750 rpm` | verified |
| chłodzenie | `liquid` | `liquid` | verified |
| skrzynia | `5` | `gearboxType: CVT`; `gearbox: null` | **conflict** — specyfikacja: CVT |
| ABS | `dual` | `abs: unverified` | pobrana specyfikacja wymienia dwie tarcze, ale nie określa zakresu/kanałów ABS; nie inferować `dual` |
| masa | `wetWeightKg: 164` | `weightKg: 164`; `weightDefinition: masa-wlasna-pojazdu` | wartość verified, **definicja conflict** — nie nazywać automatycznie mokrą |
| siedzenie | `780` | `780` | verified |
| koła | `15 / 14`; `cast` | `frontWheelIn: 15`; `rearWheelIn: 14`; `wheelType: cast-aluminium` | verified — opony 120/70-15 i 140/70-14; „Odlew aluminium” |
| bak | `11.7` | `11.7` | verified |
| wyposażenie | `led: true`; `usb: true`; `windscreen: true`; `tractionControl: true` | `led: true`; `usbType: USB-A`; `windscreen: electric-180mm`; `tractionControl: HSTC`; `tftIn: 5`; `roadSync: true`; `smartKey: true`; `ess: true` | verified — specyfikacja i opis |

## Honda PCX125

**Dostępność PL / rocznik:** `status: current-pl`; karta aktualnie mówi `model 2025, produkcja 2026` (nie `marketYear: 2026`).  
**Źródła:** [specyfikacja i cena PL](https://www.honda.pl/motorcycles/range/scooter/pcx-125/specifications.html) · [opis PL](https://www.honda.pl/motorcycles/range/scooter/pcx-125/overview.html)

| Atrybut | Obecne | Potwierdzone | Status / dowód |
|---|---|---|---|
| dostępność / rocznik | `current-pl`; `2025` | `current-pl`; `marketYear: 2025`; `productionYear: 2026` | verified; rekord pomija productionYear |
| cena | brak | `pricePln: 13900`; `priceType: current-list-price`; `priceObservedAt: 2026-08-12`; `marketYear: 2025`; `productionYear: 2026` | verified; osobno strona pokazuje wyprzedaż produkcji 2025: `12900` |
| pojemność | `125` | `125` | verified |
| moc | `9.2 kW` | `9.2 kW`; `12.5 KM`; `8750 rpm` | verified |
| chłodzenie | `liquid` | `liquid` | verified |
| skrzynia | `5` | `gearboxType: CVT`; `gearbox: null` | **conflict** |
| ABS | `front` | `abs: generic`; `scope: unverified` | **conflict / ostrożność** — opis mówi „zoptymalizowany system ABS” przy nowych tarczach przód i tył, ale nie podaje liczby kanałów ani osi działania |
| masa | `wetWeightKg: 134` | `weightKg: 133`; `weightDefinition: masa-wlasna-pojazdu` | **conflict** — zarówno wartość, jak i etykieta względem `wetWeightKg` |
| siedzenie | `763` | `763` | verified |
| koła | `14 / 13`; `cast` | `frontWheelIn: 14`; `rearWheelIn: 13`; `wheelType: cast-aluminium` | verified |
| bak | `8.1` | `8.1` | verified |
| wyposażenie | `led: true`; `usb: true`; `windscreen: true`; `tractionControl: true` | `led: true`; `usbType: USB-C`; `smartKey: true`; `tractionControl: HSTC`; `windscreen: unverified` | LED/USB/Smart Key/HSTC verified; karta nie potwierdziła szyby jako osobnego elementu wyposażenia |

## Junak M12 Vintage ABS

**Dostępność PL / rocznik:** `status: current-pl`; `marketYear: 2025` — oficjalna karta zawiera rezerwację i jawny komunikat o dostępnym roczniku 2025.  
**Źródło:** [Junak / Almot — karta modelu](https://www.junak.com.pl/katalog/motocykle/junak-m12-vintage-abs/)

| Atrybut | Obecne | Potwierdzone | Status / dowód |
|---|---|---|---|
| dostępność / rocznik | `current-pl`; `2025` | `current-pl`; `2025` | verified — „ROCZNIK 2025 DOSTĘPNY…” i przycisk „Zarezerwuj” |
| cena | brak | `pricePln: 11999`; `priceType: promotional`; `priceObservedAt: 2026-08-12`; `marketYear: 2025` | verified — baner promocyjny; **konflikt na tej samej stronie:** karta zakupowa pokazuje regularne `12499` |
| pojemność | `125` | `125` | verified |
| moc | `7.5 kW` | `9.0 kW`; `12.2 KM`; `9500 rpm` | **conflict** — rekord ma stare dane |
| chłodzenie | `air` | `air` | verified |
| skrzynia | `5` | `unverified` | lokalna karta nie podaje liczby przełożeń; nie zachowywać jako zweryfikowane |
| ABS | `dual` | `dual` | verified — opis wprost „dwukanałowego systemu ABS”; oba hamulce opisane jako ABS |
| masa | brak | `weightKg: 144`; `weightDefinition: masa-wlasna` | verified — zachować literalną definicję, nie zmieniać na wet/dry |
| siedzenie | brak | `seatHeightMm: 720` | verified |
| koła | brak średnic; `cast` | `frontWheelIn: 18`; `rearWheelIn: 15`; `wheelType: spoked` | **conflict** — opis wprost „klasycznymi szprychowymi kołami”; średnice z rozmiarów opon |
| bak | brak | `tankL: 15` | verified |
| wyposażenie | `led: true` | `led: unverified`; `passengerSeats: 2` | LED nie występuje w pobranej karcie; liczba miejsc verified |

---

## Rekomendowane bezpieczne działania dla automatu

- Aktualizować tylko wartości oznaczone `verified` lub jednoznaczne `conflict` obecne→potwierdzone.
- Nie tworzyć wartości liczbowych dla: masy BKX (`N/A`), masy SR GT, rocznika Leoncino, skrzyni Junaka, zakresu ABS BKX/Leoncino/Forza/PCX oraz typu obręczy RS? (RS potwierdzony), SR GT i CB125R tam, gdzie zapisano `unverified`.
- Zmienić źródło Leoncino na aktualny slug `leoncino-125-2`.
- Dla skuterów przechowywać `gearboxType: CVT`, a nie fikcyjną liczbę przełożeń.
- Nie mapować Honda `Masa własna pojazdu` do `wetWeightKg` bez decyzji schematowej; preferować neutralne `weightKg` + `weightDefinition`.
- Ceny traktować jako snapshot `2026-08-12`; Junak ma równolegle cenę promocyjną i regularną, a PCX cenę bieżącej produkcji 2026 oraz wyprzedaż produkcji 2025.

## Kompletność

- Modele objęte audytem: `9/9`.
- Każdy wymagany atrybut ma źródło albo jawne `unverified`.
- Źródła dealerskie nie zostały użyte do ustalenia ceny; linki importera Benelli posłużyły wyłącznie jako dowód bieżącej dostępności/oznaczenia 2025.
