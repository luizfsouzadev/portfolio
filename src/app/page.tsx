import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Contact } from '@/components/sections/Contact';
import { projects } from '@/data/projects';
import { skills } from '@/data/skills';
import { experiences } from '@/data/experience';

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Experience experiences={experiences} />
			<Projects projects={projects} />
			<Skills skills={skills} />
			<Contact />
		</>
	);
}
