# Motocykle 125 — plan MVP

## Cel

Lekki, polski serwis zakupowy dla osób wybierających **nowy motocykl 125 cm³**, działający przede wszystkim jako:

1. katalog i porównywarka modeli;
2. kreator „Jaka 125 dla mnie?”;
3. katalog pobliskich dealerów;
4. źródło ruchu evergreen z Google.

Nie jest to forum, serwis newsowy ani od początku marketplace. W pierwszej fazie nie zbieramy danych kontaktowych ani nie współpracujemy płatnie z dealerami. Mierzymy natomiast intencję zakupową przez kliknięcia do salonów, telefony i nawigację.

## Stack i zasady

- **Astro** — statyczne strony katalogu, porównań i artykułów; minimalny JavaScript.
- **Tailwind CSS** — jeden spójny system UI oraz RWD mobile-first.
- **MD/MDX** — artykuły i ręczne, eksperckie opisy modeli.
- **TypeScript** — schema danych, kreator oraz ranking.
- **Content collections Astro** — artykuły i modele w repozytorium; łatwa edycja w PR.
- **PostHog albo GA4** + Google Search Console — jedyne narzędzia analityczne w MVP.
- Bez logowania, komentarzy, forum, CRM, map osadzanych i backendu wymagającego stałej obsługi.

## Architektura informacji

```text
/
├── /kreator
├── /motocykle
│   ├── /motocykle/[slug]
│   └── /motocykle/[slug]/porownaj/[slug]
├── /porownaj
├── /dla-kogo/[intencja]
├── /dealerzy
│   └── /dealerzy/[wojewodztwo]
├── /poradniki
│   └── /poradniki/[slug]
└── /metodologia
```

Nie tworzyć indeksowanych stron dla każdej kombinacji odpowiedzi kreatora ani wszystkich par motocykli. Indeksować wyłącznie dopracowane strony: modele, 15–25 istotnych porównań i 10–15 stron intencji zakupowej.

## Wspólny model danych

Poniższe pola są wspólnym językiem dla katalogu, filtrów, porównań i kreatora. Dane producenta należy oznaczać jako `official`, a własne, redakcyjne oceny jako `editorial`.

```ts
type Motorcycle = {
  id: string
  slug: string
  brand: string
  model: string
  status: 'current-pl' | 'current-eu' | 'used-reference' | 'verify'
  marketYear?: number
  category: 'adventure' | 'dual-sport' | 'enduro' | 'naked' | 'sport' | 'scrambler' | 'cruiser' | 'scooter'
  useCases: Array<'city' | 'commute' | 'weekend' | 'touring' | 'gravel' | 'light-offroad'>

  price?: { amount: number; currency: 'PLN'; asOf: string; kind: 'msrp' | 'dealer' }
  engine: {
    capacityCc: number
    powerKw: number
    torqueNm?: number
    cooling: 'air' | 'oil' | 'liquid'
    gearbox: 5 | 6
  }
  dimensions: {
    wetWeightKg?: number
    dryWeightKg?: number
    seatHeightMm?: number
    groundClearanceMm?: number
    tankL?: number
  }
  chassis: {
    abs: 'none' | 'front' | 'dual' | 'cornering'
    tractionControl?: boolean
    frontWheelIn?: number
    rearWheelIn?: number
    wheelType?: 'cast' | 'spoked'
    frontTravelMm?: number
    rearTravelMm?: number
  }
  equipment: {
    led?: boolean
    usb?: boolean
    luggageIncluded?: boolean
    windscreen?: boolean
    handguards?: boolean
  }
  editorial: {
    beginnerFriendliness: 1 | 2 | 3 | 4 | 5
    passengerComfort: 1 | 2 | 3 | 4 | 5
    touringReadiness: 1 | 2 | 3 | 4 | 5
    gravelReadiness: 1 | 2 | 3 | 4 | 5
    cityAgility: 1 | 2 | 3 | 4 | 5
    tallRiderFit: 1 | 2 | 3 | 4 | 5
    partsAvailability: 1 | 2 | 3 | 4 | 5
    limitations: string[]
  }
  sourceUrls: string[]
  verifiedAt: string
}
```

### Zasady jakości danych

