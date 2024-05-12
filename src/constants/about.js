import {
	FaHtml5,
	FaCss3Alt,
	FaSass,
	FaFigma,
	FaReact,
	FaGitAlt,
	FaGithub,
} from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io5';

export const about = {
	education: [
		{
			id: 1,
			timeline: '2013-2018',
			stream: 'Computer Science & Engineering',
			place: 'Wardha, Nagpur University',
		},
		{
			id: 2,
			timeline: '2011-2013',
			stream: 'HSC science',
			place: 'Sangamner, Dnyanmata Vidyalaya, Pune University',
		},
	],
	tools: [
		{ id: 1, icon: FaHtml5, name: 'HTML5' },
		{ id: 2, icon: FaCss3Alt, name: 'CSS3' },
		{ id: 3, icon: IoLogoJavascript, name: 'JavaScript' },
		{ id: 4, icon: FaReact, name: 'React' },
		{ id: 5, icon: FaSass, name: 'Sass' },
		{ id: 6, icon: FaFigma, name: 'Figma' },
		{ id: 7, icon: FaGitAlt, name: 'Git' },
		{ id: 8, icon: FaGithub, name: 'Github' },
	],
	skills: [
		{ id: 1, name: 'Visual-studio-code' },
		{ id: 2, name: 'styled-components' },
		{ id: 3, name: 'tailwind' },
		{ id: 4, name: 'bootstrap' },
		{ id: 5, name: 'redux' },
		{ id: 6, name: 'windows' },
	],
};
