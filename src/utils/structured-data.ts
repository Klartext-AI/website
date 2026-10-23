import { teamProfiles } from '../components/studio/team-profiles';

// JSON-LD shared across klartext-ai.com and the product sites. Each site describes only the
// node it owns, in full, and references the others by @id: klartext-ai.com owns the
// Organization and the founders, doclarity.eu and extract.klartext-ai.com own their
// SoftwareApplication. Repeating another site's details here would let the copies drift
// apart, and search engines merge every node that shares an @id.

export const ORGANIZATION_ID = 'https://klartext-ai.com/#organization';
export const DOCLARITY_ID = 'https://doclarity.eu/#software';
export const EXTRACT_ID = 'https://extract.klartext-ai.com/#software';

type Lang = 'de' | 'en';
type Product = 'doclarity' | 'extract';

const maker = { '@id': ORGANIZATION_ID };

const products = {
  doclarity: { '@id': DOCLARITY_ID, 'name': 'doclarity', 'url': 'https://doclarity.eu/' },
  extract: { '@id': EXTRACT_ID, 'name': 'Klartext Extract', 'url': 'https://extract.klartext-ai.com/' }
};

/** A reference to a product: enough to say Klartext AI makes it, the details live on its own site. */
export function productSchema(product: Product): Record<string, unknown> {
  return { '@type': 'SoftwareApplication', ...products[product], 'creator': maker };
}

// Only titles the company register backs: Felix Krause is CTO, not a registered Geschäftsführer,
// and a Geschäftsführer title says someone can bind the FlexCo. Names, LinkedIn and personal
// sites come from the team page.
const founders = [
  {
    slug: 'ruben-hetfleisch',
    name: 'Ruben Hetfleisch',
    jobTitle: { en: 'CEO', de: 'Geschäftsführer (CEO)' },
    alumniOf: 'TU Darmstadt',
    memberOf: { name: 'AI Austria', url: 'https://aiaustria.com/' }
  },
  {
    slug: 'daniel-toth',
    name: 'Daniel Toth',
    jobTitle: { en: 'COO', de: 'Geschäftsführer (COO)' },
    alumniOf: 'TU Wien'
  },
  {
    slug: 'felix-krause',
    name: 'Felix Krause',
    jobTitle: { en: 'CTO', de: 'CTO' },
    memberOf: { name: 'AI Impact Mission (AIM)', url: 'https://ai-mission.eu/' }
  }
];

/** The founders as schema.org Persons. The product sites reference the same @ids. */
export function founderSchema(lang: Lang): Record<string, unknown>[] {
  return founders.map((founder) => {
    const profile = teamProfiles[lang].find((person) => person.name === founder.name);
    if (!profile) throw new Error(`No team profile for founder ${founder.name}`);
    const website = 'website' in profile ? profile.website : undefined;
    return {
      '@type': 'Person',
      '@id': `https://klartext-ai.com/#${founder.slug}`,
      'name': founder.name,
      'jobTitle': founder.jobTitle[lang],
      ...(website ? { 'url': website } : {}),
      'sameAs': [profile.linkedin, ...(website ? [website] : [])],
      ...(founder.alumniOf ? { 'alumniOf': { '@type': 'CollegeOrUniversity', 'name': founder.alumniOf } } : {}),
      ...(founder.memberOf ? { 'memberOf': { '@type': 'Organization', ...founder.memberOf } } : {}),
      'worksFor': maker
    };
  });
}
