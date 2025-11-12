  # Klartext AI Website

⚠️ DON'T MAKE THIS REPO PUBLIC ⚠️

Official company website for Klartext AI - Domain-driven AI solutions that transform AI into ROI.

## 🚀 Tech Stack

- **Astro** - Static site generator
- **TypeScript** - Type safety
- **CSS** - Custom design system with glassmorphism
- **GitHub Pages** - Hosting

## 📁 Project Structure

```
/
├── public/              # Static assets (images, logos)
│   ├── team/           # Team member photos
│   └── LOGO_*.png      # Company logos
├── src/
│   ├── components/     # Reusable Astro components
│   ├── layouts/        # Page layouts
│   ├── pages/          # Routes (index.astro = /, en/index.astro = /en)
│   └── styles/         # Global CSS and design system
├── knowledge/          # Documentation and content
└── assets/            # Original assets (copied to public/)
```

## 🛠 Development

### Prerequisites

- Node.js 18+ and npm

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `http://localhost:4321/website`

## 🌐 Bilingual Support

The website supports German (default) and English:

- German: `/` (root)
- English: `/en`

All components accept a `lang` prop to switch languages.

## 🎨 Design System

The design is inspired by Apple's minimalist aesthetic with:

- **Radial gradient backgrounds** - Soft, off-center with brand colors
- **Glassmorphism cards** - Frosted glass effect with backdrop blur
- **Smooth animations** - Scroll-triggered fade-ins and hover effects
- **Typography** - Thin, geometric sans-serif with generous whitespace
- **Brand colors** - Cool blues (#2479BE, #4C8AC5) with light neutral backgrounds

### CSS Variables

All design tokens are defined in `src/styles/global.css`:

```css
--color-blue: #2479BE;
--color-blue-accent: #4C8AC5;
--color-bg-light: #EFEFEF;
--gradient-radial: radial-gradient(...);
--glass-bg: rgba(255, 255, 255, 0.35);
```

## 📄 Sections

1. **Hero** - Typing animation with tagline
2. **Value Proposition** - Three animated cards explaining approach
3. **Success Stories** - Horizontal scroll gallery with client results
4. **Why Klartext** - Interactive split-screen values presentation
5. **European Values** - Editorial section on privacy and compliance
6. **Team** - Portrait gallery with grayscale-to-color hover effects
7. **Blog Preview** - Latest thought leadership content
8. **Final CTA** - Call-to-action with contact buttons
9. **Footer** - Links and social media

## 🚀 Deployment

The site automatically deploys to GitHub Pages when you push to `main`:

1. GitHub Actions runs the build
2. Outputs static files to `dist/`
3. Deploys to `https://[username].github.io/website`

### Manual Deployment

```bash
npm run build
# Upload contents of dist/ to your hosting provider
```

## 📝 Content Management

All content is managed through:

- **Component props** - Pass `lang="de"` or `lang="en"`
- **Content objects** - Defined within each component
- **Knowledge files** - Documentation in `knowledge/` directory

To update content:

1. Edit the content objects in component files
2. Or extract to separate content files if preferred

## 🔧 Configuration

### Astro Config (`astro.config.mjs`)

```js
{
  site: 'https://klartext-ai.github.io',
  base: '/website',  // Adjust if using custom domain
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en']
  }
}
```

## 📱 Mobile Responsive

All sections are fully responsive with breakpoints at:

- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px

## 🎯 Brand Guidelines

See `CLAUDE.md` for comprehensive brand guidelines including:

- Color palette
- Typography rules
- Design philosophy
- Content strategy
- Team information

## 📞 Contact

**Klartext AI**
Email: [contact info]
LinkedIn: [profile link]

---

**Tagline:** *Wir bauen keine Chatbots. Wir verwandeln KI in ROI.*
**English:** *We don't build chatbots. We transform AI into ROI.*
