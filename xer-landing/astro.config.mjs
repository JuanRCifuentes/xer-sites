// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// Keep in sync with src/i18n.ts and the Starlight sites' locale config.
const locales = ['en', 'zh', 'ar', 'hi', 'es', 'pt', 'ru', 'fr', 'de', 'ko', 'ja', 'it'];

// https://astro.build/config
export default defineConfig({
	// The production origin, already set in Cloudflare for the cross-site header
	// links. It drives canonical URLs, hreflang alternates, and the sitemap.
	site: process.env.PUBLIC_LANDING_URL,
	// All locales (including English) live under a path prefix, matching the
	// blog and docs sites, so send the bare root to the default locale.
	redirects: { '/': '/en/' },
	i18n: {
		defaultLocale: 'en',
		locales,
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: false,
		},
	},
	integrations: [
		sitemap({
			i18n: { defaultLocale: 'en', locales: Object.fromEntries(locales.map((code) => [code, code])) },
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
