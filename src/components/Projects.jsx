import styled from 'styled-components';
import { HeadingSecondary, SubHeading } from '../UI/Typo';
import { Button } from '../components';
import { projects } from '../constants/projects';

export default function Projects() {
	return (
		<ProjectSection>
			<SubHeading>My Projects</SubHeading>
			<HeadingSecondary>Check out my works</HeadingSecondary>
			<ProjectsContainer>
				{projects.map(
					({ id, colorId, imgSrc, projectName, desc, link, tools }) => (
						<ProjectCard key={id} $image={imgSrc} $id={colorId}>
							<div className="card-side card-side--front">
								<div className="card-image" role="image">
									&nbsp;
								</div>
								<h4>
									<span>{projectName}</span>
								</h4>
								<div className="card-content">
									<p>{desc}</p>
									<div className="skills">
										{tools.map(({ id, toolName }) => (
											<span key={id}>{toolName}</span>
										))}
									</div>
								</div>
							</div>
							<div className="card-side card-side--back">
								<Button as="a" href={link} target="_blank">
									Visit Site &rarr;
								</Button>
							</div>
						</ProjectCard>
					),
				)}
			</ProjectsContainer>
		</ProjectSection>
	);
}

const ProjectSection = styled.section`
	padding-block: 7rem;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	gap: 2rem;
`;

const ProjectsContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: minmax(30rem, 1fr);
	gap: 4rem;
	padding-block: 2rem;

	@media (min-width: 31.25em) {
		padding-inline: 6rem;
	}

	@media (min-width: 40em) {
		grid-template-columns: repeat(2, minmax(30rem, 25rem));
		padding-inline: 0;
	}

	@media (min-width: 64em) {
		grid-template-columns: repeat(2, minmax(30rem, 25rem));
		gap: 1rem;
	}

	@media (min-width: 81.25em) {
		grid-template-columns: repeat(3, minmax(30rem, 20rem));
		gap: 1rem;
	}
`;

const ProjectCard = styled.div`
	height: 40rem;
	perspective: 150rem;
	-webkit-perspective: 150rem;
	position: relative;

	.card-side {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		transition: all 1s ease;
		border-radius: var(--radius-sm);
		overflow: hidden;

		&--front {
			background-color: var(--dark);
			border: 1px solid var(--border-color);
		}

		&--back {
			${props => props.$image && `background: var(--gradient-${props.$id})`};
			transform: rotateY(180deg);

			display: grid;
			place-content: center;
		}

		// front
		.card-image {
			height: 16rem;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center center;
			background-blend-mode: screen;
			clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
			background-image: var(--gradient-1);
			${props =>
				props.$image &&
				`background-image: url(${props.$image}), var(--gradient-${props.$id})`};
		}

		h4 {
			font-size: 2.5rem;
			font-weight: 300;
			text-transform: uppercase;
			position: absolute;
			top: 12rem;
			right: 2rem;
			text-align: right;
			width: 90%;

			span {
				-webkit-box-decoration-break: clone;
				box-decoration-break: clone;
				padding: 1rem 1.5rem;
				${props =>
					props.$image && `background-image: var(--gradient-${props.$id})`};
			}
		}

		.card-content {
			width: 100%;
			position: absolute;
			top: 70%;
			left: 50%;
			transform: translate(-50%, -50%);
			padding: 1rem;

			p {
				font-size: 1.6rem;
				line-height: 1.6;
				margin-bottom: 2rem;
			}

			.skills {
				display: flex;
				align-items: center;
				gap: 1rem;
				flex-wrap: wrap;

				span {
					background-color: var(--light);
					color: var(--dark);
					padding: 0.5rem 1rem;
					font-size: 1.2rem;
					font-weight: 600;
					letter-spacing: 1px;
					border-radius: var(--radius-xs);
				}
			}
		}

		//back
	}

	&:hover .card-side--front {
		transform: rotateY(-180deg);
	}

	&:hover .card-side--back {
		transform: rotateY(0deg);
	}
`;
