'use client';

import { useState } from 'react';
import type { JSX } from 'react';
import { Copy, Check } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function Contact(): JSX.Element {
	const [copied, setCopied] = useState(false);

	const copyEmail = async (): Promise<void> => {
		await navigator.clipboard.writeText(siteConfig.email);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<section id='contact' aria-label='Contact' className='py-24 md:py-32'>
			<div className='mx-auto max-w-6xl px-6'>
				<SectionHeader number='06' label='Contact' heading="Let's work together." subheading='Open to freelance projects, front-end roles, internship opportunities with international teams, and interesting collaborations.' />

				<div className='max-w-lg space-y-8'>
					<div>
						<p className='text-foreground/40 mb-2 font-mono text-xs tracking-widest uppercase'>Email</p>
						<div className='flex items-center gap-3'>
							<a href={`mailto:${siteConfig.email}`} className='font-body text-foreground hover:text-accent text-lg transition-colors'>
								{siteConfig.email}
							</a>
							<button type='button' onClick={copyEmail} aria-label={copied ? 'Email copied' : 'Copy email address'} className='text-foreground/30 hover:text-foreground rounded p-1 transition-colors'>
								{copied ? <Check size={15} aria-hidden /> : <Copy size={15} aria-hidden />}
							</button>
						</div>
					</div>

					<div>
						<p className='text-foreground/40 mb-3 font-mono text-xs tracking-widest uppercase'>Elsewhere</p>
						<div className='flex gap-6'>
							<a href={siteConfig.github} target='_blank' rel='noopener noreferrer' className='font-body text-foreground/60 hover:text-accent text-sm transition-colors'>
								GitHub
							</a>
							<a href={siteConfig.linkedin} target='_blank' rel='noopener noreferrer' className='font-body text-foreground/60 hover:text-accent text-sm transition-colors'>
								LinkedIn
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
