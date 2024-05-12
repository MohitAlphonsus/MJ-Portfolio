import styled from 'styled-components';

const LogoWrapper = styled.div`
	--size: 2rem;
	font-family: var(--font-display);
	font-size: var(--size);
	display: flex;
	align-items: center;
	gap: 1rem;
	letter-spacing: 1px;

	@media (min-width: 64em) {
		//1024px
		--size: 2rem;
	}

	@media (min-width: 80em) {
		//1080px
		--size: 2.2rem;
	}

	.logo-initials {
		background: var(--gradient);
		background-clip: text;
		color: transparent;
		font-weight: 700;
	}

	.logo-divider {
		height: calc(var(--size) + 2.5rem);
		width: 1px;
		rotate: 15deg;
		background-color: var(--border-color);
	}

	.logo-name {
		text-transform: uppercase;
	}
`;

function Logo() {
	return (
		<LogoWrapper>
			<span className="logo-initials">MJ</span>
			<span className="logo-divider"></span>
			<span className="logo-name">Mohit Jadhav</span>
		</LogoWrapper>
	);
}

export default Logo;
