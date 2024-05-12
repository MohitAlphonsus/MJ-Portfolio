import styled from 'styled-components';
import { HeadingSecondary, SubHeading } from '../UI/Typo';
import project1 from '../assets/project-1.png';

export default function Projects() {
	return (
		<ProjectSection>
			<SubHeading>My Projects</SubHeading>
			<HeadingSecondary>Check out my works</HeadingSecondary>
			<ProjectsContainer>
				<ProjectCard></ProjectCard>
			</ProjectsContainer>
		</ProjectSection>
	);
}

const ProjectSection = styled.section`
	padding-block: 8rem;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	gap: 2rem;

	height: 100dvh;
`;

const ProjectsContainer = styled.div`
	width: 100%;
`;

const ProjectCard = styled.div``;
