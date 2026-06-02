import type { JSX } from 'react';
import type { Skill, SkillCategory, SkillLevel } from '@/types';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { cn } from '@/lib/utils';

const CATEGORY_LABEL: Record<SkillCategory, string> = {
	languages: 'Languages',
	frameworks: 'Frameworks & Runtimes',
	styling: 'Styling',
	databases: 'Databases',
	devops: 'DevOps & Cloud',
	tools: 'Tools',
};

const LEVEL_STYLES: Record<SkillLevel, string> = {
	proficient: 'text-foreground font-medium',
	experienced: 'text-foreground/65',
	familiar: 'text-foreground/35',
};

const LEVEL_DOT: Record<SkillLevel, string> = {
	proficient: 'bg-accent',
	experienced: 'bg-foreground/40',
	familiar: 'bg-foreground/20',
};

interface SkillsProps {
	skills: Skill[];
}

function groupByCategory(skills: Skill[]): Map<SkillCategory, Skill[]> {
	const map = new Map<SkillCategory, Skill[]>();
	for (const skill of skills) {
		const existing = map.get(skill.category) ?? [];
		map.set(skill.category, [...existing, skill]);
	}
	return map;
}

const CATEGORY_ORDER: SkillCategory[] = ['languages', 'frameworks', 'styling', 'databases', 'devops', 'tools'];

export function Skills({ skills }: SkillsProps): JSX.Element {
	const grouped = groupByCategory(skills);

	return (
		<section id='skills' aria-label='Technical skills' className='py-24 md:py-32'>
			<div className='mx-auto max-w-6xl px-6'>
				<SectionHeader number='04' label='Skills' heading='What I work with.' subheading='Proficiency is relative — every technology listed here has shipped to production in some capacity.' />

				<div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-3'>
					{CATEGORY_ORDER.map((category) => {
						const categorySkills = grouped.get(category);
						if (!categorySkills?.length) return null;
						return (
							<div key={category}>
								<h3 className='text-foreground/40 mb-4 font-mono text-xs font-semibold tracking-widest uppercase'>{CATEGORY_LABEL[category]}</h3>
								<ul className='space-y-2.5'>
									{categorySkills.map((skill) => (
										<li key={skill.name} className='flex items-center gap-2.5'>
											<span className={cn('block h-1.5 w-1.5 shrink-0 rounded-full', LEVEL_DOT[skill.level])} aria-hidden='true' />
											<span className={cn('font-body text-sm', LEVEL_STYLES[skill.level])}>{skill.name}</span>
										</li>
									))}
								</ul>
							</div>
						);
					})}
				</div>

				<p className='font-body text-foreground/30 mt-12 text-xs'>
					<span className='mr-4'>
						<span className='bg-accent mr-1.5 inline-block h-1.5 w-1.5 rounded-full align-middle' />
						Proficient
					</span>
					<span className='mr-4'>
						<span className='bg-foreground/40 mr-1.5 inline-block h-1.5 w-1.5 rounded-full align-middle' />
						Experienced
					</span>
					<span>
						<span className='bg-foreground/20 mr-1.5 inline-block h-1.5 w-1.5 rounded-full align-middle' />
						Familiar
					</span>
				</p>
			</div>
		</section>
	);
}
