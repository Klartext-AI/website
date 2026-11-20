// Shared state for the two contrast controls: the icon menu in the navigation and the swatch
// row in the footer. Both render buttons carrying `data-contrast-choice` and re-sync on the
// `kt:contrast` event, so picking a scheme in one updates the other.
import { CONTRAST_SCHEMES, CONTRAST_STORAGE_KEY, type ContrastScheme } from '../utils/contrast-schemes';

export const CONTRAST_EVENT = 'kt:contrast';

const root = document.documentElement;

function isScheme(value: unknown): value is ContrastScheme {
  return CONTRAST_SCHEMES.some((scheme) => scheme.id === value);
}

/** The scheme on screen, read from <html> rather than storage: the pre-paint script already
 *  applied it, and storage may be unavailable (private mode, blocked site data). */
export function currentScheme(): ContrastScheme {
  const applied = root.getAttribute('data-contrast');
  return isScheme(applied) ? applied : 'default';
}

function apply(next: ContrastScheme) {
  if (next === 'default') root.removeAttribute('data-contrast');
  else root.setAttribute('data-contrast', next);
  // The browser chrome follows the page colour; the brand blue is the default's own value.
  const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (meta) {
    meta.dataset.brand ??= meta.content;
    meta.content = next === 'default' ? meta.dataset.brand : CONTRAST_SCHEMES.find((s) => s.id === next)!.bg;
  }
  document.dispatchEvent(new CustomEvent<ContrastScheme>(CONTRAST_EVENT, { detail: next }));
}

export function setScheme(next: ContrastScheme) {
  apply(next);
  // Storage can throw outright; the scheme still holds for this page's lifetime.
  try {
    if (next === 'default') localStorage.removeItem(CONTRAST_STORAGE_KEY);
    else localStorage.setItem(CONTRAST_STORAGE_KEY, next);
  } catch {}
}

/** Runs `sync` now and whenever the scheme changes, here or in another tab. */
export function onSchemeChange(sync: (scheme: ContrastScheme) => void) {
  sync(currentScheme());
  document.addEventListener(CONTRAST_EVENT, () => sync(currentScheme()));
}

addEventListener('storage', (event) => {
  if (event.key !== CONTRAST_STORAGE_KEY) return;
  apply(isScheme(event.newValue) ? event.newValue : 'default');
});

// A page restored from the back/forward cache runs no scripts, the pre-paint one included, and
// misses storage events while frozen, so it would come back in the scheme it was left in.
addEventListener('pageshow', (event) => {
  if (!event.persisted) return;
  let stored: string | null = null;
  try { stored = localStorage.getItem(CONTRAST_STORAGE_KEY); } catch {}
  const next = isScheme(stored) ? stored : 'default';
  if (next !== currentScheme()) apply(next);
});
