import { ContentProjects, ContentBox, ProjectsCard, ProjectsImg, ProjectsInfo, ProjectsDescription, ProjectsTitle, ProjectsLink, TitleProjects } from './styledProjects'
import { BsDisplayFill } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { useProjects } from '../../Hooks/useProjects';

export const Projects = () => {

    const {lang, titleProjects, projectsLink} = useProjects()
    
    return (
        <ContentBox id="projects">
            <TitleProjects>{titleProjects}</TitleProjects>
            <ContentProjects>
            {
                    (lang === undefined)
                    ?''
                    :lang.map(item => (
                        <ProjectsCard key={item.id}>
                            <ProjectsImg url={item.img} />
                            <ProjectsInfo>
                                <ProjectsTitle>{item.name}</ProjectsTitle>
                                <ProjectsDescription >{item.description}</ProjectsDescription>
                                <ProjectsLink href={item.urlLive} target="_blank" column={"1/2"}> <BsDisplayFill /> {projectsLink}</ProjectsLink>
                                <ProjectsLink href={item.urlGithub} target="_blank" column={"2/3"}>GitHub <SiGithub /></ProjectsLink>
                            </ProjectsInfo>
                        </ProjectsCard>
                    ))
                }
            </ContentProjects>
        </ContentBox>
    );
}