import type { JSX } from 'react';
import { getTranslations } from 'next-intl/server';
import { cn } from '@/lib/utils';
import { heroContent } from '@/data/hero';
import type { SocialIcon } from '@/types';

// lucide-react v1.x removed brand icons — inline SVGs used for GitHub and LinkedIn
function SocialSvg({ icon }: { icon: SocialIcon }): JSX.Element {
	if (icon === 'github') {
		return (
			<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
				<path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z' />
			</svg>
		);
	}
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
			<path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
		</svg>
	);
}

const ANIM: Record<string, string> = {
	greeting: 'anim-delay-0',
	name: 'anim-delay-1',
	title: 'anim-delay-2',
	bio: 'anim-delay-3',
	ctas: 'anim-delay-4',
	socials: 'anim-delay-5',
};

export async function Hero(): Promise<JSX.Element> {
	const t = await getTranslations('hero');
	const { ctas, socials } = heroContent;

	return (
		<section id='hero' aria-label='Introduction' className='relative flex min-h-screen items-center overflow-hidden'>
			<div className='hero-grid text-foreground absolute inset-0 -z-10' aria-hidden='true' />
			<div className='bg-radial-vignette absolute inset-0 -z-10' aria-hidden='true' />

			<div className='mx-auto w-full max-w-6xl px-6 pt-[var(--header-height)] pb-24'>
				<div className='max-w-3xl'>
					<p className={cn('animate-fade-up font-body text-accent mb-5 inline-flex items-center gap-3 text-sm font-medium tracking-widest uppercase', ANIM.greeting)}>
						<span className='bg-accent block h-px w-8' aria-hidden='true' />
						{t('greeting')}
					</p>

					<h1 className={cn('animate-fade-up font-display mb-6 text-5xl leading-tight font-bold tracking-tight sm:text-7xl lg:text-8xl', ANIM.name)}>
						Luiz Fernando
						<br />
						<span className='text-accent/75'>de Souza</span>
					</h1>

					<p className={cn('animate-fade-up font-body text-foreground/60 mb-6 text-lg font-medium sm:text-xl', ANIM.title)}>{t('title')}</p>

					<p className={cn('animate-fade-up font-body text-foreground/50 mb-10 max-w-xl text-base leading-relaxed sm:text-lg', ANIM.bio)}>{t('bio')}</p>

					<div className={cn('animate-fade-up mb-10 flex flex-wrap gap-4', ANIM.ctas)}>
						{ctas.map((cta) => {
							const label = cta.variant === 'primary' ? t('cta.projects') : t('cta.contact');
							if (cta.variant === 'primary') {
								return (
									<a
										key={cta.href}
										href={cta.href}
										className='bg-accent font-body focus-visible:outline-accent inline-flex items-center rounded-md px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2'>
										{label}
									</a>
								);
							}
							return (
								<a
									key={cta.href}
									href={cta.href}
									className='border-foreground/20 font-body text-foreground/70 hover:border-accent hover:text-accent focus-visible:outline-accent inline-flex items-center rounded-md border px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2'>
									{label}
								</a>
							);
						})}
					</div>

					<div className={cn('animate-fade-up flex items-center gap-5', ANIM.socials)}>
						{socials.map((social) => (
							<a key={social.href} href={social.href} target='_blank' rel='noopener noreferrer' aria-label={t(`social.${social.icon}`)} className='text-foreground/40 hover:text-accent transition-colors'>
								<SocialSvg icon={social.icon} />
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
