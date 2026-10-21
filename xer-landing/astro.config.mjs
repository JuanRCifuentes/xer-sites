// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { DEFAULT_LANG, LOCALES } from './src/i18n.ts';

const locales = Object.keys(LOCALES);

// https://astro.build/config
export default defineConfig({
	// The production origin, already set in Cloudflare for the cross-site header
	// links. It drives canonical URLs, hreflang alternates, and the sitemap.
	site: process.env.PUBLIC_LANDING_URL,
	// All locales (including English) live under a path prefix, matching the
	// blog and docs sites, so send the bare root to the default locale.
	redirects: { '/': '/en/' },
	i18n: {
		defaultLocale: DEFAULT_LANG,
		locales,
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: false,
		},
	},
	integrations: [
		sitemap({
			i18n: { defaultLocale: DEFAULT_LANG, locales: Object.fromEntries(locales.map((code) => [code, code])) },
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
