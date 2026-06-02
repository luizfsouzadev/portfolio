// 'use client' is required: manages localStorage, window.matchMedia, and DOM class manipulation.
'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import type { JSX, ReactNode } from 'react';

export type Theme = 'light' | 'dark' | 'system';

interface ThemeContextValue {
	theme: Theme;
	resolvedTheme: 'light' | 'dark';
	setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

// Safe read from localStorage — returns null in SSR context.
function readStoredTheme(): Theme {
	if (typeof window === 'undefined') return 'system';
	return (localStorage.getItem('theme') as Theme | null) ?? 'system';
}

function resolveTheme(t: Theme): 'light' | 'dark' {
	if (t !== 'system') return t;
	if (typeof window === 'undefined') return 'light';
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyThemeToDom(t: Theme): void {
	const resolved = resolveTheme(t);
	document.documentElement.classList.toggle('dark', resolved === 'dark');
	document.documentElement.classList.toggle('light', resolved === 'light');
}

interface ThemeProviderProps {
	children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
	// Lazy initializer keeps SSR consistent (returns 'system' on server).
	// The inline FOUC script in layout.tsx handles the actual class before hydration.
	const [theme, setThemeState] = useState<Theme>(readStoredTheme);
	const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>(() => resolveTheme(readStoredTheme()));

	const setTheme = useCallback((t: Theme): void => {
		localStorage.setItem('theme', t);
		applyThemeToDom(t);
		setThemeState(t);
		setResolvedTheme(resolveTheme(t));
	}, []);

	// On mount: sync DOM with saved preference, and listen for system changes.
	// setThemeState is NOT called here — state is already correct from the initializer.
	// We only update resolvedTheme when the system preference changes.
	useEffect(() => {
		// Ensure the DOM reflects the current state on first mount
		applyThemeToDom(theme);

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const onSystemChange = (): void => {
			const current = (localStorage.getItem('theme') as Theme | null) ?? 'system';
			if (current === 'system') {
				applyThemeToDom('system');
				setResolvedTheme(resolveTheme('system'));
			}
		};
		mediaQuery.addEventListener('change', onSystemChange);
		return () => mediaQuery.removeEventListener('change', onSystemChange);
		// theme is intentionally omitted: we only want this to run on mount.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
	const ctx = useContext(ThemeContext);
	if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
	return ctx;
}
