import styled from 'styled-components';
import { Logo, Button } from '../components';
import profile from '../assets/profile.jpeg';

import {
	FaLinkedinIn,
	FaXTwitter,
	FaInstagram,
	FaGithub,
} from 'react-icons/fa6';

const socialIcons = [
	{
		id: 1,
		icon: FaLinkedinIn,
		linkTo: 'https://www.linkedin.com/in/mohit-jadhav-575050238/',
	},
	{ id: 2, icon: FaXTwitter, linkTo: '#' },
	{
		id: 3,
		icon: FaInstagram,
		linkTo: 'https://www.instagram.com/mohit_alphonsus/',
	},
	{ id: 4, icon: FaGithub, linkTo: 'https://github.com/MohitAlphonsus' },
];

const RESUME_LINK =
	'https://drive.google.com/file/d/15NfjJnKJkdVR-R_5_pzc-R5svjzkcJJo/view?usp=drive_link';

export default function Aside() {
	return (
		<AsideWrapper>
			<Logo />
			<Profile role="image">&nbsp;</Profile>
			<ProfessionLocation>
				<h4>Profession</h4>
				<span>Frontend Developer</span>
				<h4>Location</h4>
				<span>Shrirampur, Ahmednagar, India</span>
			</ProfessionLocation>
			<Social>
				{socialIcons.map(({ id, icon: Icon, linkTo }) => (
					<a key={id} href={linkTo} target="_blank" className="social-link">
						<Icon className="social-icon" />
					</a>
				))}
			</Social>
			<Button
				as="a"
				className="aside-btn"
				href={RESUME_LINK}
				target="_blank"
				$accent
			>
				Download CV
			</Button>
		</AsideWrapper>
	);
}

const AsideWrapper = styled.aside`
	background-color: var(--dark);
	height: 100%;
	width: minmax(100%, 40rem);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.6rem;
	padding: 2rem;
	border-radius: var(--radius-lg);
	border: 1px solid var(--border-color);

	.aside-btn {
		margin-top: auto;
	}
`;

const Profile = styled.div`
	height: 20rem;
	min-width: 100%;
	border-radius: var(--radius-md);
	background: url(${profile}) no-repeat center center/cover;

	@media (min-width: 21.88em) {
		min-width: 23rem;
	}
`;

const ProfessionLocation = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	h4 {
		font-size: 1.8rem;
		font-weight: 500;
		letter-spacing: 1px;
	}

	h4:nth-last-of-type(1) {
		margin-top: 1rem;
	}

	span {
		font-size: 1.6rem;
		opacity: 0.8;
	}
`;

const Social = styled.div`
	display: flex;
	align-items: center;
	gap: 1.4rem;
	margin-top: 1rem;

	.social-link {
		&:link,
		&:visited {
			color: var(--light);
			height: 5rem;
			width: 5rem;
			/* border: 1px solid var(--border-color); */
			border-radius: 50%;
			display: grid;
			place-content: center;
			background-color: var(--dark);

			box-shadow: 0 0 10rem 0 rgba(255, 255, 255, 0.2);
		}

		&:hover,
		&:active {
			color: #f7efe4;

			box-shadow: 0 0 1rem 0 rgba(247, 239, 228, 0.6);
		}
	}

	.social-icon {
		font-size: 1.8rem;
	}
`;
