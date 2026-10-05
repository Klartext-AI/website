// Content types for legal text pages rendered by LegalDocument.astro.
// Texts are trusted static strings and may contain inline HTML (links, emphasis).
export type LegalBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; ordered?: boolean; items: string[] };

export type LegalSection = {
  heading: string;
  blocks: LegalBlock[];
};

export type LegalContent = {
  title: string;
  lastUpdated: string;
  intro?: string[];
  sections: LegalSection[];
  // Separate part shown below the main text, e.g. website notices that are not part of the AGB.
  appendix?: {
    id: string;
    title: string;
    intro?: string[];
    sections: LegalSection[];
  };
};

export const p = (text: string): LegalBlock => ({ type: 'paragraph', text });
