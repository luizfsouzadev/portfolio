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
| Styling | TailwindCSS 4 | CSS-based config via `@theme` in `globals.css` — no `tailwind.config.ts` |
| Fonts | Syne (display) + Outfit (body) | Loaded via `next/font/google`, exposed as `--font-syne` / `--font-outfit` CSS vars |
| Icons | lucide-react v1.x | Brand icons (Github, Linkedin) were removed — use inline SVGs for those |
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

### ⚠️ TailwindCSS 4 Warning

There is **no `tailwind.config.ts`** in this project. Tailwind v4 uses a CSS-based configuration
approach. All design tokens are defined in `src/app/globals.css` inside `@theme inline { ... }`.

Custom utilities and keyframes live in `@layer utilities { ... }` in the same file.
Do not attempt to create a `tailwind.config.ts` — it is not used.

---

## Architecture

### Data Layer → Types → Components

All portfolio content lives in `src/data/`. Components never hardcode content — they receive
data as props or import from `src/data/` directly in Server Components.

```
src/data/*.ts        ← source of truth for all content
src/types/index.ts   ← TypeScript interfaces for all data shapes
src/lib/utils.ts     ← Pure utility functions (cn, formatDate, getDuration)
src/hooks/           ← Custom React hooks (useActiveSection, useTheme...)
src/contexts/        ← React contexts (ThemeContext)
src/components/      ← UI only — no business logic, no hardcoded content
```

To update any portfolio content (projects, skills, experience, hero), edit only `src/data/`.
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

## Design System

| Token | Value | Tailwind class |
|---|---|---|
| Accent color | `#c2410c` | `text-accent`, `bg-accent`, `border-accent` |
| Background | `var(--background)` | `bg-background` |
| Foreground | `var(--foreground)` | `text-foreground` |
| Display font | Syne (via `--font-syne`) | `font-display` |
| Body font | Outfit (via `--font-outfit`) | `font-body` |
| Header height | `72px` | `var(--header-height)` in CSS, `pt-[var(--header-height)]` in JSX |

All tokens are defined in `src/app/globals.css` using `@theme inline`. Do not use arbitrary
color values for brand properties — always use the token classes.

### Dark Mode

Dark mode uses **class-based strategy**: the `.dark` class on `<html>` activates dark variables.
A fallback `@media (prefers-color-scheme: dark)` handles the no-JS / system-preference case.

- `ThemeContext` (in `src/contexts/ThemeContext.tsx`) manages theme state
- Preference persisted in `localStorage` under the key `'theme'`
- An inline `<script>` in `layout.tsx` sets `.dark` before hydration (no FOUC)
- Use `dark:` Tailwind variants sparingly — most theming is handled via CSS variables

### Animation Utilities (defined in `globals.css`)

| Class | Effect |
|---|---|
| `animate-fade-up` | Fade in + slide up, `0.65s ease both` |
| `anim-delay-0` … `anim-delay-5` | Animation delays: 0, 120, 240, 360, 480, 600 ms |
| `hero-grid` | Dot-grid background pattern |
| `bg-radial-vignette` | Radial gradient vignette overlay |

---

## Coding Conventions

### Comments

Write as few comments as possible. Well-named types and functions are self-documenting.

Write a comment only when it would prevent a future mistake:
- A non-obvious constraint the code can't express (e.g. a library caveat, a browser quirk)
- An `eslint-disable` line — always include one line explaining why
- An intentional deviation from the expected pattern (e.g. an omitted dependency array)

Never write comments that paraphrase the code, label JSX sections, or describe what a function does when its name and types already say it.

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
- Custom design tokens (colors, fonts) are defined in `globals.css` — do not use arbitrary values for brand properties

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
| Contexts | PascalCase with `Context` suffix | `ThemeContext.tsx` |
| Utilities | camelCase | `formatDate.ts` |
| Data files | camelCase | `projects.ts` |
| Type files | camelCase | `index.ts` |

---

## Accessibility Requirements

Every component must meet the following baseline:

- All interactive elements are reachable by keyboard and have visible focus styles
- Images and icons have appropriate `alt` or `aria-hidden='true'`
- Sections use semantic HTML with `aria-label` for screen readers
- Motion: `prefers-reduced-motion` disables all CSS animations (defined in `globals.css`)
- A skip-to-content link is present at the top of the page (rendered in `Header`)
- Color contrast meets WCAG AA minimums (4.5:1 for normal text, 3:1 for large text)

---

## Planned: Internationalisation

Scheduled after all sections are complete. Will use **next-intl** with URL-based locale routing:
- Default locale `en` at `/` (no prefix)
- Portuguese at `/pt`

This requires moving `src/app/layout.tsx` and `src/app/page.tsx` to `src/app/[locale]/` and
adding middleware for locale detection. Messages live in `src/i18n/messages/`.

Do not add ad-hoc translation strings to component files in anticipation of i18n — wait for
the proper architecture to be in place.

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

> **Sandbox note:** `npm run build` may crash with SIGBUS in certain VM environments due to
> Next.js 16's SWC compiler (Rust/native binary). This is an infrastructure limitation, not
> a code issue. The build runs correctly on Vercel. `npm run validate` is the reliable gate
> in the sandbox.

---

## What NOT to Do

- Do not add `pages/` directory — this project uses App Router exclusively
- Do not create `tailwind.config.ts` — Tailwind v4 uses CSS-based config
- Do not use `<img>` — use `next/image`
- Do not use `<Head>` — use the `Metadata` export API
- Do not use relative imports — always use `@/`
- Do not use `default export` in `src/components/` — named exports only
- Do not hardcode portfolio content in components — it belongs in `src/data/`
- Do not use `any` — ever
- Do not add `'use client'` without a clear reason — explain in a comment why it's needed
- Do not run `npm audit fix --force` — it may introduce breaking changes
- Do not import `Github` or `Linkedin` from `lucide-react` — those brand icons were removed in v1.x; use inline SVGs
