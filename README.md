# Motocykle 125

Produkcyjny MVP polskiego przewodnika zakupowego po nowych motocyklach 125 cm³. Astro generuje statyczny katalog, strony modeli i poradniki; niewielkie skrypty w przeglądarce obsługują filtry, porównanie, kreator oraz lokalizator dealerów.

## Lokalnie

Wymagania: Node.js 22.12+ i npm 9.6.5+.

```bash
cp .env.example .env
npm ci
npm test
npm run dev
```

Aplikacja deweloperska działa domyślnie na `http://localhost:4321`. Produkcyjna weryfikacja:

```bash
SITE_URL=https://twoja-domena.pl npm run build
npm run preview
```

`SITE_URL` ustala canonicale i sitemapę. `PUBLIC_ANALYTICS_KEY` jest opcjonalny; bez niego seam zdarzeń działa lokalnie, ale nie wysyła danych do dostawcy. Integrację analityczną można podpiąć do zdarzeń `m125:analytics` w `window`.

## Dane i treści

Modele są w `src/content/motorcycles`, a artykuły MDX w `src/content/guides`. Każdy model przechodzi schemat, wymaga źródła i daty weryfikacji. Brak wartości jest zamierzony: nie należy dopisywać cen, mas ani wymiarów bez datowanego źródła. Dealerzy pilotażowi są w `src/lib/dealers.ts`.

## Docker i Dokku

Obraz buduje statyczne pliki i serwuje je przez nginx na `$PORT` (domyślnie 8080). Endpoint `/health` zawsze zwraca HTTP 200.

```bash
docker build --build-arg SITE_URL=https://twoja-domena.pl -t motocykle-125 .
docker run --rm -e PORT=8080 -p 8080:8080 motocykle-125
curl -f http://localhost:8080/health
```

Dokku, po utworzeniu aplikacji i ustawieniu DNS:

```bash
dokku apps:create motocykle-125
dokku config:set --no-restart motocykle-125 SITE_URL=https://motocykle125.pl
dokku ports:set motocykle-125 http:80:8080
git remote add dokku dokku@SERWER:motocykle-125
git push dokku main
dokku letsencrypt:enable motocykle-125
```

`SITE_URL` jest używany w etapie budowania. Przy zmianie domeny wykonaj nowy deploy. Nie umieszczaj kluczy w repozytorium; ustawiaj je przez `dokku config:set` lub sekrety CI.
