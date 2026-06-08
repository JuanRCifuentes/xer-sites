// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Astro Blog';
export const SITE_DESCRIPTION = 'Welcome to my website!';
export const IMAGE_BUCKET_BASE_URL = 'https://pub-e41d555ac3694f6ab48b8772f79a354f.r2.dev';
export type ImageRef = {
	folder: string;
	fileName: string;
	alt?: string;
};
