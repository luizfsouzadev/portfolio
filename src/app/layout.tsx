import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
	title: {
		default: 'Luiz Fernando de Souza — Full-Stack Developer',
		template: '%s | Luiz Fernando de Souza',
	},
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
		<html lang='en' suppressHydrationWarning>
			<body className='antialiased'>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
