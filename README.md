# Portfolio website

Built with [Astro](https://astro.build) using
[React](https://react.dev) components styled with
[Sass](https://sass-lang.com) and content authored in
[MDX](https://mdxjs.com). Self-hosted fonts via [Fontsource](https://fontsource.org) and [Font Awesome](https://docs.fontawesome.com/web/setup/packages#all-the-things).

## Development

Clone this repository and install dependencies.

```
pnpm install
```

Spin up an Astro dev server:

```
pnpm run dev
```

### Content

The page header is populated with data from `src/data/_metadata.json`. The metadata schema is as follows:

```ts
interface Metadata {
  siteTitle: string;
  pageTitle?: string;
  subtitle?: string;
  subsubtitle?: string;
  description?: string;
  links?: {
    url: string;
    text?: string;
  }[];
}
```

Cards are populated with content and frontmatter from Markdown files in `src/data/content`, imported as [content collections](https://docs.astro.build/en/guides/content-collections/). See `content.config.ts` for frontmatter schema.

Content features:

- Content can be separated into an excerpt and expandable detail by using a `---` separator in the Markdown body.
- Raw HTML can be included (rendered using the `rehype-raw` plugin).
- Font Awesome icons can be included via HTML (e.g. `<i class="fa-solid fa-face-smile"></i>`).
