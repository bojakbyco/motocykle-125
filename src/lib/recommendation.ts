import type {Motorcycle, QuizAnswers} from '../types';
import {budgetLimits, ridingProfiles} from './quiz-config';

const roadCategories: Motorcycle['category'][] = [
  'naked',
  'sport',
  'scrambler',
  'cruiser',
  'scooter',
  'adventure',
];
const mixedCategories: Motorcycle['category'][] = ['adventure', 'dual-sport', 'scrambler'];
const offroadCategories: Motorcycle['category'][] = ['dual-sport', 'enduro', 'adventure'];

function vehicleTypeMatches(motorcycle: Motorcycle, preference: QuizAnswers['vehicleType']) {
  if (preference === 'either') return true;
  return preference === 'scooter' ? motorcycle.category === 'scooter' : motorcycle.category !== 'scooter';
}

export function hardFilter(motorcycle: Motorcycle, answers: QuizAnswers) {
  if (motorcycle.status === 'used-reference' || motorcycle.status === 'verify') return false;
  if (motorcycle.price && motorcycle.price.amount > budgetLimits[answers.budget]) return false;
  if (!vehicleTypeMatches(motorcycle, answers.vehicleType)) return false;
  if (answers.ridingProfile === 'offroad' && !offroadCategories.includes(motorcycle.category)) return false;
  return true;
}

function profileScore(motorcycle: Motorcycle, answers: QuizAnswers) {
  const profile = ridingProfiles[answers.ridingProfile];
  const directUse = motorcycle.useCases.includes(profile.useCase);
  const relatedCityUse = profile.useCase === 'city' && motorcycle.useCases.includes('commute');
  const useScore = directUse ? 1 : relatedCityUse ? 0.8 : 0.25;
  const categories = profile.surface === 'road'
    ? roadCategories
    : profile.surface === 'mixed'
      ? mixedCategories
      : offroadCategories;
  const surfaceScore = categories.includes(motorcycle.category)
    ? 1
    : profile.surface === 'road' && motorcycle.category !== 'enduro'
      ? 0.7
      : 0.2;
  return (useScore * 0.65) + (surfaceScore * 0.35);
}

function budgetScore(motorcycle: Motorcycle, answers: QuizAnswers) {
  if (!motorcycle.price) return 0.55;
  const limit = budgetLimits[answers.budget];
  if (limit === Infinity) return 0.9;
  return Math.max(0.65, 1 - (motorcycle.price.amount / limit) * 0.25);
}

function ergonomicsScore(motorcycle: Motorcycle, height: QuizAnswers['height']) {
  const seat = motorcycle.dimensions.seatHeightMm;
  if (!seat) return 0.55;
  if (height === 'short') return seat <= 790 ? 1 : seat <= 820 ? 0.7 : 0.35;
  if (height === 'average') return seat >= 760 && seat <= 850 ? 1 : 0.65;
  if (height === 'tall') return seat >= 800 ? 1 : seat >= 770 ? 0.7 : 0.4;
  return seat >= 840 ? 1 : seat >= 800 ? 0.7 : 0.35;
}

function passengerScore(motorcycle: Motorcycle, passenger: QuizAnswers['passenger']) {
  if (passenger === 'solo') return 0.85;
  if (passenger === 'sometimes') return motorcycle.editorial.passengerComfort / 5;
  return (motorcycle.editorial.passengerComfort + motorcycle.editorial.touringReadiness) / 10;
}

export function scoreMotorcycle(motorcycle: Motorcycle, answers: QuizAnswers) {
  const raw =
    0.45 * profileScore(motorcycle, answers) +
    0.2 * budgetScore(motorcycle, answers) +
    0.2 * ergonomicsScore(motorcycle, answers.height) +
    0.15 * passengerScore(motorcycle, answers.passenger);
  return Math.max(0, Math.min(100, Math.round(raw * 20) * 5));
}

export function recommend(models: Motorcycle[], answers: QuizAnswers) {
  return models
    .filter((motorcycle) => hardFilter(motorcycle, answers))
    .map((motorcycle) => ({motorcycle, score: scoreMotorcycle(motorcycle, answers)}))
    .sort((a, b) => b.score - a.score || a.motorcycle.brand.localeCompare(b.motorcycle.brand, 'pl'))
    .slice(0, 4);
}
