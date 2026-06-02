import type { Experience } from '@/types';

export const experiences: Experience[] = [
	{
		id: 'agilizae',
		role: 'Front-End Developer',
		company: 'Agilizae Tecnologia',
		location: 'Remote, Brazil',
		type: 'full-time',
		startDate: '2023-10',
		current: true,
		description: [
			'Sole developer of Agilizae Menu — a full-featured tablet menu application now live with active clients, directly generating new revenue.',
			'Led two complete refactoring cycles (v5 and v6) of the flagship web platform, achieving ~50% faster response times and ~25% smaller bundle size.',
			'Implemented centralized ThemeService with Angular Signals and Capacitor Preferences, resolving a critical Ionic/TailwindCSS compatibility conflict.',
			'Proposed and initiated domain-driven (features/) architecture migration, improving long-term maintainability.',
		],
		stack: ['Angular', 'Ionic', 'TypeScript', 'TailwindCSS', 'JavaScript', 'Node.js', 'Docker'],
	},
	{
		id: 'craton',
		role: 'Founder & Lead Developer',
		company: 'CRATON Software',
		location: 'Tambaú, SP, Brazil',
		type: 'freelance',
		startDate: '2024-01',
		current: true,
		description: [
			'Founded a boutique software house focused on custom solutions for small businesses and liberal professionals.',
			'Built and deployed Simone Control — a cross-platform fiscal management desktop app — serving a production client with an active subscription.',
			'Developed and deployed professional websites with SEO management for legal professionals.',
		],
		stack: ['Angular', 'TypeScript', 'Tauri', 'Rust', 'PostgreSQL', 'MySQL', 'Docker'],
	},
];
