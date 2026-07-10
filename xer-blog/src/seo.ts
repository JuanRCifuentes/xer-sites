import type { StarlightRouteData } from '@astrojs/starlight/route-data';

type HeadEntry = StarlightRouteData['head'][number];

interface SeoData {
	title: string;
	description?: string;
	seoTitle?: string;
	authorName?: string;
	authorDescription?: string;
	authorUrl?: string;
	keywords?: string[];
	language?: string;
	contentType?: string;
	canonicalUrl?: string;
	lastReviewed?: Date;
	pubDate?: Date;
	seoImage?: string;
	seoImageAlt?: string;
}

const meta = (key: 'name' | 'property', value: string, content: string): HeadEntry => ({
	tag: 'meta',
	attrs: { [key]: value, content },
});

const iso = (date: Date | undefined) => date?.toISOString();

function withoutManagedSeo(head: HeadEntry[]) {
	const managedNames = new Set([
		'description', 'author', 'keywords', 'twitter:card', 'twitter:title',
		'twitter:description', 'twitter:image', 'twitter:image:alt',
	]);
	const managedProperties = new Set([
		'og:title', 'og:description', 'og:url', 'og:type', 'og:site_name', 'og:image',
		'og:image:alt', 'article:published_time', 'article:modified_time', 'article:author',
	]);
	return head.filter((entry) => {
		if (entry.tag === 'title') return false;
		if (entry.tag === 'link' && entry.attrs?.rel === 'canonical') return false;
		if (entry.tag === 'link' && entry.attrs?.rel === 'alternate') return false;
		if (entry.tag === 'script' && entry.attrs?.id === 'article-structured-data') return false;
		if (entry.tag !== 'meta') return true;
		const name = entry.attrs?.name;
		const property = entry.attrs?.property;
		return !(typeof name === 'string' && managedNames.has(name)) &&
			!(typeof property === 'string' && managedProperties.has(property));
	});
}

function safeJsonLd(value: object) {
	return JSON.stringify(value).replace(/</g, '\\u003c');
}

function compact<T extends Record<string, unknown>>(value: T) {
	return Object.fromEntries(Object.entries(value).filter(([, item]) => item !== undefined));
}

export function applySeoMetadata(route: StarlightRouteData, currentUrl: URL) {
	const data = route.entry.data as typeof route.entry.data & SeoData;
	const hasArticleJsonLd = route.head.some((entry) =>
		entry.tag === 'script' && entry.attrs?.type === 'application/ld+json' &&
		/"@type"\s*:\s*"(?:BlogPosting|Article)"/.test(entry.content ?? ''),
	);
	const existingTitle = route.head.find((entry) => entry.tag === 'title')?.content;
	const existingCanonical = route.head.find(
		(entry) => entry.tag === 'link' && entry.attrs?.rel === 'canonical',
	)?.attrs?.href;
	const resolvedSeoTitle = data.seoTitle || data.title;
	const resolvedDescription = data.description;
	const resolvedCanonicalUrl = data.canonicalUrl ||
		(typeof existingCanonical === 'string'
			? existingCanonical
			: new URL(currentUrl.pathname, currentUrl.origin).href);
	const resolvedModifiedDate = data.lastReviewed || route.lastUpdated || data.pubDate;
	const isArticle = data.contentType === 'blog' || data.contentType === 'article';
	const resolvedOgType = isArticle ? 'article' : 'website';
	const absoluteSeoImage = data.seoImage
		? new URL(data.seoImage, resolvedCanonicalUrl).href
		: undefined;
	const publishedDate = iso(data.pubDate);
	const modifiedDate = iso(resolvedModifiedDate);

	const head = withoutManagedSeo(route.head);
	head.push({ tag: 'title', content: data.seoTitle ? resolvedSeoTitle : existingTitle || resolvedSeoTitle });
	if (resolvedDescription) head.push(meta('name', 'description', resolvedDescription));
	head.push({ tag: 'link', attrs: { rel: 'canonical', href: resolvedCanonicalUrl } });
	if (data.authorName) head.push(meta('name', 'author', data.authorName));
	if (data.keywords?.length) head.push(meta('name', 'keywords', data.keywords.join(', ')));

	head.push(meta('property', 'og:title', resolvedSeoTitle));
	if (resolvedDescription) head.push(meta('property', 'og:description', resolvedDescription));
	head.push(meta('property', 'og:url', resolvedCanonicalUrl));
	head.push(meta('property', 'og:type', resolvedOgType));
	head.push(meta('property', 'og:site_name', route.siteTitle));
	if (absoluteSeoImage) {
		head.push(meta('property', 'og:image', absoluteSeoImage));
		if (data.seoImageAlt) head.push(meta('property', 'og:image:alt', data.seoImageAlt));
	}
	if (isArticle) {
		if (publishedDate) head.push(meta('property', 'article:published_time', publishedDate));
		if (modifiedDate) head.push(meta('property', 'article:modified_time', modifiedDate));
		if (data.authorUrl || data.authorName)
			head.push(meta('property', 'article:author', data.authorUrl || data.authorName!));
	}

	head.push(meta('name', 'twitter:card', absoluteSeoImage ? 'summary_large_image' : 'summary'));
	head.push(meta('name', 'twitter:title', resolvedSeoTitle));
	if (resolvedDescription) head.push(meta('name', 'twitter:description', resolvedDescription));
	if (absoluteSeoImage) {
		head.push(meta('name', 'twitter:image', absoluteSeoImage));
		if (data.seoImageAlt) head.push(meta('name', 'twitter:image:alt', data.seoImageAlt));
	}

	if (isArticle && !hasArticleJsonLd) {
		const author = data.authorName
			? compact({
				'@type': 'Person',
				name: data.authorName,
				url: data.authorUrl,
				description: data.authorDescription,
			})
			: undefined;
		const jsonLd = compact({
			'@context': 'https://schema.org',
			'@type': data.contentType === 'blog' ? 'BlogPosting' : 'Article',
			headline: resolvedSeoTitle,
			description: resolvedDescription,
			url: resolvedCanonicalUrl,
			mainEntityOfPage: resolvedCanonicalUrl,
			datePublished: publishedDate,
			dateModified: modifiedDate,
			inLanguage: data.language || route.lang,
			keywords: data.keywords?.length ? data.keywords : undefined,
			image: absoluteSeoImage,
			author,
		});
		head.push({
			tag: 'script',
			attrs: { type: 'application/ld+json', id: 'article-structured-data' },
			content: safeJsonLd(jsonLd),
		});
	}

	route.head = head;
}
