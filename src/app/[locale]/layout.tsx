import type { ReactElement } from 'react';
import type { Metadata } from 'next';
import { Syne, Outfit } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { cn } from '@/lib/utils';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import '../globals.css';

const syne = Syne({ subsets: ['latin'], variable: '--font-syne', display: 'swap' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' });

// Synchronous blocking script — sets .dark/.light on <html> before first paint.
const themeScript = `(function(){try{var s=localStorage.getItem('theme');if(s==='dark'){document.documentElement.classList.add('dark')}else if(s==='light'){document.documentElement.classList.add('light')}else if(!s&&window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.add('dark')}}catch(e){}})()`;

interface LayoutProps {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}

export function generateStaticParams(): { locale: string }[] {
	return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: 'meta' });
	return {
		title: { default: t('title'), template: '%s | Luiz Fernando de Souza' },
		description: t('description'),
		keywords: ['Full-Stack Developer', 'Front-End Developer', 'Angular', 'React', 'TypeScript', 'Next.js', 'Brazil'],
		authors: [{ name: 'Luiz Fernando de Souza', url: 'https://luiz.craton.com.br' }],
		creator: 'Luiz Fernando de Souza',
		openGraph: {
			type: 'website',
			locale: locale === 'pt' ? 'pt_BR' : 'en_US',
			url: 'https://luiz.craton.com.br',
			title: t('title'),
			description: t('description'),
			siteName: 'Luiz Fernando de Souza',
		},
		robots: { index: true, follow: true },
	};
}

export default async function LocaleLayout({ children, params }: LayoutProps): Promise<ReactElement> {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) notFound();
	setRequestLocale(locale);
	const messages = await getMessages();

	return (
		<html lang={locale} className={cn(syne.variable, outfit.variable)} suppressHydrationWarning>
			<body className='antialiased'>
				<script dangerouslySetInnerHTML={{ __html: themeScript }} />
				<NextIntlClientProvider messages={messages}>
					<ThemeProvider>
						<Header />
						<main id='main-content' tabIndex={-1}>
							{children}
						</main>
						<Footer />
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
