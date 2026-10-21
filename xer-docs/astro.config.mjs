// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// The production origin, already set in Cloudflare for the cross-site header
	// links. It drives canonical URLs, hreflang alternates, and the sitemap.
	site: process.env.PUBLIC_DOCS_URL,
	// All locales (including English) live under a path prefix, so send the
	// bare root to the default locale.
	redirects: { '/': '/en/' },
	integrations: [
		starlight({
			title: 'Xer Docs',
			favicon: 'https://xer-assets.ankornova.com/xer-logo.svg',
			customCss: ['./src/styles/brand.css'],
			// English is the default locale. Spanish is human-maintained; the
			// remaining locales are AI-translated and get an "AI Generated" banner
			// (see src/components/Banner.astro).
			defaultLocale: 'en',
			locales: {
				en: { label: 'English', lang: 'en' },
				zh: { label: '中文', lang: 'zh' },
				ar: { label: 'العربية', lang: 'ar', dir: 'rtl' },
				hi: { label: 'हिन्दी', lang: 'hi' },
				es: { label: 'Español', lang: 'es' },
				pt: { label: 'Português', lang: 'pt' },
				ru: { label: 'Русский', lang: 'ru' },
				fr: { label: 'Français', lang: 'fr' },
				de: { label: 'Deutsch', lang: 'de' },
				ko: { label: '한국어', lang: 'ko' },
				ja: { label: '日本語', lang: 'ja' },
				it: { label: 'Italiano', lang: 'it' },
			},
			components: {
				SiteTitle: './src/components/SiteTitle.astro',
				Banner: './src/components/Banner.astro',
			},
			sidebar: [
				{
					label: 'Guides',
					translations: {
						zh: '指南',
						ar: 'الأدلة',
						hi: 'मार्गदर्शिकाएँ',
						es: 'Guías',
						pt: 'Guias',
						ru: 'Руководства',
						fr: 'Guides',
						de: 'Anleitungen',
						ko: '가이드',
						ja: 'ガイド',
						it: 'Guide',
					},
					items: [{ autogenerate: { directory: 'guides' } }],
				},
				{
					label: 'Reference',
					translations: {
						zh: '参考',
						ar: 'المرجع',
						hi: 'संदर्भ',
						es: 'Referencia',
						pt: 'Referência',
						ru: 'Справочник',
						fr: 'Référence',
						de: 'Referenz',
						ko: '참조',
						ja: 'リファレンス',
						it: 'Riferimento',
					},
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
