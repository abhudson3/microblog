import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import aws from "astro-sst";


// https://astro.build/config
export default defineConfig({
  site: 'https://andrewbhudson.dev',
  output: "static",
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "css-variables"
    }
  },
  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true
  },
  integrations: [tailwind(), sitemap(), mdx()]
});