import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { getLanguagePaths } from './src/utils/i18n.ts';

const SITE = 'https://klartext-ai.com';

// English moved from /en to the site root in September 2026; German now lives
// under /de. Every page that existed under /en at that point keeps a redirect
// so old links and search results still land on the right page.
const MOVED_FROM_EN = [
  '',
  'agb',
  'blog',
  'datenschutz',
  'ecosystem',
  'impressum',
  'karriere',
  'linktree',
  'research',
  'services',
  'success-stories',
  'team',
  'values',
  'values-excellence-technology',
  'values-responsibility',
  'values-thought-leadership',
  'ventures',
  'blog/agile-ai-development',
  'blog/cybersecurity',
  'blog/digital-sovereignty-teams',
  'blog/domain-driven-design-rfu',
  'blog/end-to-end-ownership',
  'blog/european-ai-sovereignty',
  'blog/evaluation-key-to-ai',
  'blog/explainable-ai',
  'blog/mit-genai-divide',
  'blog/privacy-by-design',
  'success-stories/compliance-assistant',
  'success-stories/data-extraction-banking',
  'success-stories/doclarity',
  'success-stories/quote-automation',
  'success-stories/training-platform',
];

export default defineConfig({
  site: SITE,
  base: '/',
  // In static builds Astro emits meta-refresh redirect pages for these.
  redirects: {
    ...Object.fromEntries(
      MOVED_FROM_EN.map((slug) => [`/en/${slug}`.replace(/\/$/, ''), `/${slug}`])
    ),
    // German-only slugs that used to sit at the root. The slugs German shares
    // with English (/team, /blog, /success-stories, ...) now serve the English
    // page and cannot be redirected.
    '/leistungen': '/de/leistungen',
    '/values-fachliche-exzellenz': '/de/values-fachliche-exzellenz',
    // Old offerings URLs from before the rename to /services and /de/leistungen.
    '/offerings': '/services',
    '/en/offerings': '/services'
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    sitemap({
      // The 404 pages carry `noindex`; listing them makes Search Console report
      // "Submitted URL marked noindex" against the whole sitemap.
      filter: (page) => !/\/404\/?$/.test(new URL(page).pathname),
      // Mirror the <link rel="alternate"> tags from BaseLayout into the sitemap so
      // both signals agree. getLanguagePaths also resolves the slugs that differ
      // between languages (/services <-> /de/leistungen), which the integration's
      // built-in `i18n` option cannot pair up on its own.
      serialize: (item) => {
        const { de, en } = getLanguagePaths(new URL(item.url).pathname, '/');
        const enUrl = new URL(en, SITE).toString();
        item.links = [
          { lang: 'en', url: enUrl },
          { lang: 'de', url: new URL(de, SITE).toString() },
          { lang: 'x-default', url: enUrl }
        ];
        return item;
      }
    })
  ]
});
