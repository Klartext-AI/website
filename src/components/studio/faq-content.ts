// Questions and answers for the FAQ at the end of the home and ventures pages. They spell out
// in plain words what the slogans above them only hint at, so search engines and AI assistants
// can match Klartext AI to the questions people ask. Answers are plain text with inline links
// written as [label](href); Faq.astro renders them as links and also emits FAQPage JSON-LD. The product answers follow doclarity.eu and
// extract.klartext-ai.com (see their llms.txt); keep them in sync when the products change.

export interface FaqItem {
  q: string;
  a: string;
  link?: { href: string; label: string };
}

type Lang = 'de' | 'en';
type Page = 'home' | 'ventures';

const content: Record<Page, Record<Lang, FaqItem[]>> = {
  home: {
    en: [
      {
        q: 'What does Klartext AI do?',
        a: 'Klartext AI is an AI company from Vienna, Austria. We develop custom AI solutions for business-critical processes: agentic systems, document processing, data extraction and process automation. From the first use case to a system in production, one team owns the result. Alongside client work we build our own AI products, such as doclarity and Klartext Extract.'
      },
      {
        q: 'Which problems do you solve with AI?',
        a: 'Processes where being wrong is expensive. In practice: extracting KPIs from annual reports with 100+ pages for banks and rating agencies, making PDFs accessible according to PDF/UA and WCAG, classifying 1,000+ quote requests per week for a manufacturer, compliance assistants that answer from 50+ internal guidelines with source citations, AI tutors for onboarding, and criteria-based pre-assessment of funding applications.',
        link: { href: 'success-stories/', label: 'Success stories' }
      },
      {
        q: 'How is this different from a chatbot?',
        a: 'We don’t build chatbots. We build agentic systems with deterministic edges: validated inputs, explicit rules and clearly defined outputs. Every decision carries a source, a version and a reason, people take over when uncertainty or consequences demand it (human-in-the-loop), and quality is evaluated continuously, including after release. That makes the results traceable and auditable.'
      },
      {
        q: 'How does a project with Klartext AI work?',
        a: 'In three steps. Discover: we find the process where errors are costly and decide where AI makes a measurable difference (AI strategy, use cases, architecture). Build: agentic systems, machine learning and knowledge graphs, versioned, tested and reproducible. Integrate: into your data, systems and workflows, with APIs, audit trails, evaluation and monitoring.',
        link: { href: 'services/', label: 'Services' }
      },
      {
        q: 'Which industries and clients do you work with?',
        a: 'Banking and finance, the public sector, manufacturing and listed companies, among others. Clients include PwC, KSV1870, Austria Wirtschaftsservice (aws), Investitionsbank Sachsen-Anhalt and Terre des Hommes Deutschland. We work in German and English for clients in Austria, Germany and across the EU.'
      },
      {
        q: 'Where is data processed, and what about GDPR and the EU AI Act?',
        a: 'Klartext AI is a European company and builds European by design: data is hosted in Austria and Germany, GDPR and the requirements of the EU AI Act are part of the architecture from the start, and every system keeps people responsible for the decisions that matter.'
      },
      {
        q: 'Which AI products has Klartext AI built?',
        a: '[doclarity](https://doclarity.eu/) makes PDFs accessible with AI and checks them against PDF/UA and WCAG. [Klartext Extract](https://extract.klartext-ai.com/) turns annual reports, contracts and other long PDFs into structured data, with a source for every value. A third venture in the finance sector is in stealth, built together with one of Europe’s largest business universities.',
        link: { href: 'ventures/', label: 'Ventures' }
      },
      {
        q: 'Who is behind Klartext AI?',
        a: 'Klartext AI FlexCo was founded in Vienna in 2025 by Ruben Hetfleisch (CEO), Daniel Toth (COO) and Felix Krause (CTO), and is bootstrapped, without external capital. Ruben Hetfleisch is on the board of AI Austria and founded Austria’s GenAI Community; Felix Krause is on the board of AI Impact Mission (AIM). A team of 10+ engineers and researchers with roots in TU Wien, TU Darmstadt and Fraunhofer Austria works on research into evaluation and verifiable autonomy.',
        link: { href: 'team/', label: 'Team' }
      },
      {
        q: 'How can I contact Klartext AI?',
        a: 'Write to [office@klartext-ai.com](mailto:office@klartext-ai.com) or call [+43 660 81010 67](tel:+436608101067). Our office is at Lerchenfelder Straße 74/2/7, 1080 Vienna, Austria.'
      }
    ],
    de: [
      {
        q: 'Was macht Klartext AI?',
        a: 'Klartext AI ist ein KI-Unternehmen aus Wien. Wir entwickeln individuelle KI-Lösungen für geschäftskritische Prozesse: agentische Systeme, Dokumentenverarbeitung, Datenextraktion und Prozessautomatisierung. Vom ersten Use Case bis zum produktiven System verantwortet ein Team das Ergebnis. Neben Kundenprojekten bauen wir eigene KI-Produkte wie doclarity und Klartext Extract.'
      },
      {
        q: 'Welche Probleme löst Ihr mit KI?',
        a: 'Prozesse, in denen Fehler teuer sind. Konkret: KPI-Extraktion aus Geschäftsberichten mit über 100 Seiten für Banken und Ratingagenturen, barrierefreie PDFs nach PDF/UA und WCAG, die automatische Klassifizierung von über 1.000 Angebotsanfragen pro Woche für einen Industriebetrieb, Compliance-Assistenten, die aus über 50 internen Richtlinien mit Quellenangabe antworten, KI-Tutoren für das Onboarding und die kriterienbasierte Vorprüfung von Förderanträgen.',
        link: { href: 'success-stories/', label: 'Success Stories' }
      },
      {
        q: 'Was ist der Unterschied zu einem Chatbot?',
        a: 'Wir bauen keine Chatbots. Wir bauen agentische Systeme mit klaren Grenzen: validierte Eingaben, feste Regeln und klar definierte Ausgaben. Jede Entscheidung hat Quelle, Version und Begründung, Menschen übernehmen, wenn Unsicherheit oder Tragweite es verlangen (Human-in-the-Loop), und die Qualität wird laufend evaluiert, auch nach dem Go-live. So bleiben Ergebnisse nachvollziehbar und prüfbar.'
      },
      {
        q: 'Wie läuft ein Projekt mit Klartext AI ab?',
        a: 'In drei Schritten. Entdecken: Wir finden den Prozess, in dem Fehler teuer sind, und entscheiden, wo KI einen messbaren Unterschied macht (KI-Strategie, Use Cases, Architektur). Entwickeln: agentische Systeme, Machine Learning und Knowledge Graphs, versioniert, geprüft und reproduzierbar. Integrieren: in Deine Daten, Systeme und Abläufe, mit APIs, Audit Trails, Evaluation und Monitoring.',
        link: { href: 'leistungen/', label: 'Leistungen' }
      },
      {
        q: 'Für welche Branchen und Kunden arbeitet Ihr?',
        a: 'Unter anderem für Banken und Finanzdienstleister, den öffentlichen Sektor, die Industrie und börsennotierte Unternehmen. Zu unseren Kunden zählen PwC, KSV1870, die Austria Wirtschaftsservice (aws), die Investitionsbank Sachsen-Anhalt und Terre des Hommes Deutschland. Wir arbeiten auf Deutsch und Englisch für Kunden in Österreich, Deutschland und der EU.'
      },
      {
        q: 'Wo werden Daten verarbeitet, und wie steht es um DSGVO und EU AI Act?',
        a: 'Klartext AI ist ein europäisches Unternehmen und baut europäisch: Daten werden in Österreich und Deutschland gehostet, DSGVO und die Anforderungen des EU AI Act sind von Anfang an Teil der Architektur, und bei Entscheidungen mit Tragweite bleiben Menschen verantwortlich.'
      },
      {
        q: 'Welche KI-Produkte hat Klartext AI entwickelt?',
        a: '[doclarity](https://doclarity.eu/de) macht PDFs mit KI barrierefrei und prüft sie gegen PDF/UA und WCAG. [Klartext Extract](https://extract.klartext-ai.com/) macht aus Geschäftsberichten, Verträgen und anderen langen PDFs strukturierte Daten, mit Quelle für jeden Wert. Ein drittes Venture im Finanzsektor entsteht im Stealth-Modus gemeinsam mit einer der größten Wirtschaftsuniversitäten Europas.',
        link: { href: 'ventures/', label: 'Ventures' }
      },
      {
        q: 'Wer steht hinter Klartext AI?',
        a: 'Die Klartext AI FlexCo wurde 2025 in Wien von Ruben Hetfleisch (CEO), Daniel Toth (COO) und Felix Krause (CTO) gegründet und ist ohne externes Kapital gewachsen. Ruben Hetfleisch ist Vorstandsmitglied von AI Austria und Gründer der GenAI Community Österreichs, Felix Krause ist im Vorstand von AI Impact Mission (AIM). Ein Team aus über 10 Engineers und Forschenden mit Wurzeln an der TU Wien, der TU Darmstadt und bei Fraunhofer Austria forscht zu Evaluation und überprüfbarer Autonomie.',
        link: { href: 'team/', label: 'Team' }
      },
      {
        q: 'Wie erreiche ich Klartext AI?',
        a: 'Schreib an [office@klartext-ai.com](mailto:office@klartext-ai.com) oder ruf an unter [+43 660 81010 67](tel:+436608101067). Unser Büro ist in der Lerchenfelder Straße 74/2/7, 1080 Wien.'
      }
    ]
  },
  ventures: {
    en: [
      {
        q: 'What is doclarity?',
        a: 'doclarity is AI-assisted software that makes PDFs accessible. It reads each page with AI, rebuilds the tag structure (headings, lists, tables, figures with alt text, links, footnotes and reading order), fixes text contrast to your WCAG target and returns a PDF/UA file with its validation report. A person reviews the AI’s draft in the review editor and has the final word. doclarity is built by Klartext AI and is not affiliated with doclarity.ai.',
        link: { href: 'https://doclarity.eu/', label: 'doclarity.eu' }
      },
      {
        q: 'Which standards and laws does doclarity cover?',
        a: 'Every document is validated with veraPDF against PDF/UA-1 or PDF/UA-2 (ISO 14289) and checked against the WCAG 2.1 success criteria, with an AI review for what checkers cannot see, such as meaningful alt text. That supports the European Accessibility Act (BaFG in Austria, BFSG in Germany) and the Web Accessibility Directive for public-sector bodies, both of which lead to EN 301 549.'
      },
      {
        q: 'Which files does doclarity accept, and what does it cost?',
        a: 'PDF, Word, PowerPoint and LibreOffice files, born-digital or scanned; what comes back is always one tagged PDF. Plans are billed by pages per year or per month, pages count only when you download the finished PDF, and you can start with 30 free pages. Blind and visually impaired people get private access for free.',
        link: { href: 'https://doclarity.eu/pricing', label: 'doclarity pricing' }
      },
      {
        q: 'What is Klartext Extract?',
        a: 'Klartext Extract reads annual reports, contracts, prospectuses and other PDFs of 1,000+ pages cover to cover and extracts exactly the fields you need into a fixed schema. Every value links to its source in the document and has a confidence level, computed values are calculated by code rather than the AI, and your team reviews everything in one workspace. It automates Financial Spreading and KPI extraction, ESG data collection, contract registers and supplier checks.',
        link: { href: 'https://extract.klartext-ai.com/', label: 'extract.klartext-ai.com' }
      },
      {
        q: 'Who uses Klartext Extract?',
        a: 'Klartext Extract is in production at a European rating agency. Its analysts used to do Financial Spreading by hand, working through reports with hundreds of pages for every risk assessment. Today one analysis takes about 15 minutes instead of four days, review included, with a source for every KPI.',
        link: { href: 'success-stories/data-extraction-banking/', label: 'Banking case study' }
      },
      {
        q: 'Where do doclarity and Klartext Extract process data?',
        a: 'doclarity runs as SaaS hosted in Europe, on request on Austrian infrastructure with open-weight models operated with A1, or fully on-premises. An organisation can also choose to allow processing outside the EU; [doclarity’s privacy policy](https://doclarity.eu/datenschutz) lists every processor. Klartext Extract processes data in the EU, and enterprise customers get their own instance with a separate database, file storage and domain.'
      },
      {
        q: 'Who builds the ventures?',
        a: 'All ventures are built by Klartext AI FlexCo in Vienna, Austria. doclarity was developed with AI Factory Austria (AI:AT) and is funded by the Vienna Business Agency and the FFG. A third venture in the finance sector is in stealth, built together with one of Europe’s largest business universities.'
      },
      {
        q: 'Can we build a venture together with Klartext AI?',
        a: 'Yes, in two ways. Start from research: we join your consortium as the AI partner, co-apply for funding and take results from paper to product. Start from a problem: if you have a costly problem without a product on the market, we build it with you at startup speed and share the upside instead of only sending an invoice.'
      }
    ],
    de: [
      {
        q: 'Was ist doclarity?',
        a: 'doclarity ist eine KI-gestützte Software, die PDFs barrierefrei macht. Sie liest jede Seite mit KI, baut die Tag-Struktur neu auf (Überschriften, Listen, Tabellen, Abbildungen mit Alternativtext, Links, Fußnoten und Lesereihenfolge), korrigiert Textkontraste nach Deiner WCAG-Zielstufe und liefert eine PDF/UA-Datei mit Prüfbericht. Eine Fachperson prüft den Entwurf der KI im Review-Editor und hat das letzte Wort. doclarity wird von Klartext AI entwickelt und hat nichts mit doclarity.ai zu tun.',
        link: { href: 'https://doclarity.eu/de', label: 'doclarity.eu' }
      },
      {
        q: 'Welche Normen und Gesetze deckt doclarity ab?',
        a: 'Jedes Dokument wird mit veraPDF gegen PDF/UA-1 oder PDF/UA-2 (ISO 14289) validiert und gegen die Erfolgskriterien der WCAG 2.1 geprüft, ergänzt um eine KI-Prüfung für das, was Prüfwerkzeuge nicht sehen, etwa aussagekräftige Alternativtexte. Das unterstützt den European Accessibility Act (BaFG in Österreich, BFSG in Deutschland) und die Web-Accessibility-Richtlinie für öffentliche Stellen, die beide auf EN 301 549 verweisen.'
      },
      {
        q: 'Welche Dateien verarbeitet doclarity, und was kostet es?',
        a: 'PDF-, Word-, PowerPoint- und LibreOffice-Dateien, digital erstellt oder gescannt; zurück kommt immer ein getaggtes PDF. Die Pläne richten sich nach Seiten pro Jahr oder Monat, Seiten zählen erst beim Download des fertigen PDFs, und Du startest mit 30 Gratisseiten. Blinde und sehbehinderte Menschen nutzen doclarity privat kostenlos.',
        link: { href: 'https://doclarity.eu/de/pricing', label: 'doclarity Preise' }
      },
      {
        q: 'Was ist Klartext Extract?',
        a: 'Klartext Extract liest Geschäftsberichte, Verträge, Prospekte und andere PDFs mit über 1.000 Seiten vollständig und extrahiert genau die Felder, die Du brauchst, in ein festes Schema. Jeder Wert verweist auf seine Quelle im Dokument und hat eine Konfidenzstufe, berechnete Werte rechnet Code statt der KI, und Dein Team prüft alles in einem Arbeitsbereich. So werden Financial Spreading und KPI-Extraktion, ESG-Datenerhebung, Vertragsregister und Lieferantenprüfungen automatisiert.',
        link: { href: 'https://extract.klartext-ai.com/', label: 'extract.klartext-ai.com' }
      },
      {
        q: 'Wer nutzt Klartext Extract?',
        a: 'Klartext Extract ist bei einer europäischen Ratingagentur im Einsatz. Deren Analyst:innen haben Financial Spreading früher händisch erledigt, über Berichte mit Hunderten Seiten für jede Risikobewertung. Heute dauert eine Analyse rund 15 Minuten statt vier Tage, inklusive Prüfung, mit Quelle für jeden KPI.',
        link: { href: 'success-stories/data-extraction-banking/', label: 'Success Story Banking' }
      },
      {
        q: 'Wo verarbeiten doclarity und Klartext Extract Daten?',
        a: 'doclarity läuft als SaaS mit Hosting in Europa, auf Wunsch auf österreichischer Infrastruktur mit Open-Weight-Modellen, betrieben mit A1, oder vollständig on-premises. Eine Organisation kann zusätzlich Verarbeitung außerhalb der EU zulassen; die [Datenschutzerklärung von doclarity](https://doclarity.eu/datenschutz) nennt jeden Auftragsverarbeiter. Klartext Extract verarbeitet Daten in der EU, Enterprise-Kunden bekommen eine eigene Instanz mit eigener Datenbank, eigenem Dateispeicher und eigener Domain.'
      },
      {
        q: 'Wer entwickelt die Ventures?',
        a: 'Alle Ventures entstehen bei der Klartext AI FlexCo in Wien. doclarity wurde mit der AI Factory Austria (AI:AT) entwickelt und wird von der Wirtschaftsagentur Wien und der FFG gefördert. Ein drittes Venture im Finanzsektor entsteht im Stealth-Modus gemeinsam mit einer der größten Wirtschaftsuniversitäten Europas.'
      },
      {
        q: 'Können wir gemeinsam mit Klartext AI ein Venture aufbauen?',
        a: 'Ja, auf zwei Wegen. Start mit Forschung: Wir sind KI-Partner in Deinem Konsortium, beantragen Förderungen mit und bringen Ergebnisse vom Paper zum Produkt. Start mit einem Problem: Hast Du ein teures Problem, für das es noch kein Produkt gibt, bauen wir es gemeinsam in Startup-Tempo und teilen den Upside, statt nur eine Rechnung zu stellen.'
      }
    ]
  }
};

export function faqItems(page: Page, lang: Lang): FaqItem[] {
  return content[page][lang];
}
