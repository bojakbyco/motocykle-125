# Audyt brakującego modelu — Daytona / Dymoto 125

**Data weryfikacji:** 2026-08-12  
**Rynek:** Polska  
**Decyzja:** model istnieje, ale zapis „Daytona/Dymoto 125” miesza markę z nazwą modelu. Poprawna identyfikacja to **DAYTONA Motors DYMOTO 125 ABS** (na stronie i w formularzu skracane także do **DYMOTO 125**). Nie należy utożsamiać go z osobnym wariantem **DYMOTO 125 X ABS**.

## Źródła first-party

1. Oficjalna polska karta produktu: https://daytonamotors.com.pl/dymoto-125/
2. Oficjalna polska strona marki / aktualna gama: https://daytonamotors.com.pl/
3. Oficjalna strona kontaktowa wskazująca dystrybutora: https://daytonamotors.com.pl/kontakt/
4. Oficjalna karta odrębnego wariantu DYMOTO 125 X ABS (tylko do rozróżnienia modeli): https://daytonamotors.com.pl/dymoto-125-x/
5. Oficjalna lista dealerów: https://daytonamotors.com.pl/dealerzy/

Strona kontaktowa marki jawnie określa **MYMOTO Polska sp. z o.o.** jako „Dystrybutor marki w Polsce” (ul. Opolska 18, 31-323 Kraków). Ta sama spółka jest administratorem danych formularza „Zapytaj o ofertę rocznika 2026” na karcie produktu.

## Ustalenie poprawnej marki i nazwy

| Element | Ustalenie | Status |
|---|---|---|
| Marka | `DAYTONA Motors` | verified — logo, polska gama i karta produktu |
| Model / nazwa handlowa na nagłówku karty | `DYMOTO 125 ABS` | verified |
| Skrócona nazwa użyta na stronie głównej i w formularzu | `DYMOTO 125`; formularz doprecyzowuje `bez kufrów` | verified |
| Odrębny model podobny nazwą | `DYMOTO 125 X ABS`; formularz: `DYMOTO 125 X (z kuframi)` | verified — osobna karta i osobna pozycja gamy |

**Wniosek identyfikacyjny:** „Dymoto” nie jest marką, lecz rodziną/modelową nazwą Daytona. Jeżeli intencją użytkownika był zapis bez litery `X`, najbardziej prawdopodobnym właściwym modelem jest **DAYTONA Motors DYMOTO 125 ABS (model 2026, bez kufrów)**. Nie ma podstaw, aby automatycznie podmienić go na droższy **DYMOTO 125 X ABS**, ponieważ importer prezentuje oba równolegle jako osobne pozycje.

## Dostępność i cena w Polsce

- **Dostępność:** `current-pl` — karta produktu jest oznaczona „Cena (model 2026)”, prowadzi do polskiej sieci dealerów, a aktywny formularz „Zapytaj o ofertę rocznika 2026” zawiera osobną opcję `DYMOTO 125 (bez kufrów)`. Strona główna bieżącej polskiej gamy również wymienia ten model.
- **Rok modelowy:** `2026` — podany wprost przy cenie i w kontekście formularza ofertowego.
- **Cena:** `13 999 zł` brutto.
- **Rodzaj ceny:** rekomendowana, z VAT 23%. Zastrzeżenie first-party mówi, że prezentowane ceny są wyłącznie rekomendowane, nie stanowią oferty, a wiążącą cenę ustala umowa z dealerem.
- **Dla odróżnienia:** DYMOTO 125 X ABS ma rekomendowaną cenę modelu 2026 `15 999 zł` i kufry; tej ceny ani wyposażenia nie wolno przenosić do DYMOTO 125.

## Zweryfikowana specyfikacja DYMOTO 125 ABS

Wartości poniżej pochodzą bezpośrednio z aktualnej polskiej karty produktu; nie wykonywano przeliczeń.