- Masa jest niejednoznaczna: zawsze zapisuj, czy to `wetWeightKg`, `dryWeightKg` czy brak danych. Nie porównuj ich bez przypisu.
- Wysokość siedzenia, cena i wyposażenie są wersjo- oraz rocznikozależne — pokaż rocznik i datę weryfikacji.
- „Dla wzrostu 190 cm” nie jest parametrem producenta. To ocena redakcyjna, oparta na wysokości siedzenia, ergonomii i testach; nie udawaj danych laboratoryjnych.
- Dla modeli używanych trzymaj osobną etykietę `used-reference`; nie powinny mieszać się w podstawowym wyniku „kup nowy”.

## Katalog startowy

Priorytet: 30–40 motocykli aktualnie dostępnych w Polsce, a nie pełna encyklopedia. Rdzeń powinien objąć wszystkie rodzaje użytkowania, żeby kreator nie miał tendencyjnie polecać wyłącznie adventureów.

| Segment | Modele startowe |
|---|---|
| Adventure / turystyczne | Junak RX 125 ABS, **Junak RX One 125 ABS**, QJMotor SRT 125 DX, Morbidelli T125X, MBP T125, Rieju Aventura 125, Benelli BKX 125, Barton GT 125, Barton Travers 125, Barton Rally 125 Duo, Romet ADV 125 |
| Dual-sport / enduro / supermoto | Aprilia RX 125, Aprilia SX 125, Yamaha WR125R (MY 2026), KTM 125 Enduro R (MY 2026), KTM 125 SMC R, SWM RS 125R |
| Naked / miejski | Honda CB125R, Yamaha MT-125, KTM 125 Duke, QJMotor SRK 125S, Benelli Leoncino 125, Zontes 125U / 125U1 |
| Sport | Yamaha R125, Aprilia RS 125, KTM RC 125, QJMotor SRK 125R, Suzuki GSX-R125 |
| Cruiser / custom | QJMotor SRV 125, Zontes ZT125-C, Zontes ZT125-C2, Junak M12 Vintage ABS |
| Skuter jako alternatywa | Honda PCX125, Honda Forza 125, Yamaha NMAX 125, Yamaha XMAX 125, Aprilia SR GT 125, Vespa GTS 125 |

### Modele wskazane przez Ciebie — właściwe traktowanie

| Model | Status w produkcie | Uwaga |
|---|---|---|
| Morbidelli T125X, MBP T125, QJMotor SRT 125 DX | `verify` → po potwierdzeniu `current-pl` | Zweryfikować importera, cenę i sieć dealerów przed publikacją. |
| Junak RX 125 | `current-pl` | Aktualna konstrukcja adventure; nie mylić z RX One. |
| Junak RX One 125 ABS | `current-pl` | Powinien być obok RX 125 jako mocniejszy, lepiej wyposażony wybór. |
| Rieju Aventura 125, Benelli BKX 125 | `current-pl/current-eu` | Sprawdzić dostępność w Polsce przy każdej aktualizacji katalogu. |
| Barton GT / Travers / Rally Duo, Romet ADV 125 | `verify` | Zbadać bieżącą ofertę i nie prezentować jako nowe bez źródła producenta/importera. |
| Aprilia RX 125, Yamaha WR125R, KTM 125 Enduro R, SWM RS 125R | `current-pl` po weryfikacji ceny | Są to motocykle bardziej off-roadowe niż turystyczne adventure. |
| Honda Varadero 125, Derbi Terra, Malaguti Dune | `used-reference` | Historyczne modele; tylko sekcja „używana alternatywa”, bez dealer-lokatora. |

Ważne korekty nazw: „Kturo R” to prawdopodobnie **KTM 125 Enduro R**, a „Aprx 125” to **Aprilia RX 125**. Zongshen Cyclone można odnotować jako powiązanie konstrukcyjne Junaka RX2/RX, ale nie utożsamiać automatycznie wersji i specyfikacji sprzedawanych w Polsce.

## Kreator „Jaka 125 dla mnie?”

### Cel

W 60–90 sekund zawęzić wybór do trzech modeli, uzasadnić różnice i skłonić do działania: porównania albo wyszukania lokalnego dealera. Wynik nie może wyglądać jak przypadkowy quiz — powinien jasno pokazywać kompromisy.

