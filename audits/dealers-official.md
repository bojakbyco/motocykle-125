# Audyt oficjalnych locatorów dealerów — Polska

**Data weryfikacji:** `2026-08-12`  
**Zakres:** projekt pozyskania + pierwszy reprezentatywny zestaw. To nie jest kompletna baza produkcyjna i nie zmieniono `src/lib/dealers.ts`.

## Zasady

- Wyłącznie aktualne polskie strony producentów albo oficjalnych importerów/dystrybutorów.
- Brak pola w źródle pozostaje brakiem; adresów, kodów i telefonów nie uzupełniano z pamięci ani katalogów zewnętrznych.
- `verified` oznacza działające źródło first-party; `partial` — locator istnieje, lecz payload wymaga renderowania/API, był zablokowany lub nie daje kompletnego rekordu; `unverified` — brak prawidłowego źródła PL.
- W rekordach zbiorczych marka jest przypisana tylko wtedy, gdy oficjalne źródło jawnie ustanawia relację.

## Rejestr locatorów i plan pozyskania

| Marka | Status | Oficjalny URL | Format i sposób pozyskania | Uwagi |
|---|---|---|---|---|
| Aprilia | `verified` | https://www.aprilia.com/pl_PL/dealer-locator/ | JS map plus crawlable per-dealer HTML detail pages under /dealer-locator/{city}/{slug}/; Discover detail URLs from rendered map/search indexing, then parse HTML fields: name, telephone, email, address and Google Maps coordinates. | Akamai may return 403 to curl/browser; clean extraction of indexed detail pages works. |
| Benelli | `partial` | https://www.benelli.com/pl-pl/stores | Nuxt/JS store map; HTML shell exposes filters but not Polish store rows; Render page and inspect Nuxt network requests; importer fallback is official Motor-Land contact/store page. | Polish site identifies Motor-Land as local organization; Motor-Land states it is exclusive importer. |
| Barton | `partial` | https://barton-motors.pl/gdzie-kupic | Concrete CMS HTML plus client-side Google map, country/voivodeship/city and sales/service filters; Browser/network inspection required; static extraction returns controls but not marker records. | Canonical first-party locator confirmed by sitemap. |
| Honda | `partial` | https://www.honda.pl/motorcycles/dealers.html | AEM/SPA JavaScript application; Rendered app/network capture required. | Current response rendered an empty application body in the audit environment; do not reuse masked or dealer-site-only values from src/lib/dealers.ts. |
| Junak, Cyclone | `partial` | https://www.junak.com.pl/dealerzy-i-serwis/ | Server-rendered Super Store Finder HTML plus Google map; 215 records visible in HTML; Parse repeated name/address/region/tel/maps-coordinate blocks from HTML; normalize only explicit postcodes. | The locator verifies Junak outlets. It does not label records as Cyclone outlets, so Cyclone coverage remains unverified and must not be inferred. Legacy /dealerzy/ resolves to this page. |
| KTM | `partial` | https://www.ktm.com/en-pl/find-a-dealer.html | AEM React/Mapbox app with JSON endpoints; GET JSON; dealer endpoint should return structured records and qualification endpoint returns JSON taxonomy.<br>Dane: `https://www.ktm.com/en-pl/find-a-dealer/_jcr_content/root/responsivegrid_1_col/dealersearch.dealers.json`<br>`https://www.ktm.com/en-pl/find-a-dealer/_jcr_content/root/responsivegrid_1_col/dealersearch.qualifications.json` | Dealer endpoint returned {status.success:false, data:""} during audit; qualification endpoint worked. Retry later rather than backfilling from third parties. |
| Morbidelli | `partial` | https://www.morbidelli.com/pl-pl/stores | Nuxt/JS store map; HTML shell exposes Dealer/Service filters; Render and capture Nuxt/API traffic; official importer fallback is Motor-Land. | No store rows appeared in static extraction. |
| QJMotor | `partial` | https://qjmotor.pl/kontakt/ | WordPress HTML contact/order page; Parse HTML directly. | No nationwide first-party locator was found on qjmotor.pl in this pass. Motor-Land separately states it is exclusive importer and links qjmotor.com.pl; importer/domain ownership should be reconciled before a full import. |
| Rieju | `partial` | https://rieju.com/pl/kontakt | Server-rendered official country contact page; Parse Poland contact block from HTML. | Official page names Moto-Trip Kraków and phone/email but publishes no street address; /pl/dealers is a 404, so no complete dealer row was emitted. |
| Romet | `partial` | https://romet.pl/find-store | Magento/JavaScript store locator with Romet/Prorowery and Dealer filters; Render and inspect Magento XHR/GraphQL; static HTML is an application shell. | Page title and search presentation are bicycle-oriented; motorcycle authorization is not established per marker. Do not import generic Romet bicycle shops as motorcycle dealers. |
| Suzuki | `verified` | https://suzuki.pl/moto/dealerzy | Server-side regional list plus official dealer subdomains; regional URLs use /moto/dealerzy/{regionCode}, e.g. /MA; Parse list/detail HTML; direct locator requests may return 403, while official dealer subdomain contact pages are crawlable. | Search result and first-party dealer subdomain corroborated MonsterBike. |
| SYM | `verified` | https://sympolska.pl/dealerzy_sym/ | WordPress HTML embedding public Google My Maps; Download KML for names and coordinates; current KML descriptions are blank, so obtain full addresses/phones only from additional first-party importer pages.<br>Dane: `https://www.google.com/maps/d/kml?mid=18LVH6zl5gLuJMHv3y1OpcBC7YSdf4y0L&forcekml=1` | KML contained 33 placemarks at audit time. |
| Vespa | `verified` | https://www.vespa.com/pl_PL/dealer-locator/ | JS/legacy map plus crawlable per-dealer HTML detail pages under /dealer-locator/{city}/{slug}/; Discover detail URLs then parse HTML fields and map coordinates. | The locator shell is sparse in static extraction, but official detail pages are complete. |
| Yamaha | `partial` | https://www.yamaha-motor.eu/pl/pl/dealer-locator/ | JavaScript map application with product/service and postcode/city filters; Render, select motorcycle/service filters and capture network response. | No dealer records are in static HTML; do not treat the existing masked src/lib/dealers.ts values as verification. |
| Zontes | `unverified` | https://zontes.pl/ | Invalid source for current brand audit; None until a current official Polish manufacturer/importer source is identified. | Domain redirects through tracking to Ceneo; it is not acceptable first-party dealer evidence. |
| Daytona | `verified` | https://daytonamotors.com.pl/dealerzy/ | WordPress HTML embedding Google My Maps; Render/download embedded My Maps data; use official contact page for distributor details. | Correct brand is Daytona Motors; Dymoto 125 and Dymoto 125 X are Daytona model names, not a separate Dymoto marque. Official Polish distributor: MYMOTO Polska sp. z o.o. |

