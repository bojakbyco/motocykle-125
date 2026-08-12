import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { guideSchema, motorcycleSchema } from './lib/schemas';

const motorcycleCollectionSchema = motorcycleSchema.superRefine((value, ctx) => { if (value.dimensions.wetWeightKg && value.dimensions.dryWeightKg) ctx.addIssue({code:'custom',message:'Podaj tylko jeden rodzaj masy',path:['dimensions']}); });

const motorcycles = defineCollection({ loader: glob({ pattern:'**/*.{md,mdx}', base:'./src/content/motorcycles' }), schema:motorcycleCollectionSchema });
const guides = defineCollection({ loader: glob({ pattern:'**/*.{md,mdx}', base:'./src/content/guides' }), schema:guideSchema });
export const collections = { motorcycles, guides };
