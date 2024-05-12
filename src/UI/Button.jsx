import styled from 'styled-components';

const ButtonElement = styled.button`
	font: inherit;
	font-size: 1.6rem;
	border: none;
	border-radius: var(--radius-sm);
	padding: 1.2rem 2.4rem;
	cursor: pointer;
`;

export default function Button({ children, className, $type }) {
	return (
		<ButtonElement className={className} $type={$type}>
			{children}
		</ButtonElement>
	);
}
