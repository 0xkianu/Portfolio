import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [
	{
		degree: 'Full Stack Web Development Certificate',
		description: '',
		location: 'Remote',
		logo: Assets.DigitalCrafts,
		name: '',
		organization: 'Digital Crafts',
		period: { from: new Date(2022, 9, 1), to: new Date(2023, 4, 1) },
		shortDescription: '',
		slug: 'digital-crafts-education',
		subjects: ['Nodejs','Reactjs','Expressjs','Reduxjs','HTML','CSS','Bootstrap','Javascript']
	},
	{
		degree: 'Master of Business Administration',
		description: '',
		location: 'Atlanta, GA',
		logo: Assets.GSU,
		name: '',
		organization: 'Georgia State University',
		period: { from: new Date(2009, 8, 1), to: new Date(2011, 12, 1) },
		shortDescription: '',
		slug: 'georgia-state-education',
		subjects: ['Computer Information Systems','Accounting']
	},
	{
		degree: 'Bachelor of Science in Computer Science',
		description: '',
		location: 'Atlanta, GA',
		logo: Assets.GeorgiaTech,
		name: '',
		organization: 'Georgia Institute of Technology',
		period: { from: new Date(1998, 8, 1), to: new Date(2003, 8, 1) },
		shortDescription: '',
		slug: 'georgia-tech-education',
		subjects: ['C', 'Java', 'Computer Architecture', 'Algorithms and Data structures']
	}
];
