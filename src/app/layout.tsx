import type { Metadata } from 'next';
import { Syne, Outfit } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const syne = Syne({ subsets: ['latin'], variable: '--font-syne', display: 'swap' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' });

// Inline script — applies .dark/.light before hydration to prevent FOUC.
const themeScript = `(function(){try{var s=localStorage.getItem('theme');if(s==='dark'){document.documentElement.classList.add('dark')}else if(s==='light'){document.documentElement.classList.add('light')}else if(!s&&window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.add('dark')}}catch(e){}})()`;

export const metadata: Metadata = {
	title: { default: 'Luiz Fernando de Souza — Full-Stack Developer', template: '%s | Luiz Fernando de Souza' },
	description: 'Full-Stack Developer specializing in front-end with 2+ years of professional experience. Building production-grade applications with Angular, React, TypeScript, and more.',
	keywords: ['Full-Stack Developer', 'Front-End Developer', 'Angular', 'React', 'TypeScript', 'Next.js', 'Brazil'],
	authors: [{ name: 'Luiz Fernando de Souza', url: 'https://luiz.craton.com.br' }],
	creator: 'Luiz Fernando de Souza',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://luiz.craton.com.br',
		title: 'Luiz Fernando de Souza — Full-Stack Developer',
		description: 'Full-Stack Developer specializing in front-end. Building production-grade applications.',
		siteName: 'Luiz Fernando de Souza',
	},
	robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en' className={cn(syne.variable, outfit.variable)} suppressHydrationWarning>
			<head>
				{/* FOUC prevention — must run before first paint */}
				<script dangerouslySetInnerHTML={{ __html: themeScript }} />
			</head>
			<body className='antialiased'>
				<ThemeProvider>
					<Header />
					{/* tabIndex={-1} allows the skip-link to programmatically focus this element */}
					<main id='main-content' tabIndex={-1}>
						{children}
					</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
