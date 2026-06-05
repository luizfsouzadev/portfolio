import type { JSX } from 'react';
import { getTranslations } from 'next-intl/server';
import type { Education } from '@/types';
import { formatDate } from '@/lib/utils';
import { SectionHeader } from '@/components/ui/SectionHeader';

interface EducationProps {
	education: Education[];
}

interface EducationMessage {
	degree: string;
	mode?: string;
	note?: string;
}

export async function EducationSection({ education }: EducationProps): Promise<JSX.Element> {
	const t = await getTranslations('education');

	return (
		<section id='education' aria-label={t('sectionLabel')} className='py-24 md:py-32'>
			<div className='mx-auto max-w-6xl px-6'>
				<SectionHeader number='05' label={t('sectionLabel')} heading={t('heading')} />

				<ol className='space-y-10'>
					{education.map((entry) => {
						const msg = t.raw(entry.id) as EducationMessage;
						return (
							<li key={entry.id} className='grid gap-4 sm:grid-cols-[200px_1fr]'>
								<div className='font-body text-foreground/40 pt-1 text-sm'>
									<time dateTime={entry.startDate}>{formatDate(entry.startDate)}</time>
									<span className='mx-1'>—</span>
									{entry.current ? <span className='text-accent font-medium'>{t('present')}</span> : <time dateTime={entry.endDate}>{formatDate(entry.endDate ?? '')}</time>}
								</div>

								<div>
									<h3 className='font-display text-xl font-semibold'>{msg.degree}</h3>
									<p className='font-body text-foreground/55 mt-0.5 text-sm'>
										{entry.institution}
										{msg.mode && (
											<>
												<span className='text-foreground/30 mx-2'>·</span>
												{msg.mode}
											</>
										)}
									</p>
									{msg.note && <p className='font-body text-foreground/40 mt-2 text-sm'>{msg.note}</p>}
								</div>
							</li>
						);
					})}
				</ol>
			</div>
		</section>
	);
}