### Pytania — 7 kroków

1. **Uprawnienia**: B od min. 3 lat / A1 / inna kategoria.
2. **Główne użycie**: miasto, dojazdy, weekendy, turystyka, szutry, lekki teren.
3. **Nawierzchnia**: 90% asfalt / mieszana / często szutry i drogi polne.
4. **Budżet**: do 10 tys., 10–15 tys., 15–20 tys., 20–25 tys., bez limitu.
5. **Wzrost**: przedziały zamiast pozornej dokładności; opcjonalnie także długość nogi.
6. **Pasażer i bagaż**: głównie solo / czasem pasażer / kufry i wyjazdy.
7. **Najważniejszy kompromis**: łatwość dla początkującego, osiągi, niski koszt, pozycja wyprostowana, styl, jazda poza asfaltem.

Pytania o markę i kolor nie są potrzebne do rankingu. Można dać je po wyniku jako filtry, nie jako kryterium dopasowania.

### Ranking

Najpierw stosuj twarde filtry: uprawnienia, cena, aktualna dostępność, segment i podstawowy charakter nawierzchni. Dopiero potem ranking ważony.

```ts
score =
  0.27 * useCaseMatch +
  0.18 * surfaceMatch +
  0.16 * budgetFit +
  0.12 * ergonomicsFit +
  0.10 * luggageAndPassengerFit +
  0.09 * experienceFit +
  0.08 * priorityMatch
```

- Wynik zaokrągla się do pełnych 5%, np. 85%, aby nie sugerować fałszywej precyzji.
- Maksymalnie trzy rekomendacje i jedna alternatywa „warto rozważyć, jeśli…”.
- Każdy wynik musi zawierać: **dlaczego pasuje**, **kompromis**, **dla kogo nie jest**.
- Nie premiować płatnych partnerów w algorytmie. Partner może pojawić się dopiero po wybraniu modelu i lokalizacji.

### Ekran wyniku

1. Krótkie podsumowanie profilu: „Na asfalt i szutry, 185–195 cm, z myślą o weekendowych wyjazdach”.
2. Trzy karty rekomendacji; na telefonie przewijany pionowo, bez karuzeli.
3. Trzy powody dopasowania i jedno ograniczenie przy każdej karcie.
4. CTA: „Porównaj te 3” oraz „Znajdź dealera w okolicy”.
5. Zapis/udostępnienie wyniku jako zwykły URL, ale strony wynikowe domyślnie `noindex` — publicznie indeksować wyłącznie ręcznie przygotowane landing pages.

## Dealer locator i analityka

Do danych dealera: marka, nazwa, adres, miejscowość, województwo, telefon, URL, współrzędne, źródło, data weryfikacji. Na start wystarczy wyszukiwarka po mieście lub kodzie pocztowym i lista 3–5 punktów; trasa otwiera Google Maps jako zewnętrzny link.

Zdarzenia:

```text
quiz_started
quiz_completed
recommendation_viewed
compare_opened
dealer_locator_opened
dealer_selected
dealer_website_clicked
dealer_phone_clicked
dealer_route_clicked
```

Do statystyk zachowuj model, województwo, źródło wejścia i anonimowy identyfikator sesji; nie pełny kod pocztowy. To po trzech miesiącach da Ci wiarygodny materiał do rozmowy z importerem, bez zbierania leadów osobowych.

## RWD i design system

Mobile-first, ponieważ szukanie motocykla i dealera często zaczyna się z telefonu.

- Szerokość treści: `max-w-7xl`; tabela porównania przechodzi na przewijanie poziome, nigdy nie ściska kolumn do nieczytelności.
- Karty modeli: 1 kolumna <640 px, 2 kolumny od `md`, 3 od `xl`.
- Filtry: na mobile jako dolny panel, desktop jako lewy sidebar.
- Kreator: pojedyncze pytanie na ekranie, widoczny postęp, duże cele dotykowe min. 44 px, możliwość cofnięcia.
- CTA do dealera przyklejone na dole tylko na ekranie wyniku mobilnego; nie zasłania tekstu.
- Porównanie: na telefonie przypnij kolumnę parametru z lewej; wyróżniaj tylko różnice istotne dla wybranego profilu.
- Dostępność: kontrast WCAG AA, obsługa klawiatury, opisowe etykiety formularzy, `prefers-reduced-motion`.

