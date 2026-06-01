import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

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
    }),
})

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
})

const archive = defineCollection({
  loader: glob({ base: './src/content/acervo', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    coverImage: image().optional(),
    altText: z.string().optional(),
  }),
})

const research = defineCollection({
  loader: glob({ base: './src/content/pesquisas', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    line: z.string(),
    startYear: z.number().nullable().optional(),
    endYear: z.number().nullable().optional(),
    summary: z.string(),
    publication: z.string().optional(),
    researchers: z.array(z.string()).optional(),
  }),
})

const researchLine = defineCollection({
  loader: glob({ base: './src/content/linhas-de-pesquisa', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    order: z.number().optional(),
  }),
})

const productions = defineCollection({
  loader: glob({ base: './src/content/producoes', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    reference: z.string(),
    year: z.number(),
    authors: z.array(z.string()).optional(),
  }),
})

export const collections = { team, schedule, archive, research, researchLine, productions }
