import { defineRouteMiddleware } from '@astrojs/starlight/route-data';
import { applySeoMetadata } from './seo';

export const onRequest = defineRouteMiddleware((context) => {
	applySeoMetadata(context.locals.starlightRoute, context.url);
});
