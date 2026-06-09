import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				// Manual reading time in minutes; overrides the estimate computed
				// from the markdown body (see src/components/PageTitle.astro).
				readingTime: z.number().optional(),
				// Publication date, used to order posts on the blog index
				// (see src/components/PostCards.astro).
				pubDate: z.coerce.date().optional(),
			}),
		}),
	}),
};
