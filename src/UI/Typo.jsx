import styled from 'styled-components';
import { FaHand, FaStar } from 'react-icons/fa6';

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

export const HeadingTertiary = styled.h3`
	font-size: 2rem;
	font-weight: 400;
	letter-spacing: 1px;

	@media (min-width: 37.5em) {
		font-size: 3.2rem;
	}
`;

const SubHeadingStyle = styled.span`
	background-color: var(--dark);
	border: 1px solid var(--border-color);
	padding: 1rem 2rem;
	border-radius: var(--radius-xs);
	font-size: 1.4rem;
	text-transform: uppercase;
	letter-spacing: 1px;
	display: flex;
	align-items: center;
	gap: 1rem;
`;

export function SubHeading({ children, greet }) {
	return (
		<SubHeadingStyle className="subheading-icon">
			{greet ? <FaHand /> : <FaStar />}
			<span>{children}</span>
		</SubHeadingStyle>
	);
}
