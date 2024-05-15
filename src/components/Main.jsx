import styled from 'styled-components';
import { Hero, Projects, About, Footer } from '../components';

const MainWrapper = styled.main`
	overflow-y: scroll;
	scroll-behavior: smooth;
	scrollbar-width: none;
`;

export default function Main() {
	return (
		<MainWrapper>
			<Hero />
			<Projects />
			<About />
			<Footer />
		</MainWrapper>
	);
}