## Zweryfikowany zestaw reprezentatywny

> Wiersze importera/dystrybutora są jawnie oznaczone. Nie należy automatycznie mieszać ich z salonami detalicznymi.

| Nazwa | Typ | Województwo | Miasto | Pełny adres opublikowany w źródle | Telefon | Marki | Oficjalne źródło |
|---|---|---|---|---|---|---|---|
| Liberty Motors Piaseczno | dealer | mazowieckie | Piaseczno | Puławska 44D, 05-500 Piaseczno | +48 22 129 23 44 | Aprilia | https://www.aprilia.com/pl_PL/dealer-locator/piaseczno/liberty-motors-piaseczno/ |
| ScootRacer | dealer | mazowieckie | Warszawa | ul. Górczewska 30, 05-077 Warszawa | +48 512 233 726 | Vespa | https://www.vespa.com/pl_PL/dealer-locator/warszawa/scootracer/ |
| MonsterBike | dealer | mazowieckie | Warszawa | ul. Łopuszańska 93, 02-457 Warszawa | +48 790 004 477 | Suzuki | https://monsterbike.suzuki.pl/moto/kontakt |
| 5 BIEG | dealer | pomorskie | Słupsk | Stanisława Leszczyńskiego 8, Słupsk | +48 665 919 889 | Junak | https://www.junak.com.pl/dealerzy-i-serwis/ |
| ADVENTURE TEAM | dealer | warmińsko-mazurskie | Elbląg | E. Kwiatkowskiego 2A, 82-300 Elbląg | +48 721 222 247 | Junak | https://www.junak.com.pl/dealerzy-i-serwis/ |
| AR Moto | dealer | małopolskie | Bochnia | Brzeska 51a, Bochnia | +48 578 867 000 | Junak | https://www.junak.com.pl/dealerzy-i-serwis/ |
| MOTOR-LAND Łomianki | importer-dealer | mazowieckie | Dziekanów Nowy | ul. Kolejowa 362/364, 05-092 Dziekanów Nowy | +48 22 670 98 01 | Benelli, Morbidelli, QJMotor | https://www.motor-land.com.pl/ |
| Moto Rakowski | dealer-order-point | mazowieckie | Konstancin-Jeziorna | ul. Długa 8a, 05-510 Konstancin-Jeziorna | +48 723 133 170 | QJMotor | https://qjmotor.pl/kontakt/ |
| MYMOTO Polska sp. z o.o. | distributor | małopolskie | Kraków | ul. Opolska 18, 31-323 Kraków | +48 513 445 789 | Daytona, SYM | https://daytonamotors.com.pl/kontakt/ |

