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
| Language | TypeScript 5 |
| Styling | TailwindCSS 4 + SCSS |
| Hosting | Vercel |
| CI/CD | GitHub Actions |
| Linting | ESLint + Prettier |
| Git hooks | Husky + commitlint + lint-staged |

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/luizfsouzadev/portfolio.git
cd portfolio

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

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
| `npm run validate` | Run typecheck + lint + format check |

## Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Home page (section composition)
├── components/
│   ├── layout/           # Header, Footer
│   ├── sections/         # Hero, About, Experience, Projects, Skills, Contact
│   └── ui/               # Reusable primitives (Button, Card, Badge...)
├── data/                 # Portfolio content — edit here to update the site
│   ├── projects.ts
│   ├── skills.ts
│   └── experience.ts
├── hooks/                # Custom React hooks
├── lib/                  # Utilities (cn, formatDate, getDuration)
└── types/                # TypeScript interfaces and types
```

## Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>: <description in lower-case>
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