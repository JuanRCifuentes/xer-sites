// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// All locales (including English) live under a path prefix, matching the
	// blog and docs sites, so send the bare root to the default locale.
	redirects: { '/': '/en/' },
	i18n: {
		// Keep in sync with src/i18n.ts and the Starlight sites' locale config.
		defaultLocale: 'en',
		locales: ['en', 'zh', 'ar', 'hi', 'es', 'pt', 'ru', 'fr', 'de', 'ko', 'ja', 'it'],
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: false,
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
