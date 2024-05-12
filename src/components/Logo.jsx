import styled from 'styled-components';
const LogoWrapper = styled.div`
	--size: 3rem;
	font-family: var(--font-display);

	.logo-initials {
		font-size: var(--size);
	}

	.logo-divider {
	}

	.logo-name {
	}
`;

function Logo() {
	return (
		<LogoWrapper>
			<span className="logo-initials">MJ</span>
			<span className="logo-divider">/</span>
			<span className="logo-name">Mohit Jadhav</span>
		</LogoWrapper>
	);
}

export default Logo;
