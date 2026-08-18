export const quizQuestions = [
  {
    key: 'ridingProfile',
    title: 'Jak będziesz najczęściej używać 125?',
    options: [
      ['city', 'Miasto i codzienne dojazdy'],
      ['weekend', 'Weekendowe trasy po asfalcie'],
      ['touring', 'Dłuższa turystyka'],
      ['mixed', 'Asfalt i szutry'],
      ['offroad', 'Często drogi polne lub lekki teren'],
    ],
  },
  {
    key: 'budget',
    title: 'Jaki masz budżet na zakup?',
    options: [
      ['12', 'Do 12 000 zł'],
      ['18', 'Do 18 000 zł'],
      ['open', 'Budżet elastyczny, także powyżej 18 000 zł'],
    ],
  },
  {
    key: 'height',
    title: 'Jaki masz wzrost?',
    options: [
      ['short', 'Do 170 cm'],
      ['average', '171–184 cm'],
      ['tall', '185–194 cm'],
      ['very-tall', '195 cm i więcej'],
    ],
  },
  {
    key: 'passenger',
    title: 'Jak często zabierzesz pasażera lub większy bagaż?',
    options: [
      ['solo', 'Głównie jazda solo'],
      ['sometimes', 'Czasem pasażer'],
      ['touring', 'Regularnie pasażer, kufry lub wyjazdy'],
    ],
  },
  {
    key: 'vehicleType',
    title: 'Wolisz motocykl czy skuter?',
    options: [
      ['motorcycle', 'Motocykl z manualną skrzynią'],
      ['scooter', 'Skuter z automatyczną przekładnią'],
      ['either', 'Nie mam preferencji'],
    ],
  },
] as const;

export const budgetLimits = {'12': 12000, '18': 18000, open: Infinity} as const;

export const ridingProfiles = {
  city: {useCase: 'city', surface: 'road'},
  weekend: {useCase: 'weekend', surface: 'road'},
  touring: {useCase: 'touring', surface: 'road'},
  mixed: {useCase: 'gravel', surface: 'mixed'},
  offroad: {useCase: 'light-offroad', surface: 'offroad'},
} as const;
