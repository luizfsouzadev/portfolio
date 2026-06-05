'use client';

import { useState, useRef, useEffect } from 'react';
import type { JSX } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

const LOCALES = [
	{ code: 'en', label: 'English', flag: '🇺🇸' },
	{ code: 'pt', label: 'Português', flag: '🇧🇷' },
] as const;

type LocaleCode = (typeof LOCALES)[number]['code'];

export function LocaleSwitcher(): JSX.Element {
	const locale = useLocale() as LocaleCode;
	const router = useRouter();
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent): void => {
			if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
				setOpen(false);
			}
		};
		const handleEscape = (e: KeyboardEvent): void => {
			if (e.key === 'Escape') setOpen(false);
		};
		document.addEventListener('mousedown', handleClickOutside);
		document.addEventListener('keydown', handleEscape);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('keydown', handleEscape);
		};
	}, []);

	return (
		<div ref={containerRef} className='relative'>
			<button
				type='button'
				aria-haspopup='listbox'
				aria-expanded={open}
				aria-label={`Language: ${current.label}`}
				onClick={() => setOpen((prev) => !prev)}
				className='text-foreground/55 hover:text-foreground flex items-center gap-1.5 rounded-md px-2 py-1.5 transition-colors'>
				<span className='text-base leading-none' aria-hidden='true'>
					{current.flag}
				</span>
				<span className='font-mono text-xs font-medium uppercase'>{current.code}</span>
			</button>

			{open && (
				<div role='listbox' aria-label='Select language' className='border-foreground/10 bg-background absolute top-full right-0 z-50 mt-1.5 min-w-37 overflow-hidden rounded-md border shadow-lg'>
					{LOCALES.map((loc) => (
						<button
							key={loc.code}
							role='option'
							aria-selected={locale === loc.code}
							type='button'
							onClick={() => {
								router.replace(pathname, { locale: loc.code });
								setOpen(false);
							}}
							className={cn('flex w-full items-center gap-2.5 px-3 py-2.5 text-sm transition-colors', locale === loc.code ? 'text-accent bg-accent/5 font-medium' : 'text-foreground/60 hover:text-foreground hover:bg-foreground/5')}>
							<span className='text-base leading-none' aria-hidden='true'>
								{loc.flag}
							</span>
							<span className='font-body'>{loc.label}</span>
						</button>
					))}
				</div>
			)}
		</div>
	);
}
