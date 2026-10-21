import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// The English blog and metrics as one Markdown file (llmstxt.org), so an AI
// assistant can find the right article or improvement guide without crawling
// every page. Every page is also available in the other 11 site locales.
export const GET: APIRoute = async ({ site }) => {
	const pages = await getCollection('docs', ({ id, data }) => id.startsWith('en/') && data.draft !== true);
	const link = (id: string) => (site ? new URL(`/${id}/`, site).href : `/${id}/`);
	const list = (filter: (page: (typeof pages)[number]) => boolean) =>
		pages
			.filter(filter)
			.sort((a, b) => a.data.title.localeCompare(b.data.title, 'en'))
			.map((page) => `- [${page.data.title}](${link(page.id)})${page.data.description ? `: ${page.data.description}` : ''}`);

	const body = [
		'# Xer Blog',
		'',
		'> Articles and schedule quality metrics for Primavera P6: CPM logic, Data Date discipline, constraints, float, and the critical path.',
		'',
		`Start with the [metrics summary](${link('en/metrics')}) or the [blog index](${link('en/blog')}).`,
		'',
		'## Metric improvement guides',
		'',
		...list((page) => page.data.metricPageType === 'improvement-guide'),
		'',
		'## Articles',
		'',
		...list((page) => page.data.contentType === 'blog'),
		'',
	].join('\n');
	return new Response(body, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};
