import styled from 'styled-components';

export default function Footer() {
	return (
		<FooterSection>
			<FooterContainer>
				<span>mohitdalphonso@gmail.com</span>
				<span>+91 1234567890</span>
				<span>Shrirampur, Ahmednagar</span>
			</FooterContainer>
			<p>Mohit.Jadhav&copy;{new Date().getFullYear()}</p>
		</FooterSection>
	);
}

const FooterSection = styled.footer`
	font-size: 1.4rem;

	p {
		color: #888;
		padding-block: 2rem;
		text-align: center;
	}
`;

const FooterContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	padding-block: 2rem;
	border-bottom: 1px solid var(--border-color);
	font-size: 1.6rem;

	/* @media (min-width: 36.25em) {
		justify-content: space-between;
	} */
`;
