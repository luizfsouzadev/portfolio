import type { Project } from '@/types';

export const projects: Project[] = [
	{
		id: 'doceria-sueli',
		name: 'Doceria Sueli ERP',
		description: 'Full ERP system for a confectionery business — from inventory and recipes to production, sales, and cash flow.',
		longDescription:
			'Complete ERP built for a confectionery establishment. Covers the full operational cycle: stock and packaging control, recipe management, production planning, product separation, customer management, sales, and cash flow. The entire database and API layer is written in pure Rust, delivering an extremely robust, modern, and compact system.',
		stack: ['Tauri', 'Rust', 'Angular', 'TailwindCSS', 'SQLite', 'NX'],
		status: 'production',
		featured: true,
		startDate: '2026-05',
	},
	{
		id: 'simone-control',
		name: 'Simone Control',
		description: 'Cross-platform fiscal and inventory management desktop application for small retail businesses.',
		longDescription:
			'Handles inventory control, fiscal notes (NF-e), and financial reporting. Currently in production with an active paying client under CRATON Software. Originally built with ReactJS, JavaScript, and MySQL. Rewritten in v2 with Tauri, Rust, Angular, and PostgreSQL for improved performance and cross-platform distribution.',
		stack: ['Tauri', 'Rust', 'Angular', 'TypeScript', 'PostgreSQL', 'Node.js'],
		status: 'production',
		featured: true,
		startDate: '2023-01',
	},
	{
		id: 'agilizae-menu',
		name: 'Agilizae Menu',
		description: 'Tablet application for restaurants where customers can browse the digital menu and place orders directly from the table.',
		longDescription:
			'Built from scratch as sole developer at Agilizae Tecnologia. A tablet-based complement to the company flagship management platform — customers browse items and place orders at the table in real time. Currently live with active clients.',
		stack: ['Angular', 'Ionic', 'TypeScript', 'TailwindCSS', 'Capacitor', 'Node.js'],
		status: 'production',
		featured: false,
		startDate: '2023-10',
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
		id: 'portfolio',
		name: 'luiz.craton.com.br',
		description: 'Personal portfolio built with Next.js 16, TypeScript, and TailwindCSS 4. Features CI/CD via GitHub Actions, automated code quality gates, and production deployment on Vercel.',
		longDescription: 'Architected from scratch with professional tooling: ESLint, Prettier, Husky git hooks with commitlint, lint-staged, and a full CI pipeline. The data layer is fully typed and decoupled from components.',
		stack: ['Next.js', 'TypeScript', 'TailwindCSS', 'GitHub Actions', 'Vercel'],
		status: 'production',
		githubUrl: 'https://github.com/luizfsouzadev/portfolio',
		url: 'https://luiz.craton.com.br',
		featured: false,
		startDate: '2026-05',
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
