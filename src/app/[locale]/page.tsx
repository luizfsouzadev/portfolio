import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { EducationSection } from '@/components/sections/Education';
import { Contact } from '@/components/sections/Contact';
import { experiences } from '@/data/experience';
import { projects } from '@/data/projects';
import { skills } from '@/data/skills';
import { education } from '@/data/education';

interface PageProps {
	params: Promise<{ locale: string }>;
}

export default async function Home({ params }: PageProps) {
	const { locale } = await params;
	setRequestLocale(locale);

	return (
		<>
			<Hero />
			<About />
			<Experience experiences={experiences} />
			<Projects projects={projects} />
			<Skills skills={skills} />
			<EducationSection education={education} />
			<Contact />
		</>
	);
}
