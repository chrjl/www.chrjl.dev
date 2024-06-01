import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { rel: ['nofollow'], target: '_blank' }],
    ],
  },
  integrations: [react(), mdx()],
});
