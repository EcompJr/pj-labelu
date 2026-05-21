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

const pesquisadores = defineCollection({
	// Load Markdown and MDX files in the `src/content/pesquisadores/` directory.
	loader: glob({ base: './src/content/pesquisadores', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			position: z.string().optional(),
			academicLevel: z.enum(['Graduação', 'Mestrado', 'Doutorado', 'Pós-doutorado', 'Outro']),
			lattes: z.string().url(),
			orcid: z.string().optional(),
			linkedin: z.string().optional(),
			summary: z.string(),
			image: z.optional(image()),
		}),
});

const agenda = defineCollection({
	// Load Markdown and MDX files in the `src/content/agenda/` directory.
	loader: glob({ base: './src/content/agenda', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		titulo: z.string().min(3, 'O título deve ter pelo menos 3 caracteres'),
		categoria: z.string().min(2, 'A categoria é obrigatória'),
		pauta: z.string().max(300, 'A pauta deve ter no máximo 300 caracteres'),
		data: z.coerce.date(),
		hora: z
			.string()
			.regex(/^\d{2}:\d{2}$/, 'Formato esperado: HH:MM')
			.optional(),
		local: z.string().optional(),
	}),
});

export const collections = { blog, pesquisadores, agenda };
