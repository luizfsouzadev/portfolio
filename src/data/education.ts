import type { Education } from '@/types';

export const education: Education[] = [
	{
		id: 'cruzeiro-do-sul',
		degree: 'Bachelor of Science in Computer Science',
		institution: 'Universidade Cruzeiro do Sul',
		mode: 'Distance learning (EAD)',
		startDate: '2024-01',
		current: true,
		note: 'Currently in 5th semester · Expected graduation Dec 2027',
	},
	{
		id: 'ifsuldeminas',
		degree: 'Technical Degree in Informatics (Integrated High School)',
		institution: 'IFSULDEMINAS',
		startDate: '2017-01',
		endDate: '2019-12',
		current: false,
		note: 'Academic Monitor in Physics · Programming competitions 2018–2019',
	},
];
