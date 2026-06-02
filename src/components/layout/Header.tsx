'use client';

import { useState, useEffect } from 'react';
import type { JSX } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useTheme } from '@/hooks/useTheme';

interface NavLink {
	label: string;
	href: string;
	sectionId: string;
}

const NAV_LINKS: NavLink[] = [
	{ label: 'About', href: '#about', sectionId: 'about' },
	{ label: 'Experience', href: '#experience', sectionId: 'experience' },
	{ label: 'Projects', href: '#projects', sectionId: 'projects' },
	{ label: 'Skills', href: '#skills', sectionId: 'skills' },
	{ label: 'Education', href: '#education', sectionId: 'education' },
	{ label: 'Contact', href: '#contact', sectionId: 'contact' },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.sectionId);

export function Header(): JSX.Element {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const activeSection = useActiveSection(SECTION_IDS);
	const { setTheme } = useTheme();

	useEffect(() => {
		const onScroll = (): void => setScrolled(window.scrollY > 4);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		const onResize = (): void => {
			if (window.innerWidth >= 768) setMenuOpen(false);
		};
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, []);

	return (
		<>
			<a href='#main-content' className='skip-link'>
				Skip to content
			</a>

			<header role='banner' className={cn('fixed inset-x-0 top-0 z-50 transition-all duration-300', scrolled ? 'border-foreground/5 bg-background/80 border-b shadow-sm backdrop-blur-md' : 'bg-transparent')}>
				<div className='mx-auto flex max-w-6xl items-center justify-between px-6 py-4'>
					<a href='#hero' aria-label='Luiz Fernando de Souza — back to top' className='font-display text-lg font-semibold tracking-tight transition-opacity hover:opacity-80'>
						Luiz Fernando
						<span className='text-foreground/40 ml-1 font-normal'>de Souza</span>
					</a>

					<nav aria-label='Site navigation' className='hidden items-center gap-8 md:flex'>
						{NAV_LINKS.map((link) => (
							<a
								key={link.sectionId}
								href={link.href}
								aria-current={activeSection === link.sectionId ? 'page' : undefined}
								className={cn('hover:text-accent text-sm font-medium transition-colors duration-200', activeSection === link.sectionId ? 'text-accent' : 'text-foreground/55')}>
								{link.label}
							</a>
						))}
					</nav>

					<div className='flex items-center gap-2'>
						<button
							type='button'
							aria-label='Toggle color theme'
							onClick={() => {
								const isDark = document.documentElement.classList.contains('dark');
								setTheme(isDark ? 'light' : 'dark');
							}}
							className='text-foreground/60 hover:text-foreground rounded-md p-2 transition-colors'>
							<Sun size={18} aria-hidden className='theme-icon-dark' />
							<Moon size={18} aria-hidden className='theme-icon-light' />
						</button>

						<button
							type='button'
							aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
							aria-expanded={menuOpen}
							aria-controls='mobile-menu'
							className='text-foreground/60 hover:text-foreground rounded-md p-2 transition-colors md:hidden'
							onClick={() => setMenuOpen((prev) => !prev)}>
							{menuOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
						</button>
					</div>
				</div>

				<div id='mobile-menu' className={cn('overflow-hidden transition-all duration-300 ease-in-out md:hidden', menuOpen ? 'max-h-80' : 'max-h-0')}>
					<nav aria-label='Mobile site navigation' className='border-foreground/5 bg-background/95 border-t px-6 pt-4 pb-6 backdrop-blur-md'>
						<ul className='flex flex-col gap-1'>
							{NAV_LINKS.map((link) => (
								<li key={link.sectionId}>
									<a
										href={link.href}
										aria-current={activeSection === link.sectionId ? 'page' : undefined}
										className={cn('block rounded-md px-2 py-2.5 text-base font-medium transition-colors duration-200', activeSection === link.sectionId ? 'text-accent' : 'text-foreground/60 hover:text-foreground')}
										onClick={() => setMenuOpen(false)}>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
}
