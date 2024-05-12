import project1 from '../assets/project-1.png';
import project2 from '../assets/project-2.png';
import project3 from '../assets/project-3.png';

export const projects = [
	{
		id: 'project$1',
		colorId: 1,
		imgSrc: project1,
		projectName: 'Flavorscape Resto Website',
		desc: 'A restaurant website, where you can feast on your favourite food.',
		link: 'https://flavorscape-restaurant.netlify.app',
		tools: [
			{ id: 't1', toolName: 'React' },
			{ id: 't2', toolName: 'Styled-Components' },
			{ id: 't3', toolName: 'React-Icons' },
			{ id: 't4', toolName: 'Swiper' },
		],
	},
	{
		id: 'project$2',
		colorId: 2,
		imgSrc: project2,
		projectName: 'Furninest Store Cart Website',
		desc: 'Furniture store with browser storage and cart functionality',
		link: 'https://furninest-store.netlify.app',
		tools: [
			{ id: 't1', toolName: 'React' },
			{ id: 't2', toolName: 'CSS-Modules' },
			{ id: 't3', toolName: 'React-Icons' },
			{ id: 't4', toolName: 'React-Router-Dom' },
			{ id: 't5', toolName: 'Browser-Storage' },
		],
	},
	{
		id: 'project$3',
		colorId: 3,
		imgSrc: project3,
		projectName: 'QuizzyQ Fun Website',
		desc: 'Quizz app with different quizz options with timer functionality',
		link: 'https://quizzyq.netlify.app',
		tools: [
			{ id: 't1', toolName: 'React' },
			{ id: 't2', toolName: 'Styled-Components' },
			{ id: 't3', toolName: 'React-Icons' },
			{ id: 't4', toolName: 'React-Router-Dom' },
		],
	},
];
