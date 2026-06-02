import { useState, useEffect } from 'react';

/**
 * Tracks which section id is currently visible in the viewport.
 * Uses IntersectionObserver with a top-biased rootMargin so the active
 * section updates as the user scrolls down the page.
 *
 * Must only be used inside a 'use client' component.
 */
export function useActiveSection(sectionIds: readonly string[]): string {
	const [activeSection, setActiveSection] = useState<string>('');

	// Join ids into a stable string to avoid re-running the effect when
	// the caller passes a new array reference with the same contents.
	const idsKey = sectionIds.join(',');

	useEffect(() => {
		const observers: IntersectionObserver[] = [];

		sectionIds.forEach((id) => {
			const element = document.getElementById(id);
			if (!element) return;

			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						setActiveSection(id);
					}
				},
				// Section is "active" when its top portion is in the viewport's
				// upper 25% (rootMargin clips 20% from top, 75% from bottom).
				{ rootMargin: '-20% 0px -75% 0px', threshold: 0 },
			);

			observer.observe(element);
			observers.push(observer);
		});

		return () => {
			observers.forEach((obs) => obs.disconnect());
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [idsKey]);

	return activeSection;
}
