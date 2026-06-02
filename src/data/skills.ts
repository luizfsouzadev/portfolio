import type { Skill } from '@/types';

export const skills: Skill[] = [
	// Languages
	{ name: 'TypeScript', level: 'proficient', category: 'languages' },
	{ name: 'JavaScript', level: 'proficient', category: 'languages' },
	{ name: 'HTML5', level: 'proficient', category: 'languages' },
	{ name: 'CSS3', level: 'proficient', category: 'languages' },
	{ name: 'Python', level: 'familiar', category: 'languages' },
	{ name: 'Rust', level: 'familiar', category: 'languages' },

	// Frameworks
	{ name: 'Angular', level: 'proficient', category: 'frameworks' },
	{ name: 'ReactJS', level: 'experienced', category: 'frameworks' },
	{ name: 'Next.js', level: 'experienced', category: 'frameworks' },
	{ name: 'Ionic', level: 'proficient', category: 'frameworks' },
	{ name: 'Node.js', level: 'experienced', category: 'frameworks' },
	{ name: 'Express.js', level: 'experienced', category: 'frameworks' },
	{ name: 'Tauri', level: 'familiar', category: 'frameworks' },

	// Styling
	{ name: 'TailwindCSS', level: 'proficient', category: 'styling' },
	{ name: 'SCSS', level: 'proficient', category: 'styling' },

	// Databases
	{ name: 'PostgreSQL', level: 'experienced', category: 'databases' },
	{ name: 'MySQL', level: 'experienced', category: 'databases' },

	// DevOps
	{ name: 'Docker', level: 'experienced', category: 'devops' },
	{ name: 'Linux', level: 'experienced', category: 'devops' },
	{ name: 'Git', level: 'proficient', category: 'devops' },
	{ name: 'GitHub Actions', level: 'familiar', category: 'devops' },
	{ name: 'Vercel', level: 'experienced', category: 'devops' },

	// Tools
	{ name: 'VS Code', level: 'proficient', category: 'tools' },
	{ name: 'Postman', level: 'experienced', category: 'tools' },
	{ name: 'Android Studio', level: 'familiar', category: 'tools' },
];
