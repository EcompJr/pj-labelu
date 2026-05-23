import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

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

export const collections = { blog, team, schedule };
