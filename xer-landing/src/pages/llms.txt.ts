import type { APIRoute } from 'astro';
import { getEntry } from 'astro:content';
import { BRAND_NAME, SITE_LINKS } from '../consts';

// The site as one Markdown file (llmstxt.org), so an AI assistant can explain
// what Xer does and where to read more without crawling every page.
export const GET: APIRoute = async () => {
	const entry = await getEntry('landing', 'en');
	if (!entry) throw new Error('Missing English landing content for llms.txt');
	const { meta, hero, secondaryFeatures } = entry.data;
	const body = [
		`# ${BRAND_NAME}`,
		'',
		`> ${meta?.description ?? hero.description}`,
		'',
		hero.description,
		'',
		'## What Xer checks',
		'',
		...secondaryFeatures.features.map((feature) => `- ${feature.name} ${feature.description}`),
		'',
		'## Learn more',
		'',
		`- [Blog](${SITE_LINKS.blog}/en/blog/): articles on Primavera P6 scheduling, CPM logic, and schedule quality`,
		`- [Schedule quality metrics](${SITE_LINKS.blog}/en/metrics/): what each metric measures and how to improve it`,
		`- [Blog and metrics index for LLMs](${SITE_LINKS.blog}/llms.txt)`,
		`- [Documentation](${SITE_LINKS.docs}/en/)`,
		'',
	].join('\n');
	return new Response(body, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};
