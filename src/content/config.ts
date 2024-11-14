import { defineCollection, z } from "astro:content";

export interface CakeInfo {
  title: string;
  description: string;
  extendedDescription: string;
  image: string;
  tags: string[];
}

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
