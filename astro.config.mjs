import { defineConfig } from 'astro/config'

import mdx from "@astrojs/mdx"

// https://astro.build/config
export default defineConfig({
  integrations: [mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: { theme: 'slack-dark', wrap: true, langs: [] },
  })],
})