import type { ReactNode } from 'react';

// html, body, fonts, and locale-aware wrappers live in app/[locale]/layout.tsx.
// This file exists only because Next.js App Router requires a root layout entry point.
export default function RootLayout({ children }: { children: ReactNode }): ReactNode {
	return children;
}
