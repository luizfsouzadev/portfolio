import type { Project } from '@/types';

// TODO: project cards, status badge, stack tags, live/github links

interface ProjectsProps {
	projects: Project[];
}

export function Projects({ projects: _ }: ProjectsProps) {
	return (
		<section id='projects' aria-label='Projects'>
			{/* TODO */}
		</section>
	);
}
