import { MY_EDUCATIONS } from './educations.params';
import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams,
	type EducationPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'Thomas Lee Portfolio';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills',
	Education: 'Education'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'Thomas',
	lastName: 'Lee',
	description:
		'Prospective software engineer with 15+ years of experience in technology as a Database Administrator and Junior Full-Stack Developer. I am a dedicated problem solver and collaborative worker, with experience supporting enterprise-level projects.  Seeking a Back-end or Full-stack developer role where I can apply my knowledge and skill working with modern frameworks and programming languages.',
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/0xkianu/' },
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/in/thomas-lee-43483829/'
		},
		{
			platform: Platform.Email,
			link: 'tulee@tutanota.com'
		},
		{
			platform: Platform.Facebook,
			link: 'https://www.facebook.com/thomas.lee.568847'
		}
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	item: 'https://thomasulee.netlify.app/assets/tlee-resume.pdf/'
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};

export const EDUCATION: EducationPageParams = {
	items: MY_EDUCATIONS,
	title: 'Education'
};
