import type { CookieConsentConfig } from 'vanilla-cookieconsent';

export const createConfig = (lang: 'de' | 'en', onConsentChange: () => void): CookieConsentConfig => ({
  guiOptions: {
    consentModal: {
      layout: 'box wide',
      position: 'bottom left',
      equalWeightButtons: true,
      flipButtons: false
    },
    preferencesModal: {
      layout: 'box',
      position: 'left',
      equalWeightButtons: true,
      flipButtons: false
    }
  },
  categories: {
    necessary: { enabled: true, readOnly: true },
    analytics: {
      // Clear GA cookies if user later opts out
      autoClear: {
        cookies: [
          { name: /^_ga/ },   // Matches _ga, _ga_XXXXXX
          { name: '_gid' },
        ],
      },
    }
  },
  language: {
    default: lang,
    autoDetect: 'document',
    translations: {
      de: {
        consentModal: {
          title: 'Wir nutzen Cookies für Analytics',
          description: 'Wir verwenden Cookies, um die Website-Nutzung mit Google Analytics zu messen. Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, damit wir sie verbessern können.',
          acceptAllBtn: 'Analytics-Cookies akzeptieren',
          acceptNecessaryBtn: 'Analytics-Cookies ablehnen',
          showPreferencesBtn: 'Einstellungen verwalten',
          footer: '<a href="https://klartext-ai.com/datenschutz/">Datenschutz</a><br><a href="https://klartext-ai.com/agb/">AGBs</a>'
        },
        preferencesModal: {
          title: 'Cookie-Einstellungen',
          acceptAllBtn: 'Akzeptieren',
          acceptNecessaryBtn: 'Ablehnen',
          savePreferencesBtn: 'Speichern',
          closeIconLabel: 'Schließen',
          sections: [
            {
              title: 'Cookie-Nutzung',
              description: 'Wir verwenden Cookies, um Ihre Präferenzen zu speichern und die Website-Nutzung zu analysieren.'
            },
            {
              title: 'Notwendige Cookies <span class="pm__badge">Immer aktiv</span>',
              description: 'Diese Cookies sind für die Grundfunktionen der Website erforderlich. Sie speichern Ihre Cookie-Einstellungen, damit wir sie beim nächsten Besuch erinnern können.',
              linkedCategory: 'necessary'
            },
            {
              title: 'Analytics-Cookies',
              description: 'Wir verwenden Google Analytics, um Website-Besuche zu messen und die Nutzererfahrung zu verbessern. Diese Cookies werden nur mit Ihrer Zustimmung gesetzt.',
              linkedCategory: 'analytics'
            },
            {
              title: 'Weitere Informationen',
              description: 'Bei Fragen zu unserer Cookie-Richtlinie kontaktieren Sie uns bitte unter <a href="mailto:office@klartext-ai.com">office@klartext-ai.com</a>.'
            }
          ]
        }
      },
      en: {
        consentModal: {
          title: 'We use cookies for analytics',
          description: 'We use cookies to measure website usage with Google Analytics. These cookies help us understand how visitors interact with our site so we can improve it.',
          acceptAllBtn: 'Accept analytics cookies',
          acceptNecessaryBtn: 'Reject analytics cookies',
          showPreferencesBtn: 'Manage preferences',
          footer: '<a href="https://klartext-ai.com/en/datenschutz/">Privacy Policy</a><br><a href="https://klartext-ai.com/en/agb/">Terms</a>'
        },
        preferencesModal: {
          title: 'Cookie preferences',
          acceptAllBtn: 'Accept',
          acceptNecessaryBtn: 'Reject',
          savePreferencesBtn: 'Save',
          closeIconLabel: 'Close',
          sections: [
            {
              title: 'Cookie Usage',
              description: 'We use cookies to store your preferences and analyze website usage.'
            },
            {
              title: 'Strictly Necessary Cookies <span class="pm__badge">Always Active</span>',
              description: 'These cookies are essential for basic website functionality. They store your cookie preferences so we can remember them on your next visit.',
              linkedCategory: 'necessary'
            },
            {
              title: 'Analytics cookies',
              description: 'We use Google Analytics to measure website visits and improve user experience. These cookies are only set with your consent.',
              linkedCategory: 'analytics'
            },
            {
              title: 'More information',
              description: 'For any questions about our cookie policy, please contact us at <a href="mailto:office@klartext-ai.com">office@klartext-ai.com</a>.'
            }
          ]
        }
      }
    }
  },
  // Called on first consent AND on every page load when consent already exists
  onFirstConsent: onConsentChange,
  onConsent: onConsentChange,
  onChange: onConsentChange,
});
