export type Motorcycle = {
  id: string;
  slug: string;
  brand: string;
  model: string;
  status: 'current-pl' | 'current-eu' | 'used-reference' | 'verify';
  marketYear?: number;
  category: 'adventure' | 'dual-sport' | 'enduro' | 'naked' | 'sport' | 'scrambler' | 'cruiser' | 'scooter';
  useCases: Array<'city' | 'commute' | 'weekend' | 'touring' | 'gravel' | 'light-offroad'>;
  price?: { amount: number; currency: 'PLN'; asOf: string; kind: 'msrp' | 'dealer' };
  engine: { capacityCc: number; powerKw: number; torqueNm?: number; cooling: 'air' | 'oil' | 'liquid'; gearbox: 5 | 6 };
  dimensions: { wetWeightKg?: number; dryWeightKg?: number; seatHeightMm?: number; groundClearanceMm?: number; tankL?: number };
  chassis: { abs: 'none' | 'front' | 'dual' | 'cornering'; tractionControl?: boolean; frontWheelIn?: number; rearWheelIn?: number; wheelType?: 'cast' | 'spoked'; frontTravelMm?: number; rearTravelMm?: number };
  equipment: { led?: boolean; usb?: boolean; luggageIncluded?: boolean; windscreen?: boolean; handguards?: boolean };
  editorial: { beginnerFriendliness: 1 | 2 | 3 | 4 | 5; passengerComfort: 1 | 2 | 3 | 4 | 5; touringReadiness: 1 | 2 | 3 | 4 | 5; gravelReadiness: 1 | 2 | 3 | 4 | 5; cityAgility: 1 | 2 | 3 | 4 | 5; tallRiderFit: 1 | 2 | 3 | 4 | 5; partsAvailability: 1 | 2 | 3 | 4 | 5; limitations: string[] };
  sourceUrls: string[];
  verifiedAt: string;
  summary: string;
};

export type QuizAnswers = {
  ridingProfile: 'city' | 'weekend' | 'touring' | 'mixed' | 'offroad';
  budget: '12' | '18' | 'open';
  height: 'short' | 'average' | 'tall' | 'very-tall';
  passenger: 'solo' | 'sometimes' | 'touring';
  vehicleType: 'motorcycle' | 'scooter' | 'either';
};
