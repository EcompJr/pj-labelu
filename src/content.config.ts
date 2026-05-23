import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const team = defineCollection({
	loader: glob({ base: './src/content/equipe', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			fullname: z.string(),
			role: z.string(),
			lattes: z.url(),
			orcid: z.url().optional(),
			linkedin: z.url().optional(),
      profile: z.optional(image()),
			summary: z.string(),
		}),
});

const schedule = defineCollection({
	loader: glob({ base: './src/content/agenda', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		category: z.string(),
		agenda: z.string(),
		date: z.coerce.date(),
		time: z.string().optional(),
		local: z.string().optional(),
	}),
});

const archive = defineCollection({
    // Load Markdown and MDX files in the `src/content/acervo/` directory.
    loader: glob({ base: './src/content/acervo', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
    }),
});

export const collections = { team, schedule, archive };
