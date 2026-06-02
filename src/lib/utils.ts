import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(dateStr: string): string {
	const [year, month] = dateStr.split('-');
	const date = new Date(parseInt(year), parseInt(month) - 1);
	return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export function getDuration(startDate: string, endDate?: string): string {
	const start = new Date(startDate + '-01');
	const end = endDate ? new Date(endDate + '-01') : new Date();

	const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
	const years = Math.floor(months / 12);
	const remainingMonths = months % 12;

	if (years === 0) return `${remainingMonths} mo${remainingMonths !== 1 ? 's' : ''}`;
	if (remainingMonths === 0) return `${years} yr${years !== 1 ? 's' : ''}`;
	return `${years} yr${years !== 1 ? 's' : ''} ${remainingMonths} mo${remainingMonths !== 1 ? 's' : ''}`;
}
