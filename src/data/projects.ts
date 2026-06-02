import type { Project } from '@/types';

export const projects: Project[] = [
	{
		id: 'agilizae-menu',
		name: 'Agilizae Menu',
		description: 'Full-featured tablet menu application for the food & beverage industry, built from scratch as the sole developer.',
		longDescription: 'End-to-end B2B product for restaurants and bars, delivering real-time menu management and a seamless customer experience. Currently live with active paying clients and directly contributing to company revenue growth.',
		stack: ['Angular', 'Ionic', 'TypeScript', 'TailwindCSS', 'Capacitor', 'Node.js'],
		status: 'production',
		featured: true,
		startDate: '2023-10',
	},
	{
		id: 'simone-control',
		name: 'Simone Control',
		description: 'Cross-platform fiscal and inventory management desktop application for small retail businesses.',
		longDescription: 'Built as the founding product of CRATON Software. Handles inventory control, fiscal notes (NF-e), and financial reporting. Currently in production with an active paying client.',
		stack: ['Tauri', 'Rust', 'Angular', 'TypeScript', 'PostgreSQL', 'Node.js'],
		status: 'production',
		featured: true,
		startDate: '2023-01',
	},
	{
		id: 'dra-maria-fernanda',
		name: 'Dra. Maria Fernanda Vetere',
		description: 'Professional website for a practicing attorney, with SEO management and Google Search Console integration.',
		stack: ['Angular', 'TypeScript', 'TailwindCSS', 'Vercel'],
		status: 'production',
		featured: false,
		startDate: '2024-01',
	},
	{
		id: 'jovens-advogados',
		name: 'Legal Office Management System',
		description: 'Web-based management system for young attorneys, developed as an academic extension project at Universidade Cruzeiro do Sul.',
		stack: ['Angular', 'TypeScript', 'TailwindCSS', 'PostgreSQL'],
		status: 'development',
		featured: false,
		startDate: '2024-08',
	},
];
