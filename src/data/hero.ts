import type { HeroContent } from '@/types';

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
		{ label: 'GitHub', href: 'https://github.com/luizfsouzadev', icon: 'github' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/luizfsouzadev', icon: 'linkedin' },
	],
};
