// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// All locales (including English) live under a path prefix, so send the
	// bare root to the default locale.
	redirects: { '/': '/en/' },
	integrations: [
		starlight({
			title: 'Xer Docs',
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
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
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