<div align="center">

# luiz.craton.com.br

**Personal portfolio — Luiz Fernando de Souza**

[![CI](https://github.com/luizfsouzadev/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/luizfsouzadev/portfolio/actions/workflows/ci.yml) [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/) [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/) [![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://luiz.craton.com.br)

[Live →](https://luiz.craton.com.br)

</div>

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, SSG) |
| Language | TypeScript 5 (strict mode) |
| Styling | TailwindCSS 4 (CSS-based config) |
| Fonts | Syne (display) + Outfit (body) via `next/font` |
| Icons | lucide-react (UI icons) |
| Hosting | Vercel |
| CI/CD | GitHub Actions |
| Linting | ESLint + Prettier + prettier-plugin-tailwindcss |
| Git hooks | Husky + commitlint + lint-staged |

## Design System

| Token | Value |
|---|---|
| Accent color | `#c2410c` (orange-red) |
| Display font | Syne — `font-display` |
| Body font | Outfit — `font-body` |
| Dark mode | Class-based (`.dark` on `<html>`) + system preference fallback |

Tokens are defined in `src/app/globals.css` via `@theme inline` (Tailwind v4 CSS-based config). Do not use arbitrary color values — always reference the design tokens.

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
git clone https://github.com/luizfsouzadev/portfolio.git
cd portfolio
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint and auto-fix |
| `npm run format` | Format all files with Prettier |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run validate` | Run typecheck + lint + format check (CI gate) |

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Design tokens (@theme), keyframes, global styles
│   ├── layout.tsx        # Root layout — fonts, metadata, ThemeProvider
│   └── page.tsx          # Home page (section composition)
├── components/
│   ├── layout/           # Header (nav, theme toggle), Footer
│   ├── sections/         # Hero, About, Experience, Projects, Skills, Contact
│   └── ui/               # Reusable primitives (Button, Card, Badge...)
├── contexts/             # ThemeContext (dark/light mode)
├── data/                 # Portfolio content — edit here to update the site
│   ├── hero.ts           # Hero section content (greeting, bio, CTAs, socials)
│   ├── projects.ts       # Project entries
│   ├── skills.ts         # Skill entries grouped by category
│   └── experience.ts     # Work experience entries
├── hooks/                # Custom React hooks
│   └── useActiveSection.ts  # IntersectionObserver for nav highlighting
├── lib/                  # Utilities (cn, formatDate, getDuration)
└── types/                # TypeScript interfaces (Project, Skill, Experience, HeroContent...)
```

## Implementation Status

| Section | Status |
|---|---|
| Header | ✅ Complete |
| Hero | ✅ Complete |
| About | 🔲 Skeleton |
| Experience | 🔲 Skeleton |
| Projects | 🔲 Skeleton |
| Skills | 🔲 Skeleton |
| Contact | 🔲 Skeleton |
| Footer | 🔲 Skeleton |
| Dark mode | ✅ Complete |
| Accessibility base | ✅ Complete |
| i18n (EN/PT) | 📋 Planned |

## Planned: Internationalisation

Target: English (default) and Portuguese (Brazil). Implementation will use **next-intl** with URL-based locale routing (`/` = en, `/pt` = pt-BR) for full SEO support. This requires restructuring `src/app/` to `src/app/[locale]/` and adding locale middleware — scheduled after all sections are complete.

## Commit Convention

Follows [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>: <description in lower-case, max 72 chars>
```

| Type | When to use |
|---|---|
| `feat` | New section, component, or visible feature |
| `fix` | Bug fix |
| `style` | Visual/UI change with no logic change |
| `refactor` | Code restructuring with no behavior change |
| `chore` | Dependencies, tooling, config |
| `docs` | Documentation only |
| `ci` | CI/CD pipeline changes |
| `perf` | Performance improvement |

## Branch Strategy

| Branch | Purpose |
|---|---|
| `main` | Production — auto-deploys to Vercel |
| `develop` | Active development |
| `feat/<name>` | New features, branched from `develop` |
| `fix/<name>` | Bug fixes, branched from `develop` |

## License

MIT © [Luiz Fernando de Souza](https://luiz.craton.com.br)
