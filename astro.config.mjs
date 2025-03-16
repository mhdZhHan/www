// @ts-check
import { defineConfig } from "astro/config";

// integrations
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx(), icon()],

  vite: {
    plugins: [tailwindcss()],
  },
});
