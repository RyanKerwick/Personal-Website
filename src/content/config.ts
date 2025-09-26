import { defineCollection, z } from 'astro:content';

const sections = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),        // determines nav + render order
    title: z.string(),        // label shown in the sticky nav
    id: z.string().optional() // optional anchor (defaults to slug)
  }),
});

export const collections = { sections };
