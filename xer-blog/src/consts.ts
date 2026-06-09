// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Brand shown in the shared header across all Xer sites.
export const BRAND_NAME = 'Xer';

// Cross-site URLs for the unified header. In production these come from the
// PUBLIC_* build variables set in Cloudflare; in dev they fall back to the
// local ports, so no .env file is needed.
export const SITE_LINKS = {
	landing: import.meta.env.PUBLIC_LANDING_URL ?? 'http://localhost:4321',
	blog: import.meta.env.PUBLIC_BLOG_URL ?? 'http://localhost:4322',
	docs: import.meta.env.PUBLIC_DOCS_URL ?? 'http://localhost:4323',
};
