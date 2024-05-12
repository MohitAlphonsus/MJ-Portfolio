import styled from 'styled-components';

export const HeadingSecondary = styled.h2`
	font-size: 2.8rem;
	background: var(--gradient);
	background-clip: text;
	color: transparent;

	@media (min-width: 37.5em) {
		font-size: 4.2rem;
		/* width: 13ch; */
	}
`;

export const SubHeading = styled.span`
	background-color: var(--dark);
	border: 1px solid var(--border-color);
	padding: 1rem 2rem;
	border-radius: var(--radius-xs);
	font-size: 1.4rem;
	text-transform: uppercase;
	letter-spacing: 1px;
`;
