export type ProjectStatus = 'production' | 'development' | 'archived';

export interface Project {
	id: string;
	stack: string[];
	status: ProjectStatus;
	url?: string;
	githubUrl?: string;
	imageUrl?: string;
	featured: boolean;
	startDate: string;
	endDate?: string;
}

export type SkillLevel = 'proficient' | 'experienced' | 'familiar';

export type SkillCategory = 'languages' | 'frameworks' | 'styling' | 'databases' | 'devops' | 'tools';

export interface Skill {
	name: string;
	level: SkillLevel;
	category: SkillCategory;
}

export type EmploymentType = 'full-time' | 'part-time' | 'freelance' | 'internship';

export interface Experience {
	id: string;
	company: string;
	companyUrl?: string;
	location: string;
	type: EmploymentType;
	startDate: string;
	endDate?: string;
	current: boolean;
	stack: string[];
}

// ── Hero ────────────────────────────────────────────────────────────────────

export type SocialIcon = 'github' | 'linkedin';

export interface HeroSocial {
	label: string;
	href: string;
	icon: SocialIcon;
}

export interface HeroCta {
	href: string;
	variant: 'primary' | 'outline';
}

export interface HeroContent {
	ctas: HeroCta[];
	socials: HeroSocial[];
}

// ── Education ────────────────────────────────────────────────────────────────

export interface Education {
	id: string;
	institution: string;
	startDate: string;
	endDate?: string;
	current: boolean;
}

// ── About ────────────────────────────────────────────────────────────────────

export interface AboutHighlight {
	key: string;
	value: string;
}

export interface AboutContent {
	highlights: AboutHighlight[];
}

// ── Language ─────────────────────────────────────────────────────────────────

export interface Language {
	name: string;
	level: string;
	detail?: string;
}
