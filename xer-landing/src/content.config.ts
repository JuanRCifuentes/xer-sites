import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const link = z.object({ label: z.string(), href: z.string(), site: z.enum(["landing", "blog", "docs"]).optional() });

const image = z.object({ light: z.string(), dark: z.string(), alt: z.string(), width: z.number().optional(), height: z.number().optional() });

const landing = defineCollection({
	loader: glob({ base: "./src/content/landing", pattern: "**/*.md" }),
	schema: z.object({
		meta: z.object({ title: z.string(), description: z.string() }).optional(),
		hero: z.object({
			logo: z.object({ light: z.string(), dark: z.string(), alt: z.string() }).optional(),
			badge: z.object({ label: z.string(), text: z.string(), href: z.string(), site: z.enum(["landing", "blog", "docs"]).optional() }).optional(),
			title: z.string(),
			description: z.string(),
			primaryCta: link,
			secondaryCta: link,
			screenshot: image,
		}),
		logoCloud: z.object({
			heading: z.string(),
			logos: z.array(z.object({ name: z.string(), light: z.string(), dark: z.string() })),
		}),
		primaryFeatures: z.object({
			eyebrow: z.string(),
			title: z.string(),
			description: z.string(),
			features: z.array(z.object({ icon: z.string(), name: z.string(), description: z.string(), link: link.optional() })),
		}),
		secondaryFeatures: z.object({
			eyebrow: z.string(),
			title: z.string(),
			description: z.string(),
			screenshot: image,
			features: z.array(z.object({ icon: z.string(), name: z.string(), description: z.string() })),
		}),
		stats: z.object({
			eyebrow: z.string(),
			title: z.string(),
			description: z.string(),
			items: z.array(z.object({ value: z.string(), label: z.string() })),
		}),
		cta: z.object({
			title: z.string(),
			description: z.string(),
			primaryCta: link,
			secondaryCta: link,
		}),
		footer: z.object({
			copyright: z.string(),
			social: z.array(z.object({ name: z.string(), icon: z.string(), href: z.string() })),
		}),
	}),
});

export const collections = { landing };
