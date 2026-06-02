import type { HeroContent } from '@/types';
import { siteConfig } from '@/data/site';

export const heroContent: HeroContent = {
	greeting: "Hey, I'm",
	firstName: 'Luiz Fernando',
	lastName: 'de Souza',
	title: 'Full-Stack Developer · Front-End Specialist',
	bio: '2+ years building production-grade web and desktop applications for real clients. Specialized in Angular front-ends with React experience, and full-stack capabilities spanning TypeScript APIs, Rust back-ends, and cross-platform desktop apps via Tauri.',
	ctas: [
		{ label: 'View Projects', href: '#projects', variant: 'primary' },
		{ label: 'Get in Touch', href: '#contact', variant: 'outline' },
	],
	socials: [
		{ label: 'GitHub', href: siteConfig.github, icon: 'github' },
		{ label: 'LinkedIn', href: siteConfig.linkedin, icon: 'linkedin' },
	],
};
