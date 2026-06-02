import type { Skill } from '@/types';

// TODO: grouped by category, skill level indicator

interface SkillsProps {
	skills: Skill[];
}

export function Skills({ skills: _ }: SkillsProps) {
	return (
		<section id='skills' aria-label='Technical skills'>
			{/* TODO */}
		</section>
	);
}
