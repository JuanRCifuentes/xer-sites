// Locale list shared with xer-blog and xer-docs — keep the codes and labels in
// sync with the `locales` config in their astro.config.mjs files.
export const LOCALES = {
	en: { label: 'English', dir: 'ltr' },
	zh: { label: '中文', dir: 'ltr' },
	ar: { label: 'العربية', dir: 'rtl' },
	hi: { label: 'हिन्दी', dir: 'ltr' },
	es: { label: 'Español', dir: 'ltr' },
	pt: { label: 'Português', dir: 'ltr' },
	ru: { label: 'Русский', dir: 'ltr' },
	fr: { label: 'Français', dir: 'ltr' },
	de: { label: 'Deutsch', dir: 'ltr' },
	ko: { label: '한국어', dir: 'ltr' },
	ja: { label: '日本語', dir: 'ltr' },
	it: { label: 'Italiano', dir: 'ltr' },
} as const;

export type Lang = keyof typeof LOCALES;

export const DEFAULT_LANG: Lang = 'en';

// UI strings per locale. English and Spanish are human-maintained; the rest
// are AI-translated, mirroring the convention on the blog and docs sites.
export const STRINGS: Record<Lang, { description: string }> = {
	en: { description: 'Welcome to Xer.' },
	zh: { description: '欢迎来到 Xer。' },
	ar: { description: 'مرحباً بك في Xer.' },
	hi: { description: 'Xer में आपका स्वागत है।' },
	es: { description: 'Bienvenido a Xer.' },
	pt: { description: 'Bem-vindo ao Xer.' },
	ru: { description: 'Добро пожаловать в Xer.' },
	fr: { description: 'Bienvenue sur Xer.' },
	de: { description: 'Willkommen bei Xer.' },
	ko: { description: 'Xer에 오신 것을 환영합니다.' },
	ja: { description: 'Xer へようこそ。' },
	it: { description: 'Benvenuto in Xer.' },
};
