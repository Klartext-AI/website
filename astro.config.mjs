import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://klartext-ai.com',
  base: '/',
  // Keep old offerings URLs working after the rename to /leistungen and /en/services.
  // In static builds Astro emits meta-refresh redirect pages for these.
  redirects: {
    '/offerings': '/leistungen',
    '/en/offerings': '/en/services'
  },
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    sitemap()
  ]
});
