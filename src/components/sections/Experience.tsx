import type { Experience } from '@/types';

// TODO: timeline layout, stack tags, duration

interface ExperienceProps {
	experiences: Experience[];
}

export function Experience({ experiences: _ }: ExperienceProps) {
	return (
		<section id='experience' aria-label='Professional experience'>
			{/* TODO */}
		</section>
	);
}
