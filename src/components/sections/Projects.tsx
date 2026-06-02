import type { JSX } from 'react';
import { ExternalLink } from 'lucide-react';
import type { Project, ProjectStatus } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { cn } from '@/lib/utils';

const STATUS_STYLES: Record<ProjectStatus, string> = {
	production: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
	development: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
	archived: 'bg-foreground/5 text-foreground/40',
};

const STATUS_LABEL: Record<ProjectStatus, string> = {
	production: 'Production',
	development: 'In Development',
	archived: 'Archived',
};

interface ProjectsProps {
	projects: Project[];
}

export function Projects({ projects }: ProjectsProps): JSX.Element {
	const featured = projects.filter((p) => p.featured);
	const rest = projects.filter((p) => !p.featured);
	const ordered = [...featured, ...rest];

	return (
		<section id='projects' aria-label='Projects' className='py-24 md:py-32'>
			<div className='mx-auto max-w-6xl px-6'>
				<SectionHeader number='03' label='Projects' heading='Things I have shipped.' />

				<div className='grid gap-6 sm:grid-cols-2'>
					{ordered.map((project) => (
						<article key={project.id} className='border-foreground/8 group hover:border-accent/30 flex flex-col rounded-lg border p-6 transition-colors'>
							<div className='mb-4 flex items-start justify-between gap-4'>
								<Badge className={cn('shrink-0', STATUS_STYLES[project.status])}>{STATUS_LABEL[project.status]}</Badge>
								<div className='flex gap-3'>
									{project.githubUrl && (
										<a href={project.githubUrl} target='_blank' rel='noopener noreferrer' aria-label={`${project.name} source code`} className='text-foreground/30 hover:text-foreground transition-colors'>
											<ExternalLink size={15} aria-hidden />
										</a>
									)}
									{project.url && (
										<a href={project.url} target='_blank' rel='noopener noreferrer' aria-label={`${project.name} live site`} className='text-foreground/30 hover:text-accent transition-colors'>
											<ExternalLink size={15} aria-hidden />
										</a>
									)}
								</div>
							</div>

							<h3 className='font-display mb-2 text-lg font-semibold'>{project.name}</h3>
							<p className='font-body text-foreground/55 mb-4 flex-1 text-sm leading-relaxed'>{project.longDescription ?? project.description}</p>

							<div className='flex flex-wrap gap-2'>
								{project.stack.map((tech) => (
									<Badge key={tech} className='border-foreground/10 text-foreground/40 border'>
										{tech}
									</Badge>
								))}
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
