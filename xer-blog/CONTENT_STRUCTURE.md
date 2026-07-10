# Blog Content Structure Contract

This document is the required contract for any system that creates, translates,
moves, or repairs blog content in this repository.

## Objective

Every blog article must:

- live inside the correct locale's `blog` directory;
- build at `/<locale>/blog/<article-slug>/`;
- appear only on the matching locale's blog index and archive;
- provide the fields used by the blog cards;
- use stable, lowercase, URL-safe slugs; and
- link to other pages using their final site URLs, not source-repository paths.

## Supported locales

The supported locale codes are:

```text
en zh ar hi es pt ru fr de ko ja it
```

Do not invent a new locale code without also adding it to `astro.config.mjs`.

## Canonical directory layout

Use this layout for every locale:

```text
src/content/docs/
  <locale>/
    blog/
      index.mdx
      all-posts.mdx
      <article-source-folder>/
        <article-file>.md
    metrics/
      index.md
      ...
```

Example:

```text
src/content/docs/en/blog/01_WHAT A SCHEDULE IS/01_blog.md
src/content/docs/es/blog/01_WHAT A SCHEDULE IS/01_blog.md
```

The source folder and filename may retain their existing names for compatibility
with the content-producing system. Public URLs are controlled by frontmatter and
must not be inferred from these folder names.

Do not put a publishable blog article under `metrics/`. Files under `metrics/`
are metric documentation even when a filename contains `blog_template`.

## Metrics content structure

Every metric publishes two pages inside one locale-specific metric source folder:

1. an Improvement Guide routed at `/<locale>/metrics/<metric-slug>-improvement-guide/`; and
2. a Blog routed at `/<locale>/blog/<article-slug>/`.

Use this source layout:

```text
src/content/docs/<locale>/
  metrics/
    index.md
    <number>_<metric-source-folder>/
      02_guide_template.md
      03_blog_template.md
```

Do not import `01_overview_template.md`. The guide must use `contentType: "metric"` and
`metricPageType: "improvement-guide"`. The blog must use `contentType: "blog"` and
`metricPageType: "narrative"`. Both pages require `title`, `description`, a locale-prefixed
`slug`, `pubDate`, `language`, and `draft: false`.

Set the guide sidebar label to `Improvement Guide` and the narrative sidebar label to
`Blog`, so each metric folder exposes exactly those two entries. Remove the first body-level
H1 because Starlight renders the frontmatter `title` as the page heading.

The Metrics Summary must list every published guide and related blog. Hero and body links
must resolve to final routes.

## Required article frontmatter

Every publishable blog article must start with valid YAML frontmatter using this
shape:

```yaml
---
title: "What a Schedule Is"
description: "Learn what a project schedule is and how it supports reliable Primavera P6 project controls."
slug: "en/blog/what-a-schedule-is-in-primavera-p6"
pubDate: "2026-06-26"
language: "en"
contentType: "blog"
draft: false
---
```

Rules:

1. `title` is required and must be the visible article title.
2. `description` is required and is the sole source for cards and SEO descriptions.
3. `slug` is required and must use exactly
   `<locale>/blog/<article-slug>`, without a leading or trailing slash.
4. `pubDate` is required and must be an ISO date in `YYYY-MM-DD` format.
5. `language` is required and must equal both the directory locale and the first
   segment of `slug`.
6. `contentType` must be `blog`.
7. `draft` should be `false` for published content. Use `true` only when the page
   must not be published.

Additional editorial fields such as `seoTitle`, `authorName`, `keywords`, `topic`,
`audience`, `translationOf`, and `lastReviewed` may remain, but they do not replace
the required fields above. If application code must read an additional field, that
field must also be declared in `src/content.config.ts`.
## Slug rules

A correct slug looks like:

```text
en/blog/what-a-schedule-is-in-primavera-p6
es/blog/que-es-un-cronograma-en-primavera-p6
ja/blog/primavera-p6-schedule-basics
```

Apply all of these rules:

- Prefix the slug with the file's locale and `/blog/`.
- Use lowercase letters where the language permits.
- Use hyphens between words.
- Do not use spaces, underscores, `&`, parentheses, or a leading/trailing slash.
- Prefer ASCII slugs when practical. If localized Unicode slugs are retained,
  ensure they are valid and consistent across all links.
- A slug must be unique across the entire `docs` collection.
- Once published, do not change a slug unless redirects are added for the old URL.

The public URL is the slug surrounded by slashes. For example:

```text
slug: "es/blog/que-es-un-cronograma-en-primavera-p6"
URL:  /es/blog/que-es-un-cronograma-en-primavera-p6/
```

