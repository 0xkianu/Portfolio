import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'tech-joy-software',
		company: 'Tech Joy Software',
		description: 'Full stack developer on a number of projects, designing and delivering interactive web applications using a variety of technology stacks with languages and frameworks such as Django / Python, Next.js, React, Node.js and Typescript in a CI/CD workflow.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Remote',
		period: { from: new Date(2023, 5, 1) },
		skills: getSkills('ts', 'js', 'css','html','python','reactjs','django','nextjs','postgresql','tailwind'),
		name: 'Junior Developer',
		color: 'gray',
		links: [],
		logo: Assets.Techjoy,
		shortDescription: ''
	},
	{
		slug: 'riskonnect',
		company: 'Riskonnect, Inc.',
		description: 'Senior Database Administrator for the leading Risk management software solution provider, with over 2,000 organizations, representing a wide range of industries and spanning six continents',
		contract: ContractType.FullTime,
		type: 'Database Administration',
		location: 'Atlanta, GA',
		period: { from: new Date(2024, 0, 1) },
		skills: getSkills('oracle','postgresql'),
		name: 'Senior Database Administrator',
		color: 'gray',
		links: [],
		logo: Assets.Riskonnect,
		shortDescription: ''
	},
	{
		slug: 'ventiv-technology',
		company: 'Ventiv Technology',
		description: 'Lead Oracle and Postgresql database administrator for a global Risk management software solution provider.',
		contract: ContractType.FullTime,
		type: 'Database Administration',
		location: 'Atlanta, GA',
		period: { from: new Date(2015, 0, 1), to: new Date(2023, 11, 31) },
		skills: getSkills('oracle','postgresql'),
		name: 'Senior Database Administrator',
		color: 'gray',
		links: [],
		logo: Assets.Ventiv,
		shortDescription: ''
	}
];

export default MY_EXPERIENCES;
