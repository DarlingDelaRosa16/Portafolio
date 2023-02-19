import {
    ContentProjects, ContentBox, ProjectsCard, ProjectsImg, ProjectsInfo,
    ProjectsDescription, ProjectsTitle, ProjectsLink, TitleProjects, ContentCardProjects
} from './styledProjects'
import { BsDisplayFill } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { useProjects } from '../../Hooks/useProjects';

export const Projects = () => {

    const { lang, titleProjects, projectsLink } = useProjects()

    return (
        <ContentBox id="projects">
            <ContentProjects>
                <TitleProjects>{titleProjects}</TitleProjects>
                <ContentCardProjects>
                    {
                        (lang === undefined)
                            ? ''
                            : lang.map(item => (
                                <ProjectsCard key={item.id}>
                                    <ProjectsImg url={item.img} />
                                    <ProjectsInfo>
                                        <ProjectsTitle>{item.name}</ProjectsTitle>
                                        <ProjectsDescription >{item.description}</ProjectsDescription>
                                        <ProjectsLink href={item.urlLive} target="_blank">{projectsLink} <BsDisplayFill /></ProjectsLink>
                                        <ProjectsLink href={item.urlGithub} target="_blank"> GitHub <SiGithub /> </ProjectsLink>
                                    </ProjectsInfo>
                                </ProjectsCard>
                            ))
                    }
                </ContentCardProjects>
            </ContentProjects>
        </ContentBox>
    );
}