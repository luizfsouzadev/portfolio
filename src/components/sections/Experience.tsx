import type { JSX } from 'react';
import type { Experience } from '@/types';
import { formatDate, getDuration } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';
import { SectionHeader } from '@/components/ui/SectionHeader';

interface ExperienceProps {
	experiences: Experience[];
}

export function Experience({ experiences }: ExperienceProps): JSX.Element {
	return (
		<section id='experience' aria-label='Professional experience' className='py-24 md:py-32'>
			<div className='mx-auto max-w-6xl px-6'>
				<SectionHeader number='02' label='Experience' heading='Where I have worked.' />

				<ol className='relative space-y-12'>
					{experiences.map((exp) => (
						<li key={exp.id} className='grid gap-4 sm:grid-cols-[200px_1fr]'>
							<div className='font-body text-foreground/40 pt-1 text-sm'>
								<time dateTime={exp.startDate}>{formatDate(exp.startDate)}</time>
								<span className='mx-1'>—</span>
								{exp.current ? <span className='text-accent font-medium'>Present</span> : <time dateTime={exp.endDate}>{formatDate(exp.endDate ?? '')}</time>}
								<p className='text-foreground/30 mt-1 text-xs'>{getDuration(exp.startDate, exp.endDate)}</p>
							</div>

							<div>
								<h3 className='font-display text-xl font-semibold'>{exp.role}</h3>
								<p className='font-body text-foreground/55 mt-0.5 text-sm'>
									{exp.companyUrl ? (
										<a href={exp.companyUrl} target='_blank' rel='noopener noreferrer' className='hover:text-accent transition-colors'>
											{exp.company}
										</a>
									) : (
										exp.company
									)}
									<span className='text-foreground/30 mx-2'>·</span>
									{exp.location}
								</p>

								<ul className='mt-4 space-y-2'>
									{exp.description.map((line, i) => (
										<li key={i} className='font-body text-foreground/60 flex gap-3 text-sm leading-relaxed'>
											<span className='bg-accent mt-2 block h-1 w-1 shrink-0 rounded-full' aria-hidden='true' />
											{line}
										</li>
									))}
								</ul>

								<div className='mt-4 flex flex-wrap gap-2'>
									{exp.stack.map((tech) => (
										<Badge key={tech} className='border-foreground/10 text-foreground/50 border'>
											{tech}
										</Badge>
									))}
								</div>
							</div>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
