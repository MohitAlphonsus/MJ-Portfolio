import styled from 'styled-components';
import { FaArrowDown } from 'react-icons/fa6';
import { SubHeading } from '../UI/Typo';
import Button from './Button';

export default function Hero() {
	const textToRotate = 'scroll for more . scroll for more .';
	return (
		<HeroSection>
			<SubHeading>
				<span className="subheading-icon">✋🏻</span> Hello there
			</SubHeading>
			<h1>I'm Mohit Jadhav, A Frontend Web Developer.</h1>
			<Button className="hero-btn" $accent>
				My Projects
			</Button>
			<Circle>
				<FaArrowDown className="circle-icon" />
				<div className="circle-text">
					<p>
						{textToRotate.split('').map((char, i) => (
							<span
								key={Math.random().toString()}
								style={{
									transform: `rotate(${i * 10.1}deg)`,
								}}
							>
								{char}
							</span>
						))}
					</p>
				</div>
			</Circle>
		</HeroSection>
	);
}

const HeroSection = styled.section`
	margin-top: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 2rem;

	/* .subheading-icon {
		display: inline-block;
		transform-origin: center;
		animation: waveHand 1s alternate infinite;
	} */

	h1 {
		font-size: 3.6rem;
		background: var(--gradient);
		background-clip: text;
		color: transparent;

		@media (min-width: 37.5em) {
			font-size: 6rem;
			width: 14ch;
		}
	}

	.hero-btn {
		margin-top: 1rem;
	}
`;

const Circle = styled.div`
	position: relative;
	height: 12rem;
	width: 12rem;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 2rem;

	.circle-icon {
		font-size: 1.8rem;
	}

	.circle-text {
		position: absolute;
		width: 100%;
		height: 100%;
		font-size: 1.4rem;
		font-weight: 500;
		text-transform: uppercase;
		animation: rotateText 10s linear infinite;

		span {
			font-size: 1rem;
			position: absolute;
			left: 50%;
			transform-origin: 0 6rem;
		}

		@keyframes rotateText {
			to {
				transform: rotate(360deg);
			}
		}
	}
`;
