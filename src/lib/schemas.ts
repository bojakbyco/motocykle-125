import { z } from 'zod';

const rating = z.number().int().min(1).max(5);

export const motorcycleSchema = z.object({
  id: z.string(),
  slug: z.string(),
  brand: z.string(),
  model: z.string(),
  status: z.enum(['current-pl', 'current-eu', 'used-reference', 'verify']),
  marketYear: z.number().int().optional(),
  productionYear: z.number().int().optional(),
  category: z.enum(['adventure', 'dual-sport', 'enduro', 'naked', 'sport', 'scrambler', 'cruiser', 'scooter']),
  useCases: z.array(z.enum(['city', 'commute', 'weekend', 'touring', 'gravel', 'light-offroad'])),
  price: z
    .object({ amount: z.number().positive(), regularAmount: z.number().positive().optional(), currency: z.literal('PLN'), asOf: z.iso.date(), kind: z.enum(['msrp', 'dealer', 'promotional', 'from']), note: z.string().optional() })
    .optional(),
  engine: z.object({
    capacityCc: z.number().positive().max(125),
    powerKw: z.number().positive().max(11).optional(),
    torqueNm: z.number().positive().optional(),
    cooling: z.enum(['air', 'oil', 'liquid']).optional(),
    gearbox: z.union([z.literal(5), z.literal(6)]).optional(),
    transmission: z.enum(['manual', 'cvt', 'automatic-belt']).default('manual'),
  }),
  dimensions: z.object({
    wetWeightKg: z.number().positive().optional(),
    dryWeightKg: z.number().positive().optional(),
    weightKg: z.number().positive().optional(),
    weightDefinition: z.string().optional(),
    weightWithoutFuelKg: z.number().positive().optional(),
    weightFullyFueledKg: z.number().positive().optional(),
    seatHeightMm: z.number().positive().optional(),
    groundClearanceMm: z.number().positive().optional(),
    tankL: z.number().positive().optional(),
  }),
  chassis: z.object({
    abs: z.enum(['none', 'front', 'dual', 'generic', 'unverified', 'cornering', 'switchable']),
    absNote: z.string().optional(),
    tractionControl: z.boolean().optional(),
    frontWheelIn: z.number().positive().optional(),
    rearWheelIn: z.number().positive().optional(),
    wheelType: z.enum(['cast', 'spoked']).optional(),
    frontTravelMm: z.number().positive().optional(),
    rearTravelMm: z.number().positive().optional(),
  }),
  equipment: z.object({
    led: z.boolean().optional(),
    usb: z.boolean().optional(),
    luggageIncluded: z.boolean().optional(),
    windscreen: z.boolean().optional(),
    handguards: z.boolean().optional(),
  }),
  editorial: z.object({
    beginnerFriendliness: rating,
    passengerComfort: rating,
    touringReadiness: rating,
    gravelReadiness: rating,
    cityAgility: rating,
    tallRiderFit: rating,
    partsAvailability: rating,
    limitations: z.array(z.string()).min(1),
  }),
  sourceUrls: z.array(z.string().url()).min(1),
  verifiedAt: z.iso.date(),
  summary: z.string(),
});

export const guideSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  readingMinutes: z.number().int().positive(),
  intent: z.string(),
});
