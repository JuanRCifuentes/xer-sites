import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				readingTime: z.number().optional(),
				seoTitle: z.string().optional(),
				authorName: z.string().optional(),
				authorDescription: z.string().optional(),
				authorUrl: z.string().url().optional(),
				keywords: z.array(z.string()).optional(),
				language: z.string().optional(),
				contentType: z
					.enum(['blog', 'article', 'documentation', 'docs', 'metric'])
					.optional(),
				metricPageType: z
					.enum(['improvement-guide', 'narrative'])
					.optional(),
				version: z.string().optional(),
				topic: z.string().optional(),
				audience: z.array(z.string()).optional(),
				primarySearchIntent: z.string().optional(),
				relatedMetrics: z.array(z.string()).optional(),
				relatedBlogs: z.array(z.string()).optional(),
				translationOf: z.string().optional(),
				canonicalUrl: z.union([z.literal(''), z.string().url()]).optional(),
				lastReviewed: z.coerce.date().optional(),
				pubDate: z.coerce.date().optional(),
				seoImage: z.string().optional(),
				seoImageAlt: z.string().optional(),
			}),
		}),
	}),
};
