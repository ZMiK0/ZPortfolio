import { defineCollection, z } from "astro:content";

const repos = defineCollection({
    schema: z.object({
        title: z.string(),
        img: z.string(),
    }),
});

const abouts = defineCollection({
    schema: z.object({
        title: z.string()
    }),
});

export const collections = { repos, abouts }