import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  output: 'static',
  integrations: [mdx(), sitemap({ filter: (page) => !page.includes('/kreator?') })],
  vite: { plugins: [tailwindcss()] },
});
