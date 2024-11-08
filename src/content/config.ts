import { defineCollection, z } from "astro:content";

const tortas = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    extendedDescription: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  tortas,
};