Do not use root-level slugs such as `what-a-schedule-is-in-primavera-p6` or
locale-only slugs such as `es-what-a-schedule-is-in-primavera-p6`. Those produce
pages outside the locale's `/blog/` section and prevent the blog index from
discovering them reliably.

## Index and archive files

Each locale must have both:

```text
src/content/docs/<locale>/blog/index.mdx
src/content/docs/<locale>/blog/all-posts.mdx
```

These two files are section pages, not articles. Do not give them
`contentType: blog`, and do not include them in article-card results.

The index must point to URLs in its own locale:

```mdx
<PostCards locale="es" count={5} seeAllHref="/es/blog/all-posts/" />
```

The archive must do the same:

```mdx
<PostCards locale="es" />
```

Hero actions and Markdown links must use actual final slugs. Never guess a URL
from an article title.

## Required `PostCards` behavior

`src/components/PostCards.astro` must not hardcode `en`. It must accept a locale
and select only articles whose IDs begin with that locale's blog prefix.

Required interface and selection logic:

```astro
interface Props {
  locale: string;
  count?: number;
  seeAllHref?: string;
}

const { locale, count, seeAllHref } = Astro.props;
const prefix = `${locale}/blog/`;

const posts = await getCollection(
  'docs',
  (entry) =>
    entry.id.startsWith(prefix) &&
    entry.id !== `${locale}/blog/all-posts` &&
    entry.data.draft !== true,
);
```

With canonical slugs in place, the card URL may be generated as:

```astro
<a href={`/${post.id}/`}>{post.data.title}</a>
```

The date formatter should use the selected locale instead of always using `en`.

## Translation rules

For a translated article:

- place the file under the translated locale directory;
- set `language` to that locale;
- prefix `slug` with that locale and `/blog/`;
- translate `title` and `description`;
- preserve the original publication date unless editorial policy specifies a
  separate translation publication date;
- set `translationOf` to a stable source identifier or source-relative path;
- update internal links to the translated URL when that translation exists;
- fall back to the English URL only when no translated target exists.

Never copy an English slug beginning with `en/blog/` into another locale.

## Migration procedure for existing content

The repairing system should perform these steps in order:

1. Enumerate Markdown files under `src/content/docs/*/blog/`, excluding
   `index.mdx` and `all-posts.mdx`.
2. Derive the expected locale from the path segment immediately below `docs`.
3. Preserve the article portion of each existing slug where suitable, but rewrite
   the full slug as `<locale>/blog/<article-slug>`.
4. Use `description` as the only description field. When importing legacy content,
   copy the legacy snake_case description value and then remove the legacy field.
5. Add `pubDate` in ISO format when missing. Use an authoritative publication
   date; use `lastReviewed` only if the project explicitly treats it as the publication date.
6. Ensure `language` matches the path locale.
7. Ensure `contentType` is `blog`.
8. Update every blog `index.mdx` and `all-posts.mdx` to pass its locale to
   `PostCards`.
9. Update `PostCards.astro` according to the behavior above.
10. Find and update internal links and hero actions that still reference old or
    nonexistent URLs.
11. Add redirects for any old URLs that have already been published externally.
12. Build and inspect the generated output before deployment.

Do not bulk-rewrite article bodies, titles, or translation text as part of this
structural migration.

## Validation checklist

Run:

```bash
npm run build
```

The build must complete without schema errors or duplicate-route warnings. A
successful exit alone is not enough; Astro can successfully build incorrect
root-level routes.

Then verify all of the following:

- Every article route is under `dist/<locale>/blog/<article-slug>/index.html`.
- No article was unexpectedly emitted at `dist/<article-slug>/index.html` or
  `dist/<locale>-<article-slug>/index.html`.
- `dist/en/blog/index.html` contains five article cards plus the archive card.
- Each localized blog index contains cards only for its own locale.
- Each `all-posts` page contains all published articles for its locale.
- Every card has a non-empty title, description, and valid URL.
- Every hero action resolves to a generated page.
- No two source files have the same final slug.
- Draft articles do not appear in card grids.

Useful source checks:

```bash
rg -n '^slug:' src/content/docs/*/blog -g '*.md' -g '*.mdx'
rg -n '^description:' src/content/docs/*/blog -g '*.md' -g '*.mdx'
rg -n '^pubDate:' src/content/docs/*/blog -g '*.md' -g '*.mdx'
rg -n '<PostCards' src/content/docs/*/blog -g '*.mdx'
```

## Acceptance criteria

The structural repair is complete only when:

1. every published article has the required frontmatter;
2. every article builds below its locale's `/blog/` path;
3. every locale index and archive displays the correct articles;
4. all card and hero links resolve successfully; and
5. `npm run build` succeeds.
