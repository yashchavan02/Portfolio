# Yash Chavan — Portfolio

A premium, recruiter-focused Full Stack Developer portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

> Live demo: [yashchavan.dev](https://yashchavan.dev)

## ✨ Highlights

- **Black-first dark mode** with subtle glassmorphism, gradient blobs, and grid overlays.
- **Animated hero** with typed role rotator, floating tech badges, and "Open to Opportunities" status pill.
- **Live GitHub stats** — repos, followers, contribution graph, top languages, trophies.
- **Premium project cards** for CaveNote, CropLeaf, PrimeVista Stream, Linkify, and the Prodigy Infotech internship.
- **Skills** grouped by Backend, Frontend, Database, Cloud & DevOps, and Tools & AI, with animated progress bars.
- **Contact form** with inline validation that opens the user's mail client with a prefilled message.
- **Custom cursor**, smooth scroll, section reveal animations, scroll-progress bar, and a brief loading transition.
- **Responsive** down to mobile, with a polished hamburger menu.
- **SEO**: per-page meta tags, Open Graph, Twitter cards, and JSON-LD `Person` schema.
- **Accessibility**: keyboard focus styles, `prefers-reduced-motion` support, semantic landmarks.

## 🧱 Tech Stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** (custom design tokens)
- **Framer Motion** for animations
- **Lucide React** for icons
- **Typed.js** for the hero role rotator
- **react-helmet-async** for SEO
- **GitHub REST + ghchart + github-readme-stats** for the open-source section

## 🚀 Getting started

```bash
# Install
npm install

# Dev server (default: http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview the production build
npm run preview
```

## 🗂 Project structure

```
src/
├── App.tsx                  # Root layout + SEO
├── main.tsx                 # Entry + providers
├── index.css                # Tailwind + design system
├── components/
│   ├── BackgroundFX.tsx     # Gradient blobs + grid
│   ├── CustomCursor.tsx     # Dot + ring cursor
│   ├── GitHubStats.tsx      # Live GitHub data
│   ├── GlassCard.tsx        # Reusable glass surface
│   ├── LoadingScreen.tsx    # Brand loading transition
│   ├── Navbar.tsx           # Sticky nav + mobile menu
│   ├── SectionReveal.tsx    # In-view section animations
│   └── sections/
│       ├── About.tsx
│       ├── Achievements.tsx
│       ├── Contact.tsx
│       ├── Experience.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── Projects.tsx
│       └── Skills.tsx
└── data/
    ├── constants.ts
    ├── profile.ts
    └── types.ts
```

## 🎨 Design tokens

| Token | Value |
| --- | --- |
| Background | `#0A0A0A` |
| Text | `#FFFFFF` |
| Accent (purple) | `#8B5CF6` |
| Accent (cyan) | `#06B6D4` |
| Display font | Space Grotesk |
| Body font | Inter |
| Mono font | JetBrains Mono |

## 🛠 Customizing

- **Personal info**: edit `src/data/profile.ts` (name, socials, projects, experience, achievements).
- **Nav links**: edit `src/data/constants.ts`.
- **Resume link**: update `profile.resumeUrl` with your hosted PDF.
- **GitHub username**: derived from `profile.social.github` — change it and the GitHub section updates automatically.

## 📈 Performance

- Code-split via Vite's `manualChunks` (vendor + motion).
- `loading="lazy"` on all GitHub badge images.
- `prefers-reduced-motion` short-circuits all animations.
- Inline critical CSS via Tailwind, no runtime CSS-in-JS.

## 📄 License

MIT — use it, remix it, ship it.
