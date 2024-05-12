import styled from 'styled-components';
import { Aside, Main } from './components';

const PortfolioContainer = styled.div`
	height: 100dvh;
	padding: 1rem;
	display: grid;
	grid-template-columns: 1fr;
	gap: 1rem;

	@media (min-width: 64em) {
		grid-template-columns: 0.25fr 0.75fr;
	}
`;

export default function App() {
	return (
		<PortfolioContainer>
			<Aside />
			<Main />
		</PortfolioContainer>
	);
}
