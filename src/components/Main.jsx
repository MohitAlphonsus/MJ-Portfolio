import styled from 'styled-components';
import { Hero, Projects } from '../components';

const MainWrapper = styled.main`
	padding: 2rem;
	overflow-y: scroll;
	scroll-behavior: smooth;
	scrollbar-width: none;
`;

export default function Main() {
	return (
		<MainWrapper>
			<Hero />
			<Projects />
		</MainWrapper>
	);
}