| Pole | Wartość first-party | Status / uwaga |
|---|---:|---|
| Typ silnika | 1-cylindrowy, 4-zaworowy, 4T, chłodzony cieczą | verified |
| Pojemność | 125 ccm | verified |
| Moc maksymalna | 14.0 KM przy 9500 rpm | verified; źródło nie publikuje kW, więc `powerKw` powinno pozostać niezweryfikowane |
| Moment maksymalny | 11.2 Nm przy 7000 rpm | verified |
| Zapłon | ECU | verified |
| Układ paliwowy | E.F.I. BOSCH | verified |
| Rozrusznik | elektryczny | verified |
| Skrzynia | 6-stopniowa manualna | verified |
| Hamulec przedni | hydrauliczny tarczowy, tarcza Ø 276 mm, zacisk 2-tłoczkowy (Ø 25 mm), ABS | verified |
| Hamulec tylny | hydrauliczny tarczowy, tarcza Ø 220 mm, zacisk 1-tłoczkowy (Ø 34 mm), ABS | verified |
| ABS | dwukanałowy | verified wprost w opisie |
| Zawieszenie przednie | widelec upside-down, skok 115 mm, Ø 37 mm | verified |
| Zawieszenie tylne | centralny amortyzator Monoshock | verified |
| Opona przednia | 110/70-17 | verified |
| Opona tylna | 140/70-17 | verified |
| Obręcze | aluminiowe | verified w opisie cechy |
| Długość / szerokość / wysokość | 2125 / 812 / 1300 mm | verified |
| Wysokość siedzenia | 775 mm | verified |
| Prześwit | 170 mm | verified |
| Rozstaw osi | 1370 mm | verified |
| Zbiornik paliwa | 14 L | verified |
| Dopuszczalna masa całkowita | 335 kg | verified |
| Zużycie paliwa | 2.3 L/100 km (WMTC3) | verified; zachować zapis źródła |
| Prędkość maksymalna | 105 km/h | verified |
| Emisja CO₂ | 53 g/km | verified |
| Oświetlenie | przednie i tylne LED, DRL | verified |
| Pozostałe wyposażenie | LCD, regulowana w dwóch pozycjach przednia szyba, port USB | verified |

## Masa — wartość i definicja

- Oficjalna tabela publikuje dokładnie: **`Waga: 160 kg`**.
- Źródło **nie definiuje**, czy jest to masa sucha, własna, z płynami, z paliwem, gotowa do jazdy ani czy uwzględnia jakiekolwiek akcesoria.
- Bezpieczna reprezentacja katalogowa: `weightKg: 160`, `weightDefinition: "waga (bez definicji w źródle)"` / status `unlabeled`.
- Nie mapować tej wartości do `dryWeightKg`, `wetWeightKg`, `kerbWeightKg` ani `fullyFueledWeightKg`.
- Dopuszczalna masa całkowita `335 kg` jest osobnym parametrem i nie wyjaśnia podstawy wartości `160 kg`.

## Decyzja katalogowa

Model **nie jest nieistniejący**; istnieje aktualna, lokalna karta produktu i oferta rocznika 2026. Można przygotować rekord dopiero pod poprawną identyfikacją **DAYTONA Motors DYMOTO 125 ABS**, nie jako marka „Dymoto” ani jako nieprecyzyjne „Daytona/Dymoto 125”. W tym zadaniu **nie utworzono ani nie zmieniono rekordu katalogowego**.

Najważniejsze guardraile dla ewentualnego późniejszego rekordu:

```yaml
brand: DAYTONA Motors
model: DYMOTO 125 ABS
marketYear: 2026
status: current-pl
pricePln: 13999
priceType: recommended-retail
engine:
  capacityCc: 125
  powerHp: 14.0
  powerKw: null
  cooling: liquid
  gearbox: 6
chassis:
  abs: dual
  frontWheelIn: 17
  rearWheelIn: 17
  wheelType: null # źródło mówi „aluminiowe felgi”, ale nie nazywa technologii wykonania
dimensions:
  weightKg: 160
  weightBasis: unlabeled
  weightSourceLabel: Waga
  seatHeightMm: 775
  tankL: 14
```

`powerHp` jest tu nazwą schematyczną; źródło dosłownie używa jednostki `KM`. Jeżeli katalog nie rozróżnia KM/PS od hp, nie należy zapisywać jej pod mylącą etykietą bez wcześniejszego dostosowania schematu.
