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
	const [theme, setThemeState] = useState<Theme>(readStoredTheme);
	const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>(() => resolveTheme(readStoredTheme()));

	const setTheme = useCallback((t: Theme): void => {
		localStorage.setItem('theme', t);
		applyThemeToDom(t);
		setThemeState(t);
		setResolvedTheme(resolveTheme(t));
	}, []);

	useEffect(() => {
		applyThemeToDom(theme);

		const mq = window.matchMedia('(prefers-color-scheme: dark)');
		const onSystemChange = (): void => {
			const current = (localStorage.getItem('theme') as Theme | null) ?? 'system';
			if (current === 'system') {
				applyThemeToDom('system');
				setResolvedTheme(resolveTheme('system'));
			}
		};
		mq.addEventListener('change', onSystemChange);
		return () => mq.removeEventListener('change', onSystemChange);
		// theme intentionally omitted — run on mount only
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
	const ctx = useContext(ThemeContext);
	if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
	return ctx;
}
