import styled from 'styled-components';
import { HeadingSecondary, HeadingTertiary, SubHeading } from '../UI/Typo';
import { about } from '../constants/about';

export default function About() {
	return (
		<AboutSection>
			<SubHeading>About Me</SubHeading>
			<HeadingSecondary>Education and skills I use</HeadingSecondary>
			<p>
				Innovative and detail-oriented Fresher Front End Developer with a
				passion for creating responsive and user-friendly websites. Seeking for
				opportunities and challenges that will expand my skill set.
			</p>
			<HeadingTertiary className="about-small-heading">
				Education &ndash;
			</HeadingTertiary>
			<Container>
				{about.education.map(({ id, timeline, stream, place }) => (
					<EducationBox key={id}>
						<span>{timeline}</span>
						<h4>{stream}</h4>
						<span>{place}</span>
					</EducationBox>
				))}
			</Container>
			<HeadingTertiary className="about-small-heading">
				Tools & Skills &ndash;
			</HeadingTertiary>
			<Container $wrap>
				{about.tools.map(({ id, icon: Icon, name }) => (
					<ToolsBox key={id}>
						<Icon className="skill-icon" />
						<span>{name}</span>
					</ToolsBox>
				))}
			</Container>
			<Container $wrap>
				{about.skills.map(({ id, name }) => (
					<SkillBox key={id}>#{name}</SkillBox>
				))}
			</Container>
		</AboutSection>
	);
}

const AboutSection = styled.section`
	padding-block: 7rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2rem;

	p {
		font-size: 2rem;
		line-height: 1.6;
	}

	.about-small-heading {
		margin-top: 2rem;
	}
`;

const Container = styled.div`
	/* width: 100%; */
	display: flex;
	align-items: center;
	gap: 1rem;

	flex-wrap: wrap;

	@media (min-width: 40em) {
		flex-wrap: nowrap;
		${props => props.$wrap && 'flex-wrap: wrap;'}
	}
`;

const EducationBox = styled.div`
	width: 100%;
	border: 1px solid var(--border-color);
	border-radius: var(--radius-sm);
	padding: 2rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;

	@media (min-width: 40em) {
		height: 25rem;
	}

	span:nth-of-type(1) {
		font-size: 1.8rem;
	}

	h4 {
		font-size: 3rem;
	}

	span:nth-of-type(2) {
		font-size: 1.4rem;
		letter-spacing: 1px;
		margin-top: auto;
	}
`;

const ToolsBox = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
	padding: 1rem;
	border: 1px solid var(--border-color);
	border-radius: var(--radius-xs);

	.skill-icon {
		font-size: 3.6rem;
	}

	span {
		font-size: 2rem;
	}
`;

const SkillBox = styled.div`
	border: 1px solid var(--border-color);
	border-radius: var(--radius-xs);
	font-weight: 500;
	padding: 0.5rem 1.5rem;
	text-transform: uppercase;
	font-size: 1.2rem;
`;
