import type { JSX } from 'react';
import { getTranslations } from 'next-intl/server';
import type { Skill, SkillCategory, SkillLevel } from '@/types';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { cn } from '@/lib/utils';

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

export async function Skills({ skills }: SkillsProps): Promise<JSX.Element> {
	const t = await getTranslations('skills');
	const grouped = groupByCategory(skills);

	return (
		<section id='skills' aria-label={t('sectionLabel')} className='py-24 md:py-32'>
			<div className='mx-auto max-w-6xl px-6'>
				<SectionHeader number='04' label={t('sectionLabel')} heading={t('heading')} subheading={t('subheading')} />

				<div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-3'>
					{CATEGORY_ORDER.map((category) => {
						const categorySkills = grouped.get(category);
						if (!categorySkills?.length) return null;
						return (
							<div key={category}>
								<h3 className='text-foreground/40 mb-4 font-mono text-xs font-semibold tracking-widest uppercase'>{t(`categories.${category}`)}</h3>
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
						{t('levels.proficient')}
					</span>
					<span className='mr-4'>
						<span className='bg-foreground/40 mr-1.5 inline-block h-1.5 w-1.5 rounded-full align-middle' />
						{t('levels.experienced')}
					</span>
					<span>
						<span className='bg-foreground/20 mr-1.5 inline-block h-1.5 w-1.5 rounded-full align-middle' />
						{t('levels.familiar')}
					</span>
				</p>
			</div>
		</section>
	);
}
