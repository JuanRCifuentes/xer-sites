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
			// English is the default, served from the root path. Spanish is
			// human-maintained; the remaining locales are AI-translated and get an
			// "AI Generated" banner (see src/components/Banner.astro).
			defaultLocale: 'en',
			locales: {
				en: { label: 'English', lang: 'en' },
				es: { label: 'Español', lang: 'es' },
				fr: { label: 'Français', lang: 'fr' },
				it: { label: 'Italiano', lang: 'it' },
				ru: { label: 'Русский', lang: 'ru' },
				ar: { label: 'العربية', lang: 'ar', dir: 'rtl' },
				ja: { label: '日本語', lang: 'ja' },
				'zh-cn': { label: '简体中文', lang: 'zh-CN' },
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
						es: 'Guías',
						fr: 'Guides',
						it: 'Guide',
						ru: 'Руководства',
						ar: 'الأدلة',
						ja: 'ガイド',
						'zh-CN': '指南',
					},
					items: [{ autogenerate: { directory: 'guides' } }],
				},
				{
					label: 'Reference',
					translations: {
						es: 'Referencia',
						fr: 'Référence',
						it: 'Riferimento',
						ru: 'Справочник',
						ar: 'المرجع',
						ja: 'リファレンス',
						'zh-CN': '参考',
					},
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
