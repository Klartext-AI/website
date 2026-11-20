/**
 * User-selectable high-contrast colour schemes (WCAG 2.2 § 1.4.8, AAA: foreground and
 * background colours can be selected by the user). Same set as doclarity's switch, which
 * follows the "Kontrast" bar German and Austrian public-sector sites ship.
 *
 * A scheme is two colours. Everything else (surfaces, edges, accents) is derived from the
 * pair in src/styles/contrast.css, the way Windows High Contrast works: no tints, no
 * shadows, borders instead of fills. This table is the only place the pairs are written:
 * `contrastSchemeCss()` turns it into the CSS that BaseLayout.astro inlines, and the
 * controls size their grids from its length.
 *
 * Visitors who already run an OS-level high-contrast mode (`forced-colors`) are covered by
 * the browser; the generated CSS hands over to the system colours in that case.
 */

export type ContrastScheme =
  | 'default'
  | 'black-white'
  | 'white-black'
  | 'yellow-black'
  | 'yellow-blue'
  | 'blue-yellow'
  | 'green-black'
  | 'red-cyan';

export interface ContrastSchemeFacts {
  id: ContrastScheme;
  /** Text colour. On "default" this is only the swatch's specimen: the brand theme is not a pair. */
  fg: string;
  /** Page colour, likewise. */
  bg: string;
  /** Polarity for form controls and scrollbars (`color-scheme`). */
  polarity: 'light' | 'dark';
  label: { en: string; de: string };
}

/** Swatch order: the brand theme, the two achromatic pairs, the chromatic pairs, and the
 *  glare-reduced pair last. */
export const CONTRAST_SCHEMES: readonly ContrastSchemeFacts[] = [
  { id: 'default', fg: '#2479BE', bg: '#fbfcfe', polarity: 'light', label: { en: 'Default colors', de: 'Standardfarben' } },
  { id: 'black-white', fg: '#000000', bg: '#ffffff', polarity: 'light', label: { en: 'Black on white', de: 'Schwarz auf Weiß' } },
  { id: 'white-black', fg: '#ffffff', bg: '#000000', polarity: 'dark', label: { en: 'White on black', de: 'Weiß auf Schwarz' } },
  // 19.56:1, and carried by luminance rather than hue, so it survives every colour-vision deficiency.
  { id: 'yellow-black', fg: '#ffff00', bg: '#000000', polarity: 'dark', label: { en: 'Yellow on black', de: 'Gelb auf Schwarz' } },
  // Navy rather than pure blue: #0000ff on yellow is only 8:1, #00008b takes it to 14.25:1.
  { id: 'yellow-blue', fg: '#ffff00', bg: '#00008b', polarity: 'dark', label: { en: 'Yellow on blue', de: 'Gelb auf Blau' } },
  { id: 'blue-yellow', fg: '#00008b', bg: '#ffff00', polarity: 'light', label: { en: 'Blue on yellow', de: 'Blau auf Gelb' } },
  // Green-yellow: a higher ratio than pure #00ff00 and less glare on black.
  { id: 'green-black', fg: '#adff2f', bg: '#000000', polarity: 'dark', label: { en: 'Green on black', de: 'Grün auf Schwarz' } },
  // Deliberately not maximum contrast (8.85:1, still past AAA's 7:1): a tinted ground serves
  // readers for whom pure black on white is the glare problem rather than the fix.
  { id: 'red-cyan', fg: '#8b0000', bg: '#afffff', polarity: 'light', label: { en: 'Dark red on pale cyan', de: 'Dunkelrot auf Hellcyan' } },
];

/** localStorage key, also read by the pre-paint script in BaseLayout.astro. */
export const CONTRAST_STORAGE_KEY = 'kt-contrast';

/** Interface copy for the two controls. */
export const CONTRAST_COPY = {
  en: { group: 'Contrast', adjust: 'Adjust contrast', ratio: 'contrast ratio {ratio} to 1' },
  de: { group: 'Kontrast', adjust: 'Kontrast anpassen', ratio: 'Kontrastverhältnis {ratio} zu 1' },
} as const;

/** WCAG 2.2 relative luminance of an `#rrggbb` colour. */
function luminance(hex: string): number {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const v = Number.parseInt(hex.slice(i, i + 2), 16) / 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** The ratio a scheme delivers, to two decimals; `null` for the brand theme. */
export function schemeRatio({ id, fg, bg }: ContrastSchemeFacts): number | null {
  if (id === 'default') return null;
  const [hi, lo] = [luminance(fg), luminance(bg)].sort((a, b) => b - a);
  return Math.round(((hi + 0.05) / (lo + 0.05)) * 100) / 100;
}

/** A ratio as the page language writes decimals: 19.56 or 19,56. */
export function formatRatio(ratio: number, lang: 'de' | 'en'): string {
  return lang === 'de' ? String(ratio).replace('.', ',') : String(ratio);
}

/** Accessible name of one option: the scheme, then its measured ratio. Colour is what these
 *  controls are for, which is exactly why they cannot rely on it (WCAG 1.4.1). */
export function schemeName(scheme: ContrastSchemeFacts, lang: 'de' | 'en'): string {
  const ratio = schemeRatio(scheme);
  const name = scheme.label[lang];
  if (ratio === null) return name;
  return `${name}, ${CONTRAST_COPY[lang].ratio.replace('{ratio}', formatRatio(ratio, lang))}`;
}

/** The pairs as CSS, inlined by BaseLayout.astro: each scheme sets `--hc-fg`/`--hc-bg`, which
 *  contrast.css maps every token onto. The forced-colors reseed sits in the same sheet so it
 *  reliably comes after the pairs: someone running Windows High Contrast has already chosen
 *  colours the browser will force anyway, and the derived hover shade should match them. */
export function contrastSchemeCss(): string {
  const pairs = CONTRAST_SCHEMES.filter((s) => s.id !== 'default')
    .map((s) => `html[data-contrast="${s.id}"]{--hc-fg:${s.fg};--hc-bg:${s.bg};color-scheme:${s.polarity}}`)
    .join('');
  return `${pairs}@media (forced-colors:active){html[data-contrast][data-contrast]{--hc-fg:CanvasText;--hc-bg:Canvas;--hc-hover:Canvas}}`;
}
