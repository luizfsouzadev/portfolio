import type { HeroContent } from '@/types';
import { siteConfig } from '@/data/site';

export const heroContent: HeroContent = {
	ctas: [
		{ href: '#projects', variant: 'primary' },
		{ href: '#contact', variant: 'outline' },
	],
	socials: [
		{ label: 'GitHub', href: siteConfig.github, icon: 'github' },
		{ label: 'LinkedIn', href: siteConfig.linkedin, icon: 'linkedin' },
	],
};
