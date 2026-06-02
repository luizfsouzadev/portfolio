import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds: readonly string[]): string {
	const [activeSection, setActiveSection] = useState<string>('');

	// Stable string key avoids re-running the effect on referential inequality
	const idsKey = sectionIds.join(',');

	useEffect(() => {
		const observers: IntersectionObserver[] = [];

		sectionIds.forEach((id) => {
			const element = document.getElementById(id);
			if (!element) return;

			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) setActiveSection(id);
				},
				// Active when the section's top 25% is in the viewport
				{ rootMargin: '-20% 0px -75% 0px', threshold: 0 },
			);

			observer.observe(element);
			observers.push(observer);
		});

		return () => observers.forEach((obs) => obs.disconnect());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [idsKey]);

	return activeSection;
}
