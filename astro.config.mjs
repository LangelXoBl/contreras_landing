// @ts-check
import cloudflare from '@astrojs/cloudflare';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'http://lawyercontreras.com/',

  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  redirects: {
    '/': '/es/',
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
  adapter: cloudflare(),
});
