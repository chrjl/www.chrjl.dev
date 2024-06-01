import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import cslSchema from './assets/csl-data.js';

const content = defineCollection({
  loader: glob({
    pattern: ['**/*.md', '**/*.mdx'],
    base: 'src/data/content',
  }),
  schema: z.object({
    title: z.string(),
    target: z.string().optional(),
    order: z.number().optional(),
    created: z.date().optional(),
    modified: z.date().optional(),
    keywords: z.array(z.string()).optional(),
    references: cslSchema.optional(),
  }),
});

export const collections = { content };
