export type ProjectStatus = 'production' | 'development' | 'archived';

export interface Project {
	id: string;
	name: string;
	description: string;
	longDescription?: string;
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
	role: string;
	company: string;
	companyUrl?: string;
	location: string;
	type: EmploymentType;
	startDate: string;
	endDate?: string;
	current: boolean;
	description: string[];
	stack: string[];
}
