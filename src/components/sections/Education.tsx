import type { JSX } from 'react';
import type { Education } from '@/types';
import { formatDate } from '@/lib/utils';
import { SectionHeader } from '@/components/ui/SectionHeader';

interface EducationProps {
	education: Education[];
}

export function EducationSection({ education }: EducationProps): JSX.Element {
	return (
		<section id='education' aria-label='Education' className='py-24 md:py-32'>
			<div className='mx-auto max-w-6xl px-6'>
				<SectionHeader number='05' label='Education' heading='Academic background.' />

				<ol className='space-y-10'>
					{education.map((entry) => (
						<li key={entry.id} className='grid gap-4 sm:grid-cols-[200px_1fr]'>
							<div className='font-body text-foreground/40 pt-1 text-sm'>
								<time dateTime={entry.startDate}>{formatDate(entry.startDate)}</time>
								<span className='mx-1'>—</span>
								{entry.current ? <span className='text-accent font-medium'>Present</span> : <time dateTime={entry.endDate}>{formatDate(entry.endDate ?? '')}</time>}
							</div>

							<div>
								<h3 className='font-display text-xl font-semibold'>{entry.degree}</h3>
								<p className='font-body text-foreground/55 mt-0.5 text-sm'>
									{entry.institution}
									{entry.mode && (
										<>
											<span className='text-foreground/30 mx-2'>·</span>
											{entry.mode}
										</>
									)}
								</p>
								{entry.note && <p className='font-body text-foreground/40 mt-2 text-sm'>{entry.note}</p>}
							</div>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
