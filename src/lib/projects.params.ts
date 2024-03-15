import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';
import { base } from '$app/paths';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'discord-chat-bot',
		color: '#5e95e3',
		description:
			'An application which scrapes data from all channels in a Discord server, uploads the data into a Chroma DB Vector database and creates a pipeline to apply Retrieval Augmented Generation (RAG) on a Mistrel 7B large language model, enabling the model to answer questions related to the Discord server.',
		shortDescription:
			'A Discord chat bot using Mistrel Large Language Model.',
		links: [{ to: 'https://github.com//Dutra-Apex//llm-joc', label: 'GitHub' }],
		logo: Assets.Python,
		name: 'Discord Chat Bot',
		period: {
			from: new Date('01-Jan-2024')
		},
		skills: getSkills('python'),
		type: 'Data science application',
	},
	{
		slug: 'support-local',
		color: '#5e95e3',
		description:
			'A project to redesign and overhaul Support Local - A web ecosystem where local business owners can promote their businesses or charities, and consumers can search for deals and support non-profits',
		shortDescription:
			'A web ecosystem where local business owners can promote their businesses or charities, and consumers can search for deals and support non-profits',
		links: [{ to: 'https://xd.adobe.com//view//42f14507-e4fc-4890-abe6-e4ae32f1e2fa-17a2', label: 'Design' }],
		logo: Assets.NextJs,
		name: 'Support Local',
		period: {
			from: new Date('01-Nov-2023')
		},
		skills: getSkills('nextjs', 'ts', 'postgresql', 'html', 'css','tailwind'),
		type: 'Website',
		screenshots: [
			{
				label: 'screen 1',
				src: `${base}/images/support-local1.jpg`
			},
			{
				label: 'screen 2',
				src: `${base}/images/support-local2.jpg`
			},
			{
				label: 'screen 3',
				src: `${base}/images/support-local3.jpg`
			},
			{
				label: 'screen 4',
				src: `${base}/images/support-local4.jpg`
			},
			{
				label: 'screen 5',
				src: `${base}/images/support-local5.jpg`
			},
			{
				label: 'screen 6',
				src: `${base}/images/support-local6.jpg`
			}
		]
	},
	{
		slug: 'offroad-fun-finder',
		color: '#5e95e3',
		description:
			'An ios / android mobile and web application that allows users to discover off-road tracks, shops, trainers and events.',
		shortDescription:
		'An ios / android mobile and web application that allows users to discover off-road tracks, shops, trainers and events.',
		links: [{ to: 'https://offroadfunfinder.com/', label: 'Website' }],
		logo: Assets.ReactJs,
		name: 'Off Road Fun Finder',
		period: {
			from: new Date('01-Sep-2023'), to: new Date('01-Nov-2023')
		},
		skills: getSkills('reactjs', 'ts', 'django','html','css'),
		type: 'Website',
		screenshots: [
			{
				label: 'screen 1',
				src: `${base}/images/ORFF1.jpg`
			},
			{
				label: 'screen 2',
				src: `${base}/images/ORFF2.jpg`
			},
			{
				label: 'screen 3',
				src: `${base}/images/ORFF3.jpg`
			},
			{
				label: 'screen 4',
				src: `${base}/images/ORFF4.jpg`
			},
			{
				label: 'screen 5',
				src: `${base}/images/ORFF5.jpg`
			}
		]
	},
];

export default MY_PROJECTS;
