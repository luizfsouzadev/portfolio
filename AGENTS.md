# Agent Guide — luiz.craton.com.br

This file is the authoritative technical reference for AI coding agents working in this repository.
Read it fully before writing any code, creating any file, or suggesting any change.

---

## Project Identity

Personal portfolio for Luiz Fernando de Souza — a Full-Stack Developer with front-end focus based in Brazil.
Live at: https://luiz.craton.com.br
Repository: https://github.com/luizfsouzadev/portfolio

Purpose: Showcase projects, skills, and professional experience to an international audience.
Target language: English (all code, comments, commit messages, and content).

---

## Stack

| Layer | Technology | Notes |
|---|---|---|
| Framework | Next.js 16 (App Router) | SSG — no server-side runtime |
| Language | TypeScript 5 | Strict mode |
| Styling | TailwindCSS 4 | Utility-first, no CSS modules |
| Runtime utilities | clsx + tailwind-merge | Always use `cn()` for className |
| Hosting | Vercel | Auto-deploy on push to `main` |
| Package manager | npm | Do not use yarn, pnpm, or bun |

### ⚠️ Next.js 16 Warning

This is Next.js 16 — APIs, conventions, and file structure differ significantly from versions
in most training data (13/14). Before writing any Next.js-specific code, read the relevant
guide in `node_modules/next/dist/docs/`. Key differences to be aware of:

- App Router is the only supported router (no `pages/` directory)
- All components are Server Components by default — add `'use client'` only when necessary
- `next/font` is the canonical font solution — do not use `<link>` tags for fonts
- Metadata is exported as a `Metadata` object from `layout.tsx` or `page.tsx` — no `<Head>`
- Image optimization uses `next/image` — do not use plain `<img>` tags
- Route types are auto-generated — do not manually edit `next-env.d.ts`

---

## Architecture

### Data Layer → Types → Components

All portfolio content lives in `src/data/`. Components never hardcode content — they receive
data as props or import from `src/data/` directly in Server Components.

```
src/data/*.ts        ← source of truth for all content
src/types/index.ts   ← TypeScript interfaces for all data shapes
src/lib/utils.ts     ← Pure utility functions (cn, formatDate, getDuration)
src/components/      ← UI only — no business logic, no hardcoded content
```

To update any portfolio content (projects, skills, experience), edit only `src/data/`.
Never embed content strings inside component files.

### Component Structure

```
src/components/
├── layout/     # Header, Footer — rendered in root layout, always visible
├── sections/   # One file per page section — Hero, About, Experience, Projects, Skills, Contact
└── ui/         # Reusable primitives — Button, Card, Badge, etc.
```

**Section components** receive typed props from `src/app/page.tsx`.
**UI primitives** are generic, stateless, and reusable across sections.
**Layout components** are imported directly in `src/app/layout.tsx`.

---

## Coding Conventions

### TypeScript

- All functions must have explicit return types
- Prefer `interface` over `type` for object shapes
- Use `type` for unions, aliases, and primitives
- Never use `any` — use `unknown` and narrow with type guards
- Prefix unused parameters with `_` (e.g., `_event`)
- Export types from `src/types/index.ts`, not from component files

### React / Next.js

- Default to Server Components — only add `'use client'` when using hooks, browser APIs, or event handlers
- Use named exports for all components (not default exports in `src/components/`)
- Exception: `src/app/page.tsx` and `src/app/layout.tsx` use default exports (Next.js requirement)
- Component filenames use PascalCase: `HeroSection.tsx`, `ProjectCard.tsx`
- One component per file
- Props interfaces are defined in the same file as the component, above the component

```tsx
// ✅ Correct
interface HeroProps {
  name: string
}

export function Hero({ name }: HeroProps) { ... }

// ❌ Wrong
export default function Hero({ name }: { name: string }) { ... }
```

### Styling

- Use TailwindCSS utility classes exclusively — no inline styles, no CSS modules
- Use `cn()` from `src/lib/utils.ts` for conditional or merged classNames
- Class order is enforced by `prettier-plugin-tailwindcss` — do not manually sort classes
- For complex or repeated class combinations, extract a variable or a `ui/` component
- Custom design tokens (colors, fonts) are defined in `tailwind.config.ts` — do not use arbitrary values for brand properties

```tsx
// ✅ Correct
import { cn } from '@/lib/utils'
<div className={cn('base-class', isActive && 'active-class')} />

// ❌ Wrong
<div className={`base-class ${isActive ? 'active-class' : ''}`} />
<div style={{ color: '#c2410c' }} />
```

### Imports

- Always use the `@/` alias (never relative paths like `../../`)
- Import order: external packages → internal `@/` imports → types
- Type-only imports use `import type`

```tsx
// ✅ Correct
import { cn } from '@/lib/utils'
import type { Project } from '@/types'

// ❌ Wrong
import { cn } from '../../lib/utils'
```

---

## File Naming

| Type | Convention | Example |
|---|---|---|
| Components | PascalCase | `ProjectCard.tsx` |
| Hooks | camelCase with `use` prefix | `useActiveSection.ts` |
| Utilities | camelCase | `formatDate.ts` |
| Data files | camelCase | `projects.ts` |
| Type files | camelCase | `index.ts` |

---

## Environment Variables

All environment variables are documented in `.env.example`.
Public variables (accessible in the browser) are prefixed with `NEXT_PUBLIC_`.
Never hardcode URLs — always use `process.env.NEXT_PUBLIC_SITE_URL`.
Never commit `.env.local`.

---

## Git Conventions

Branch strategy:
- `main` → production, protected, auto-deploys to Vercel
- `develop` → active development, all work branches from here
- `feat/<name>` → new features
- `fix/<name>` → bug fixes
- `chore/<name>` → tooling, config, dependencies

Commit messages follow Conventional Commits:
```
<type>: <description in lower-case, max 72 chars>
```
Valid types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `ci`, `revert`

The `commit-msg` hook enforces this format via commitlint. Invalid messages are rejected.

---

## Quality Gates

Before finishing any task, the following must pass with zero errors:

```bash
npm run validate   # typecheck + lint + format:check
npm run build      # production build must succeed
```

The CI pipeline runs these same checks on every push to `main` and `develop`.
A failing CI badge means something in the pipeline is broken — fix it before adding new features.

---

## What NOT to Do

- Do not add `pages/` directory — this project uses App Router exclusively
- Do not use `<img>` — use `next/image`
- Do not use `<Head>` — use the `Metadata` export API
- Do not use relative imports — always use `@/`
- Do not use `default export` in `src/components/` — named exports only
- Do not hardcode portfolio content in components — it belongs in `src/data/`
- Do not use `any` — ever
- Do not install new dependencies without considering bundle size impact
- Do not add `'use client'` without a clear reason — explain in a comment why it's needed
- Do not run `npm audit fix --force` — it may introduce breaking changes