## Strony SEO i treści MDX

Pierwsze 12 artykułów evergreen:

1. Jaka 125 dla wysokiej osoby — 185, 190 i 195 cm.
2. Adventure 125 do 15 000 zł.
3. Adventure 125 na asfalt i szutry.
4. Junak RX 125 vs RX One 125.
5. Yamaha WR125R vs Aprilia RX 125.
6. KTM 125 Enduro R vs Yamaha WR125R.
7. Nowa chińska 125 czy używana Honda Varadero / Derbi Terra.
8. Skuter 125 czy motocykl 125 na dojazdy do pracy.
9. Czy 125 nadaje się dla pasażera i na weekendowy wyjazd.
10. ABS, CBS i TCS w 125 — co naprawdę zmienia.
11. Ile kosztuje utrzymanie motocykla 125 w pierwszym roku.
12. Motocykl 125 na prawo jazdy B — warunki i ograniczenia.

Każdy artykuł ma prowadzić do konkretnego filtra/kreatora, a nie do ogólnego katalogu. Nie produkować automatycznie artykułów z AI bez weryfikacji — przewagą ma być interpretacja danych i uczciwe ograniczenia.

## Etapy pracy

### Etap 0 — dane i decyzje (1–2 dni)

- Zdefiniować schemę `Motorcycle`.
- Wprowadzić 12 modeli adventure/dual-sport oraz 12 kontrastowych modeli z innych segmentów.
- Dodać link źródłowy i `verifiedAt` do każdego modelu.
- Przygotować 15–30 dealerów dla 3–4 marek i jednego województwa pilotażowego.

### Etap 1 — działający MVP (4–6 dni)

- Astro + Tailwind + content collections.
- Katalog, karta modelu, porównanie do 3 modeli.
- Kreator z rankingiem i noindex wyników.
- Locator, zdarzenia analityczne, Search Console.
- 3 artykuły i 5 ręcznie napisanych porównań.

### Etap 2 — walidacja (8–12 tygodni od publikacji)

- Co miesiąc: aktualizacja cen/dostępności 20 najczęściej oglądanych modeli.
- Dwa nowe artykuły tylko na podstawie zapytań z Search Console.
- Sprawdzanie pełnego lejka i jakości rekomendacji na podstawie sesji anonimowych.
- Kryterium rozmów z dealerami: stabilny ruch organiczny oraz realne kliknięcia dealer-intent dla konkretnych marek/regionów.

### Poza MVP

- Formularz kontaktowy i przekazywanie leadów.
- Afiliacja i wyróżnione oferty.
- Konta użytkowników, recenzje właścicieli, galerie zdjęć.
- Części, modyfikacje, kompatybilność akcesoriów.
- Panel dealerów oraz automatyczny routing leadów.

## Źródła do pierwszej weryfikacji katalogu

- [Junak RX 125 ABS](https://www.junak.com.pl/katalog/motocykle/junak-rx125/) oraz [Junak RX One 125 ABS](https://www.junak.com.pl/katalog/motocykle/junak-rx-one-125-abs/) — aktualna oferta i rozdzielenie dwóch modeli.
- [Benelli BKX 125](https://www.benelli.com/pl-pl/products/bkx-125) — 15 KM, chłodzenie cieczą, 6 biegów.
- [Yamaha WR125R MY 2026](https://www.yamaha-motor.eu/pl/pl/motorcycles/adventure/pdp/wr125r/) — aktualny model dostępny w polskiej gamie.
- [KTM 125 Enduro R MY 2026](https://www.ktm.com/en-pl/models/dual-sport/2026-ktm-125-enduror/technical-specifications.html) — 125 cm³, 15 KM, chłodzenie cieczą i 6 biegów.
- [Aprilia RX 125](https://www.aprilia.com/pl_PL/models/rx-125/rx-125-125-4s4v-2025/) — aktualny model off-road 125.

Źródła potwierdzają samą aktualność wybranych modeli i podstawową specyfikację. Ceny, dealerzy i szczegółowe wymiary należy pobierać wyłącznie z aktualnych stron polskich importerów oraz oznaczać datą weryfikacji.
