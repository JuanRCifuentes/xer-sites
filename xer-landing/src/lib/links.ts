import { SITE_LINKS } from "../consts";
import type { Lang } from "../i18n";

// Cross-site links keep the current locale by prefixing the target site's
// base URL with the active language code.
export function resolveHref(link: { href: string; site?: keyof typeof SITE_LINKS }, lang: Lang): string {
	if (link.site === undefined) return link.href;
	const path = link.href.replace(/^\//, "");
	return SITE_LINKS[link.site] + "/" + lang + "/" + (path === "" ? "" : path);
}
