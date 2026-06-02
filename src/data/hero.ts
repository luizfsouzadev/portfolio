import type { HeroContent } from '@/types';
import { siteConfig } from '@/data/site';

export const heroContent: HeroContent = {
	greeting: "Hey, I'm",
	firstName: 'Luiz Fernando',
	lastName: 'de Souza',
	title: 'Full-Stack Developer · Front-End Specialist',
	bio: '2+ years building production-grade web applications for real clients. Specialized in Angular and React front-ends, with full-stack capabilities across TypeScript APIs and cloud deployments.',
	ctas: [
		{ label: 'View Projects', href: '#projects', variant: 'primary' },
		{ label: 'Get in Touch', href: '#contact', variant: 'outline' },
	],
	socials: [
		{ label: 'GitHub', href: siteConfig.github, icon: 'github' },
		{ label: 'LinkedIn', href: siteConfig.linkedin, icon: 'linkedin' },
	],
};
