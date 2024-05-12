import styled from 'styled-components';
import { Aside, Main } from './components';

const PortfolioContainer = styled.div`
	padding: 1rem;
	display: grid;
	grid-template-columns: 1fr;
	gap: 6rem;

	@media (min-width: 64em) {
		height: 100dvh;
		grid-template-columns: 0.25fr 0.75fr;
		gap: 2rem;
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
