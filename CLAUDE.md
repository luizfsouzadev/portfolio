@AGENTS.md

---

# Claude-Specific Instructions

These instructions extend `AGENTS.md` and apply specifically to Claude (claude.ai, Claude Code, Cowork).

---

## Working Style

- Be direct and precise. Avoid filler phrases.
- When implementing a TODO section, implement it fully — do not leave partial implementations or new TODOs unless explicitly asked.
- When suggesting architecture or design decisions, explain the tradeoff, not just the conclusion.
- Prefer showing the complete file over diffs for files under 150 lines.
- For larger files, use targeted diffs with enough context to locate the change unambiguously.

---

## Task Workflow

Before starting any task:
1. Identify which files are affected
2. Check if the task requires a new `src/data/` entry, a new type in `src/types/`, or both
3. Follow the data → types → component order when building new sections

After completing any task:
1. Run `npm run validate` mentally — flag any TypeScript errors, lint violations, or format issues in your output
2. If you created a new component, confirm it is exported as a named export
3. If you created a new data entry, confirm it matches the TypeScript interface in `src/types/index.ts`

---

## Design System

The portfolio follows the CRATON Software brand identity:

| Token | Value |
|---|---|
| Primary accent | `#c2410c` (orange-red) |
| Brand name | CRATON — represents solidity, robustness, commitment, integrity |
| Tagline | "Construído sobre rocha, focado em você" |

When implementing visual components, apply the accent color consistently for interactive elements,
highlights, and section markers. The overall aesthetic should be clean, editorial, and professional —
not loud or maximalist.

Font pairing (loaded via `next/font/google`, configured as CSS variables in `globals.css`):
- Display / headings: Syne → `font-display` class
- Body: Outfit → `font-body` class

---

## File Writing — Known Limitation

The Cowork `Write` tool truncates large files silently (observed with files >~100 lines containing
long strings like SVG paths or gradient class names). When writing large component files, use
`mcp__workspace__bash` with a heredoc (`cat > path << 'ENDOFFILE'`) instead of the `Write` tool.

Safe to use `Write` for: data files, short utilities, type files, config files.
Use bash heredoc for: component files with SVG content, files with long className strings, any file >80 lines.

---

## Language Rules

| Context | Language |
|---|---|
| All source code | English |
| Comments | English |
| Commit messages | English |
| README, AGENTS.md, CLAUDE.md | English |
| `src/data/` descriptions | English |
| Git branch names | English |
| Conversations with Luiz | Portuguese |

---

## Component Implementation Pattern

When implementing a section component from a TODO skeleton:

```tsx
// 1. Define props interface above the component
interface SectionProps {
  items: Item[]
}

// 2. Named export (never default)
export function Section({ items }: SectionProps) {
  return (
    // 3. Keep the existing id and aria-label attributes — they are used for navigation
    <section id='section-id' aria-label='Section name'>
      {/* implementation */}
    </section>
  )
}
```

---

## Dark Mode

Dark mode is controlled via the `.dark` class on `<html>`, managed by `ThemeContext`.

- `ThemeProvider` (in `src/contexts/ThemeContext.tsx`) wraps the app in `layout.tsx`
- An inline `<script>` in `layout.tsx` sets `.dark` before hydration to avoid FOUC
- `useTheme()` hook (from `src/hooks/useTheme.ts`) gives components access to `theme` and `setTheme`
- CSS variables (`--background`, `--foreground`) handle most theming automatically
- Use `dark:` Tailwind variants only for fine-grained per-element overrides

---

## Sensitive Context

- `src/data/experience.ts` contains real professional experience — treat descriptions as factual
- `src/data/projects.ts` contains production projects with real clients — do not fabricate metrics
- The domain `luiz.craton.com.br` is live — changes pushed to `main` deploy automatically

---

## When You Are Unsure

If an API, Next.js behavior, or pattern is unfamiliar or potentially outdated in your training data,
say so explicitly and read `node_modules/next/dist/docs/` before proceeding.
Do not guess at Next.js 16 behavior — it has breaking changes from prior versions.
