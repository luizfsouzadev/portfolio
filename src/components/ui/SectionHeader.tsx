import type { JSX } from 'react';

interface SectionHeaderProps {
	number: string;
	label: string;
	heading: string;
	subheading?: string;
}

export function SectionHeader({ number, label, heading, subheading }: SectionHeaderProps): JSX.Element {
	return (
		<div className='mb-16'>
			<p className='text-accent mb-3 font-mono text-xs font-semibold tracking-[0.2em] uppercase'>
				{number} / {label}
			</p>
			<h2 className='font-display text-4xl font-bold tracking-tight sm:text-5xl'>{heading}</h2>
			{subheading && <p className='font-body text-foreground/50 mt-4 max-w-xl text-lg'>{subheading}</p>}
		</div>
	);
}
