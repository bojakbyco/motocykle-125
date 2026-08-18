import {describe, expect, it} from 'vitest';
import {hardFilter, recommend, scoreMotorcycle} from '../lib/recommendation';
import type {Motorcycle, QuizAnswers} from '../types';

const base = {
  id: 'a',
  slug: 'a',
  brand: 'Test',
  model: 'A',
  status: 'current-pl',
  category: 'naked',
  useCases: ['city', 'commute'],
  price: {amount: 11000, currency: 'PLN', asOf: '2026-08-18', kind: 'msrp'},
  engine: {capacityCc: 125, powerKw: 11, cooling: 'liquid', gearbox: 6},
  dimensions: {wetWeightKg: 130, seatHeightMm: 790},
  chassis: {abs: 'dual'},
  equipment: {},
  editorial: {
    beginnerFriendliness: 5,
    passengerComfort: 2,
    touringReadiness: 2,
    gravelReadiness: 1,
    cityAgility: 5,
    tallRiderFit: 3,
    partsAvailability: 5,
    limitations: ['Testowe ograniczenie'],
  },
  sourceUrls: ['https://example.com'],
  verifiedAt: '2026-01-01',
  summary: 'Test',
} satisfies Motorcycle;

const answers: QuizAnswers = {
  ridingProfile: 'city',
  budget: '12',
  height: 'average',
  passenger: 'solo',
  vehicleType: 'motorcycle',
};

describe('recommendation scoring', () => {
  it('returns a multiple of five in range', () => {
    const score = scoreMotorcycle(base, answers);
    expect(score).toBeGreaterThanOrEqual(0);
    expect(score).toBeLessThanOrEqual(100);
    expect(score % 5).toBe(0);
  });

  it('filters unverified models and models above the selected budget', () => {
    expect(hardFilter({...base, status: 'verify'}, answers)).toBe(false);
    expect(hardFilter({...base, price: {...base.price, amount: 12001}}, answers)).toBe(false);
  });

  it('honours an objective scooter or motorcycle preference', () => {
    const scooter = {...base, category: 'scooter'} satisfies Motorcycle;
    expect(hardFilter(scooter, answers)).toBe(false);
    expect(hardFilter(base, {...answers, vehicleType: 'scooter'})).toBe(false);
    expect(hardFilter(scooter, {...answers, vehicleType: 'scooter'})).toBe(true);
  });

  it('prefers a city-friendly model for a city profile', () => {
    const awkward = {
      ...base,
      id: 'b',
      slug: 'b',
      model: 'B',
      useCases: ['light-offroad'] as Motorcycle['useCases'],
      category: 'enduro' as const,
    } satisfies Motorcycle;
    expect(recommend([awkward, base], answers)[0].motorcycle.id).toBe('a');
  });

  it('limits output to four candidates including an alternative', () => {
    expect(recommend(Array.from({length: 8}, (_, i) => ({...base, id: String(i), slug: String(i)})), answers)).toHaveLength(4);
  });
});
