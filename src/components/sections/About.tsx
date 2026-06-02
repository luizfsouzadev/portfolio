import type { JSX } from 'react';
import { aboutContent } from '@/data/about';
import { languages } from '@/data/languages';
import { SectionHeader } from '@/components/ui/SectionHeader';
import type { AboutHighlight } from '@/types';

export function About(): JSX.Element {
	const { heading, paragraphs, highlights } = aboutContent;

	return (
		<section id='about' aria-label='About me' className='py-24 md:py-32'>
			<div className='mx-auto max-w-6xl px-6'>
				<SectionHeader number='01' label='About' heading={heading} />

				<div className='grid gap-16 lg:grid-cols-3'>
					<div className='space-y-5 lg:col-span-2'>
						{paragraphs.map((p, i) => (
							<p key={i} className='font-body text-foreground/70 text-base leading-relaxed sm:text-lg'>
								{p}
							</p>
						))}

						<div className='pt-2'>
							<p className='text-foreground/40 mb-3 font-mono text-xs font-semibold tracking-widest uppercase'>Languages</p>
							<ul className='space-y-1.5'>
								{languages.map((lang) => (
									<li key={lang.name} className='font-body text-foreground/60 flex gap-2 text-sm'>
										<span className='text-foreground/80 font-medium'>{lang.name}</span>
										<span className='text-foreground/30'>·</span>
										<span>
											{lang.level}
											{lang.detail && <span className='text-foreground/40'> ({lang.detail})</span>}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>

					<aside aria-label='Career highlights' className='grid grid-cols-3 gap-6 self-start lg:grid-cols-1 lg:gap-8'>
						{highlights.map((h: AboutHighlight) => (
							<div key={h.label} className='border-foreground/10 border-l-2 pl-4'>
								<p className='font-display text-accent text-3xl font-bold lg:text-4xl'>{h.value}</p>
								<p className='font-body text-foreground/50 mt-1 text-sm'>{h.label}</p>
							</div>
						))}
					</aside>
				</div>
			</div>
		</section>
	);
}
