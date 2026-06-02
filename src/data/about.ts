import type { AboutContent } from '@/types';

export const aboutContent: AboutContent = {
	heading: 'A little about me.',
	paragraphs: [
		"I'm a Full-Stack Developer from Brazil with a front-end focus and over two years of professional experience. I build production-grade applications — from real-time tablet menus to cross-platform desktop tools — shipped to paying clients.",
		'Currently I work as the sole front-end developer at Agilizae Tecnologia, where I shipped a full tablet menu application from scratch and led two major platform refactors. In parallel, I run CRATON Software, a boutique software house I founded in November 2025, building custom solutions for small businesses.',
		'My day-to-day stack is Angular on the front, with React experience, and full-stack capabilities spanning TypeScript APIs, Rust back-ends, and cross-platform desktop apps via Tauri.',
	],
	highlights: [
		{ value: '2+', label: 'years professional' },
		{ value: '5', label: 'projects in production' },
		{ value: '3', label: 'active clients' },
	],
};
