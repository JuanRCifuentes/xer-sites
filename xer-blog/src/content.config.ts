import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import type { ImageRef } from './consts';

const imageRefSchema = z.object({
	folder: z.string(),
	fileName: z.string(),
	alt: z.string().optional(),
}) satisfies z.ZodType<ImageRef>;

const postSchema = z.object({
	title: z.string(),
	description: z.string(),
	// Transform string to Date object
	pubDate: z.coerce.date(),
	updatedDate: z.coerce.date().optional(),
	heroImage: imageRefSchema.optional(),
});

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: postSchema,
});

const metrics = defineCollection({
	loader: glob({ base: './src/content/metrics', pattern: '**/*.{md,mdx}' }),
	schema: postSchema,
});

export const collections = { blog, metrics };
