import type { JSX, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
	children: ReactNode;
	className?: string;
}

export function Badge({ children, className }: BadgeProps): JSX.Element {
	return <span className={cn('inline-block rounded px-2 py-0.5 font-mono text-xs', className)}>{children}</span>;
}
