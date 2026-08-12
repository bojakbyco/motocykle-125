import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { guideSchema, motorcycleSchema } from './lib/schemas';

const motorcycleCollectionSchema = motorcycleSchema.superRefine((value, ctx) => {
  const weights = [value.dimensions.wetWeightKg, value.dimensions.dryWeightKg, value.dimensions.weightKg].filter(Boolean);
  if (weights.length > 1) ctx.addIssue({code:'custom',message:'Podaj tylko jedną podstawową wartość masy',path:['dimensions']});
  if (value.dimensions.weightKg && !value.dimensions.weightDefinition) ctx.addIssue({code:'custom',message:'Neutralna masa wymaga definicji źródłowej',path:['dimensions','weightDefinition']});
});

const motorcycles = defineCollection({ loader: glob({ pattern:'**/*.{md,mdx}', base:'./src/content/motorcycles' }), schema:motorcycleCollectionSchema });
const guides = defineCollection({ loader: glob({ pattern:'**/*.{md,mdx}', base:'./src/content/guides' }), schema:guideSchema });
export const collections = { motorcycles, guides };
