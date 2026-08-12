import type { Motorcycle, QuizAnswers } from '../types';

const budgets = { '10':10000, '15':15000, '20':20000, '25':25000, open:Infinity } as const;
const surfaces:Record<QuizAnswers['surface'], Motorcycle['category'][]> = { road:['naked','sport','scrambler','cruiser','scooter','adventure'], mixed:['adventure','dual-sport','scrambler'], offroad:['dual-sport','enduro','adventure'] };
const priorityField:Record<QuizAnswers['priority'],keyof Motorcycle['editorial']|null> = { beginner:'beginnerFriendliness', performance:null, cost:null, upright:'touringReadiness', style:null, offroad:'gravelReadiness' };
const five = (n:number) => n/5;

export function hardFilter(m:Motorcycle,a:QuizAnswers) {
  if (a.licence === 'other' || m.status === 'used-reference' || m.status === 'verify') return false;
  if (m.price && m.price.amount > budgets[a.budget]) return false;
  if (a.surface === 'offroad' && !surfaces.offroad.includes(m.category)) return false;
  return true;
}
export function scoreMotorcycle(m:Motorcycle,a:QuizAnswers) {
  const use = m.useCases.includes(a.use) ? 1 : m.useCases.some(u => ['city','commute'].includes(u) && ['city','commute'].includes(a.use)) ? .7 : .25;
  const surface = surfaces[a.surface].includes(m.category) ? 1 : a.surface === 'road' && m.category !== 'enduro' ? .7 : .2;
  const limit=budgets[a.budget]; const budget = !m.price ? .55 : limit === Infinity ? .9 : m.price.amount<=limit ? Math.max(.6,1-m.price.amount/limit*.25) : 0;
  const ergoRating = a.height === 'tall' || a.height === 'very-tall' ? m.editorial.tallRiderFit : m.editorial.beginnerFriendliness;
  const ergonomics=five(ergoRating);
  const luggage=a.passenger==='solo' ? .8 : a.passenger==='sometimes' ? five(m.editorial.passengerComfort) : (five(m.editorial.passengerComfort)+five(m.editorial.touringReadiness))/2;
  const experience=a.priority==='beginner' ? five(m.editorial.beginnerFriendliness) : .75;
  const field=priorityField[a.priority]; const priority=field ? five(m.editorial[field] as number) : a.priority==='performance' ? Math.min(1,(m.engine.powerKw ?? 0)/11) : a.priority==='cost' ? (m.price ? Math.max(.3,1-m.price.amount/25000) : .5) : .75;
  const raw=.27*use+.18*surface+.16*budget+.12*ergonomics+.10*luggage+.09*experience+.08*priority;
  return Math.max(0,Math.min(100,Math.round(raw*20)*5));
}
export function recommend(models:Motorcycle[],answers:QuizAnswers) {
  return models.filter(m=>hardFilter(m,answers)).map(m=>({motorcycle:m,score:scoreMotorcycle(m,answers)})).sort((a,b)=>b.score-a.score || a.motorcycle.brand.localeCompare(b.motorcycle.brand,'pl')).slice(0,4);
}
