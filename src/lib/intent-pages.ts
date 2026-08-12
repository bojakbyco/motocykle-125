export const intentPages = {
  'wysoka-osoba': {
    title: 'Motocykl 125 dla wysokiej osoby',
    desc: 'Modele, od których warto zacząć przymiarki przy wzroście 185 cm i więcej.',
    filter: (m: any) => m.editorial.tallRiderFit >= 4,
    guide: '125-dla-wysokiej-osoby',
  },
  'adventure-do-15000': {
    title: 'Adventure 125 do 15 000 zł',
    desc: 'Krótka lista adventure i dual-sport. Brak ceny oznacza konieczność potwierdzenia budżetu u dealera.',
    filter: (m: any) => ['adventure', 'dual-sport'].includes(m.category) && (m.price?.amount ?? 15000) <= 15000,
    guide: 'adventure-125-do-15000',
  },
  'dojazdy-do-pracy': {
    title: '125 na dojazdy do pracy',
    desc: 'Zwinne motocykle i skutery oceniane wysoko w codziennym ruchu.',
    filter: (m: any) => m.useCases.includes('commute') && m.editorial.cityAgility >= 4,
    guide: 'skuter-czy-motocykl-125',
  },
  'na-szutry': {
    title: 'Motocykl 125 na asfalt i szutry',
    desc: 'Modele z charakterem i ergonomią przydatną poza równym asfaltem.',
    filter: (m: any) => m.editorial.gravelReadiness >= 4,
    guide: 'adventure-125-do-15000',
  },
  'dla-poczatkujacego': {
    title: 'Pierwszy motocykl 125',
    desc: 'Przyjazne modele o przewidywalnym charakterze i wysokiej ocenie łatwości.',
    filter: (m: any) => m.editorial.beginnerFriendliness >= 5,
    guide: 'skuter-czy-motocykl-125',
  },
} as const;

export type IntentKey = keyof typeof intentPages;