## Uwagi do rekordów

- **ScootRacer:** Postcode/city combination is preserved exactly as published; do not silently correct it.
- **MonsterBike:** Official Suzuki dealer subdomain; a second published phone is +48 535 204 443.
- **5 BIEG:** Official locator does not publish a postcode for this row. It explicitly lists a Junak RSL 125 ABS test vehicle.
- **AR Moto:** Sales number retained; official locator also publishes service +48 570 802 384 and no postcode.
- **MOTOR-LAND Łomianki:** Motor-Land explicitly states it is exclusive importer of all three brands and publishes this salon/contact.
- **Moto Rakowski:** Phone is the first explicitly published vehicle-order number; page publishes three additional order contacts.
- **MYMOTO Polska sp. z o.o.:** Official Daytona page labels MYMOTO as Polish distributor and shows Daytona and SYM in its Polish distribution portfolio; this is not asserted to be a retail dealer.

## Luki i bezpieczne następne kroki

- **Barton, Honda, KTM, Romet, Yamaha:** Official locator confirmed but no complete first-party dealer record was retrievable in this pass.
- **Rieju:** Official Polish contact names Moto-Trip Kraków and +48 798 945 646 but omits a full street address.
- **Cyclone:** Junak locator does not establish Cyclone authorization per outlet.
- **Zontes:** No valid current official Polish source identified.

### Kolejność drugiego przebiegu

1. Przechwycić żądania sieciowe po interakcji z locatorami Yamaha, Honda, Barton, Romet oraz Nuxtowymi mapami Benelli/Morbidelli.
2. Ponowić endpoint dealerów KTM; endpoint kwalifikacji działał, dealerów chwilowo zwracał błąd systemu.
3. Dla Aprilia/Vespa zebrać indeks URL-i szczegółowych i parsować każdą stronę, zamiast skrobać samą mapę.
4. Junak: parser bloków HTML może zebrać 215 punktów; kod pocztowy zostawić `null`, gdy nie jest opublikowany. Nie przypisywać automatycznie Cyclone.
5. SYM i Daytona: pobrać publiczne KML z osadzonych Google My Maps. KML SYM daje 33 nazwy i współrzędne, ale obecnie puste opisy; adres/telefon wymaga dodatkowego dowodu first-party.
6. Suzuki: iterować oficjalne regiony i strony na subdomenach dealerskich; locator główny może odpowiadać 403.
7. Nie publikować Zontes jako `current-pl`, dopóki nie zostanie odnaleziony aktualny oficjalny importer.

## Rozstrzygnięcie Daytona / Dymoto

**Marką jest Daytona Motors.** `Dymoto 125` oraz `Dymoto 125 X` są nazwami modeli Daytona, nie odrębną marką „Dymoto”. Oficjalna polska strona wskazuje MYMOTO Polska sp. z o.o. jako dystrybutora i prowadzi osobny locator: https://daytonamotors.com.pl/dealerzy/.

## Artefakt maszynowy

Pełne metadane locatorów, dokładne endpointy, rekordy i pominięcia zapisano w `audits/dealers-official.json`.
