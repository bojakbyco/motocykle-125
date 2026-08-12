# Audyt brakujących modeli 125 cm³ — batch 1

**Rynek:** Polska  
**Data weryfikacji i odczytu cen:** `2026-08-12`  
**Zakres:** Junak/Cyclone RX2 125 oraz SYM NHR 125. Nie edytowano katalogu.

## Metoda i zgodność ze schematem

Źródłami są wyłącznie bieżące polskie karty producenta/importera oraz oficjalna polska strona gamy. Wartości poniżej odpowiadają polom `motorcycleSchema` z `src/lib/schemas.ts`: `status`, `marketYear`/`productionYear`, `price`, `engine`, `dimensions`, `chassis`, `equipment`, `sourceUrls` i `verifiedAt`. Brak dowodu zapisano jako `unverified` — nie należy go zamieniać na liczbę ani wartość logiczną. Nie przeliczano KM na kW. Definicji masy nie normalizowano do `dryWeightKg` ani `wetWeightKg`.

Nie znaleziono osobnego oficjalnego PDF PL podlinkowanego z żadnej z dwóch kart. Dane pochodzą z oficjalnych kart HTML.

---

## Junak RX2 125 ABS

**Oficjalna nazwa PL:** `Junak RX2 125 ABS`. Polska karta Junaka nie używa nazwy `Cyclone`; dlatego `Cyclone RX2 125` nie jest bezpieczną oficjalną nazwą rekordu dla rynku PL.  
**Dostępność PL:** `status: current-pl` — aktywna karta w polskim katalogu, cena w PLN, warianty kolorystyczne i przycisk „Zarezerwuj”.  
**Rocznik:** `marketYear: omitted`; `productionYear: omitted` (`unverified`). Karta zawiera materiały z 2026 r. i serwis promuje model jako premierę WMS 2026, ale nie nazywa wprost rocznika modelowego ani produkcyjnego; nie należy wyprowadzać rocznika z daty plików lub wydarzenia.  
**Źródło:** [Junak / Almot — karta modelu](https://www.junak.com.pl/katalog/motocykle/rx2125abs/)

| Atrybut | Potwierdzona wartość zgodna ze schematem | Status / literalny dowód |
|---|---|---|
| cena | `price: { amount: 15999, currency: PLN, asOf: 2026-08-12, kind: msrp, note: "Sugerowana cena detaliczna; wersja z kompletem trzech kufrów" }` | verified — „Sugerowana cena detaliczna: 15 999 zł”; karta opisuje motocykl jako oferowany standardowo z kuframi |
| pojemność | `engine.capacityCc: 124` | verified — „124 cm³” |
| moc | `engine.powerKw: 11` | verified — „11 kW (14,96 KM) przy 9500 obr./min” |
| chłodzenie | `engine.cooling: liquid` | verified — „chłodzony cieczą” |
| skrzynia | `engine.gearbox: omitted`; `engine.transmission: manual` jest technicznym defaultem schematu, ale źródłowo `unverified` | karta nie publikuje liczby przełożeń ani literalnego typu przekładni; nie przedstawiać domyślnego `manual` ze schematu jako zweryfikowanego faktu |
| ABS | `chassis.abs: dual`; `chassis.absNote: "Przedni i tylny hamulec opisane osobno jako tarczowy hydrauliczny ABS; karta nie podaje liczby kanałów"` | verified dla obu osi — tabela: przód i tył „TARCZOWY HYDRAULICZNY ABS, TCS”. `dual` oznacza tu działanie na obu kołach, bez domysłu o liczbie kanałów |
| masa | `dimensions.weightKg: 160`; `dimensions.weightDefinition: "MASA WŁASNA"` | verified — literalna etykieta „MASA WŁASNA”; nie mapować do suchej/mokrej |
| siedzenie | `dimensions.seatHeightMm: 820` | verified |
| koła | `chassis.frontWheelIn: 19`; `chassis.rearWheelIn: 17`; `chassis.wheelType: omitted` (`unverified`) | średnice verified z „19-calowe koło” oraz opon `100/90-19`, `130/70-17`; karta nie nazywa obręczy odlewanymi ani szprychowymi |
| bak | `dimensions.tankL: 14` | verified |
| wyposażenie w schemacie | `equipment.usb: true`; `equipment.luggageIncluded: true`; `equipment.handguards: true`; `equipment.led: omitted`; `equipment.windscreen: omitted` | trzy kufry są jawnie standardem; galeria oficjalnej karty identyfikuje zdjęcia „gniazdo-usb” i „oslona_manetki”. LED i szyba pozostają `unverified` — nie ustalać ich z samego wyglądu zdjęć |
| wyposażenie poza schematem | `tractionControl: true`; `engineSkidGuard: true`; `lcdDashboard: true`; `passengerSeats: 2`; `euro5Plus: true` | TCS podany dla obu hamulców i w opisie; pozostałe potwierdzone opisem/galerią/tabelą |

**Uwaga schematowa:** `chassis.abs: dual` jest najbliższą reprezentacją w obecnym enumie, ponieważ oficjalna tabela jednoznacznie przypisuje ABS do przedniego i tylnego hamulca. Źródło nie używa jednak określenia „dwukanałowy”, więc tę różnicę trzeba zachować w `absNote`.

---

## SYM NHR 125

**Oficjalna nazwa PL:** `NHR 125` (nagłówek strony: „NOWY NHR 125”; marka `SYM`). Rozwinięcie publikowane przez importera: `SYM NHR (New Horizon Rally)`.  
**Dostępność PL:** `status: current-pl` — model widnieje w bieżącej oficjalnej polskiej gamie motocykli, ma cenę PLN i karta deklaruje „DOSTĘPNOŚĆ MAJ/CZERWIEC 2026”; termin już minął w dniu audytu. Zastrzeżenie strony zaleca potwierdzenie najnowszej dostępności u autoryzowanego dealera.  
**Rocznik:** `productionYear: 2026`; `marketYear: omitted` (`unverified`) — karta mówi literalnie „Rok produkcji 2026”, nie „rok modelowy”.  
**Źródła:** [SYM Polska / MYMOTO — karta modelu](https://sympolska.pl/model/nhr-125/) · [oficjalna polska gama motocykli](https://sympolska.pl/motocykle/)

| Atrybut | Potwierdzona wartość zgodna ze schematem | Status / literalny dowód |
|---|---|---|
| cena | `price: { amount: 12999, currency: PLN, asOf: 2026-08-12, kind: msrp, note: "Cena rekomendowana, zawiera VAT 23%; rok produkcji 2026" }` | verified — nagłówek „12 999 zł”; nota: wszystkie prezentowane ceny są rekomendowane i obejmują VAT 23% |
| pojemność | `engine.capacityCc: 124.7` | verified — specyfikacja: „124.7 ccm” |
| moc | `engine.powerKw: 10.3` | verified — „10.3 kW (14,3 KM) @ 9250 obr./min” |
| chłodzenie | `engine.cooling: liquid` | verified — „System chłodzenia: ciecz” |
| skrzynia | `engine.gearbox: 6`; `engine.transmission: manual` | `gearbox` verified — „6-biegowa skrzynia”; `manual` jest zgodną reprezentacją konstrukcji ze zmienianymi biegami, lecz źródło nie publikuje osobnej etykiety „manualna” |
| ABS | `chassis.abs: dual`; `chassis.absNote: "CONTINENTAL dwukanałowy"` | verified — specyfikacja i opis używają wprost „dwukanałowy” |
| masa | `dimensions.weightKg: 163`; `dimensions.weightDefinition: "Waga (pełne płyny)"` | verified — zachować literalną definicję; nie nazywać automatycznie `wetWeightKg`, bo źródło nie definiuje poziomu paliwa |
| siedzenie | `dimensions.seatHeightMm: 815` | verified |
| koła | `chassis.frontWheelIn: 19`; `chassis.rearWheelIn: 17`; `chassis.wheelType: spoked` | verified — opis wprost „koła szprychowe ... 19” z przodu i 17” z tyłu” |
| bak | `dimensions.tankL: 14` | verified |
| wyposażenie w schemacie | `equipment.led: true`; `equipment.usb: true`; `equipment.windscreen: true`; `equipment.handguards: true`; `equipment.luggageIncluded: omitted` (`unverified`) | verified dla LED, podwójnego USB QC3.0 Type A+C, przyciemnianej szyby i zamkniętych handbarów. Karta potwierdza fabryczny bagażnik ułatwiający montaż top case’a, ale nie mówi literalnie, czy kufer/bagaż jest dołączony; nie wpisywać `false` tylko na podstawie braku wzmianki |
| wyposażenie poza schematem | `engineSkidPlate: true`; `lcdDashboard: true`; `gearIndicator: true`; `rearRack: true`; `passengerGrabHandle: true`; `efiContinental: true`; `euro5Plus: true` | verified — karta opisuje każdy element jako wyposażenie modelu, część wprost „standardowo” |

**Nota źródłowa SYM:** karta zawiera ogólne zastrzeżenie, że detale wyposażenia mogą różnić się od specyfikacji rynku polskiego, zdjęcia mogą pokazywać opcje, a wiążące ustalenia daje umowa sprzedaży/homologacja. Powyżej przyjęto tylko elementy jednoznacznie opisane tekstem jako wyposażenie NHR 125; mimo to przed publikacją handlową należy potwierdzić aktualną partię u dealera.

---

## Wnioski bezpieczne dla katalogu

1. Dla polskiego rekordu użyć nazwy `Junak RX2 125 ABS`, nie `Cyclone RX2 125`; oficjalna karta PL nie publikuje marki/nazwy Cyclone.
2. Oba modele spełniają kryterium `current-pl`, ale tylko SYM podaje literalnie `productionYear: 2026`. Pola rocznika Junaka należy pominąć jako `unverified`.
3. Nie uzupełniać liczby biegów Junaka ani typu jego obręczy bez dodatkowego polskiego źródła pierwszej strony.
4. Zachować masy jako neutralne `weightKg` z literalnym `weightDefinition`: Junak „MASA WŁASNA”, SYM „Waga (pełne płyny)”.
5. SYM ma jednoznaczny dwukanałowy ABS; Junak jednoznacznie ma ABS na obu hamulcach, ale karta nie publikuje liczby kanałów.
6. Wszystkie ceny są snapshotem z `2026-08-12`; Junak: sugerowana detaliczna, SYM: rekomendowana z VAT 23%, czyli w obu przypadkach bezpieczne `kind: msrp` z notą.

## Kompletność

- Modele objęte audytem: `2/2`.
- Każdy wymagany atrybut ma wartość z oficjalnego polskiego źródła albo jawne `unverified`.
- Nie użyto źródeł dealerskich ani danych z innych rynków.
- Nie edytowano rekordów katalogu.
