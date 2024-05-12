import styled, { css } from 'styled-components';

const ButtonElement = styled.button`
	&,
	&:link,
	&:visited {
		display: inline-block;
		position: relative;
		font: inherit;
		font-size: 2rem;
		border: none;
		border-radius: var(--radius-sm);
		padding: 1.5rem 3rem;
		cursor: pointer;
		text-align: center;
		transition: all 0.2s ease-in;

		background-color: var(--dark);
		color: var(--light);
		${props =>
			props.$accent &&
			css`
				background-color: var(--accent-1);
				color: var(--dark);
			`}
	}
`;

export default function Button({
	as,
	href,
	children,
	target,
	className,
	$accent,
}) {
	return (
		<ButtonElement
			as={as}
			href={href}
			target={target}
			className={className}
			$accent={$accent}
		>
			{children}
		</ButtonElement>
	);
}
