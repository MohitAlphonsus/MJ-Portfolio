import project1 from '../assets/project-1.png';
import project2 from '../assets/project-2.png';
import project3 from '../assets/project-3.png';

export const projects = [
	{
		id: 'p1',
		imgSrc: project1,
		projectName: 'Flavorscape',
		desc: 'A restaurant website, where you can feast on your favourite food.',
		tools: [
			{ id: 't1', toolName: 'React' },
			{ id: 't2', toolName: 'Styled-Components' },
			{ id: 't3', toolName: 'React-Icons' },
			{ id: 't4', toolName: 'Swiper' },
		],
	},
	{
		id: 'p2',
		imgSrc: project2,
		projectName: 'Furninest',
		desc: 'Furniture store with browser storage and cart functionality',
		tools: [
			{ id: 't1', toolName: 'React' },
			{ id: 't2', toolName: 'CSS-Modules' },
			{ id: 't3', toolName: 'React-Icons' },
			{ id: 't4', toolName: 'React-Router-Dom' },
			{ id: 't5', toolName: 'Browser-Storage' },
		],
	},
	{
		id: 'p3',
		imgSrc: project3,
		projectName: 'QuizzyQ',
		desc: 'Quizz app with different quizz options with timer functionality',
		tools: [
			{ id: 't1', toolName: 'React' },
			{ id: 't2', toolName: 'Styled-Components' },
			{ id: 't3', toolName: 'React-Icons' },
			{ id: 't4', toolName: 'React-Router-Dom' },
		],
	},
];
