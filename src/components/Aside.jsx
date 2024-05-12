import styled from 'styled-components';
import { Logo } from '../components';

const AsideWrapper = styled.aside`
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 3rem;
	padding: 2rem;
	border-radius: var(--radius-lg);
	border: 1px solid var(--border-color);
`;

export default function Aside() {
	return (
		<AsideWrapper>
			<Logo />
		</AsideWrapper>
	);
}
