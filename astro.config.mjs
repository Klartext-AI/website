import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://klartext-ai.github.io',
  base: '/website/',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
