'use client';

import { useState } from 'react';
import type { JSX } from 'react';
import { Copy, Check } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/data/site';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function Contact(): JSX.Element {
	const t = useTranslations('contact');
	const [copied, setCopied] = useState(false);

	const copyEmail = async (): Promise<void> => {
		await navigator.clipboard.writeText(siteConfig.email);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<section id='contact' aria-label={t('sectionLabel')} className='py-24 md:py-32'>
			<div className='mx-auto max-w-6xl px-6'>
				<SectionHeader number='06' label={t('sectionLabel')} heading={t('heading')} subheading={t('subheading')} />

				<div className='max-w-lg space-y-8'>
					<div>
						<p className='text-foreground/40 mb-2 font-mono text-xs tracking-widest uppercase'>{t('emailLabel')}</p>
						<div className='flex items-center gap-3'>
							<a href={`mailto:${siteConfig.email}`} className='font-body text-foreground hover:text-accent text-lg transition-colors'>
								{siteConfig.email}
							</a>
							<button type='button' onClick={copyEmail} aria-label={copied ? t('emailCopied') : t('copyEmail')} className='text-foreground/30 hover:text-foreground rounded p-1 transition-colors'>
								{copied ? <Check size={15} aria-hidden /> : <Copy size={15} aria-hidden />}
							</button>
						</div>
					</div>

					<div>
						<p className='text-foreground/40 mb-3 font-mono text-xs tracking-widest uppercase'>{t('elsewhereLabel')}</p>
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
