import type { JSX } from 'react';
import { getTranslations } from 'next-intl/server';
import { siteConfig } from '@/data/site';

export async function Footer(): Promise<JSX.Element> {
	const t = await getTranslations('footer');
	const year = new Date().getFullYear();

	return (
		<footer role='contentinfo' className='border-foreground/5 border-t py-8'>
			<div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row'>
				<p className='font-body text-foreground/30 text-sm'>&copy; {year} Luiz Fernando de Souza</p>

				<div className='flex items-center gap-6'>
					<a href={siteConfig.github} target='_blank' rel='noopener noreferrer' className='font-body text-foreground/30 hover:text-foreground text-sm transition-colors'>
						GitHub
					</a>
					<a href={siteConfig.linkedin} target='_blank' rel='noopener noreferrer' className='font-body text-foreground/30 hover:text-foreground text-sm transition-colors'>
						LinkedIn
					</a>
					<a href='#hero' className='font-body text-foreground/30 hover:text-accent text-sm transition-colors'>
						{t('backToTop')}
					</a>
				</div>
			</div>
		</footer>
	);
}
