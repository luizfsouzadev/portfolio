import type { Project } from '@/types';

export const projects: Project[] = [
	{
		id: 'doceria-sueli',
		stack: ['Tauri', 'Rust', 'Angular', 'TailwindCSS', 'SQLite', 'NX'],
		status: 'production',
		featured: true,
		startDate: '2026-05',
	},
	{
		id: 'simone-control',
		stack: ['Tauri', 'Rust', 'Angular', 'TypeScript', 'PostgreSQL', 'Node.js'],
		status: 'production',
		featured: true,
		startDate: '2023-01',
	},
	{
		id: 'agilizae-menu',
		stack: ['Angular', 'Ionic', 'TypeScript', 'TailwindCSS', 'Capacitor', 'Node.js'],
		status: 'production',
		featured: false,
		startDate: '2023-10',
	},
	{
		id: 'dra-maria-fernanda',
		stack: ['Angular', 'TypeScript', 'TailwindCSS', 'Vercel'],
		status: 'production',
		featured: false,
		startDate: '2024-01',
	},
	{
		id: 'portfolio',
		stack: ['Next.js', 'TypeScript', 'TailwindCSS', 'GitHub Actions', 'Vercel'],
		status: 'production',
		githubUrl: 'https://github.com/luizfsouzadev/portfolio',
		url: 'https://luiz.craton.com.br',
		featured: false,
		startDate: '2026-05',
	},
	{
		id: 'jovens-advogados',
		stack: ['Angular', 'TypeScript', 'TailwindCSS', 'PostgreSQL'],
		status: 'development',
		featured: false,
		startDate: '2024-08',
	},
];
