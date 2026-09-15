// English is the primary language and lives at the site root; German is served
// under /de. Most pages share their slug across languages. These are the
// exceptions, as [English, German] paths without the /de prefix. The language
// switch and the hreflang alternates both read this list, so a page whose slug
// differs between languages needs an entry here, or its alternate links point
// at a 404.
const SLUG_PAIRS: ReadonlyArray<readonly [en: string, de: string]> = [
  ['/services', '/leistungen'],
  ['/values-excellence-technology', '/values-fachliche-exzellenz'],
];

/**
 * Resolves the English and German URL paths of the page at `pathname`.
 *
 * `en` and `de` include `base` and keep the trailing slash of `pathname`,
 * e.g. '/services/' → { en: '/services/', de: '/de/leistungen/' }.
 * `neutralPath` is `pathname` without base and /de prefix, for matching nav items.
 */
export function getLanguagePaths(pathname: string, base: string) {
  const basePrefix = base.endsWith('/') ? base : `${base}/`;
  const relPath = pathname.startsWith(basePrefix)
    ? pathname.slice(basePrefix.length - 1) // keep leading '/'
    : pathname;
  const neutralPath = relPath.replace(/^\/de(\/|$)/, '/');

  // Compare on a slash-insensitive key so '/services' and '/services/' both match.
  const hasTrailingSlash = neutralPath !== '/' && neutralPath.endsWith('/');
  const key = hasTrailingSlash ? neutralPath.slice(0, -1) : neutralPath;
  const pair = SLUG_PAIRS.find(([en, de]) => en === key || de === key);
  const slash = hasTrailingSlash ? '/' : '';
  const enPath = pair ? `${pair[0]}${slash}` : neutralPath;
  const dePath = pair ? `${pair[1]}${slash}` : neutralPath;

  return {
    neutralPath,
    en: `${basePrefix}${enPath.slice(1)}`,
    de: `${basePrefix}de${dePath}`,
  };
}
