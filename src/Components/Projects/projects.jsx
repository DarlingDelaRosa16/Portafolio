import React from 'react'
import {ContentProjects, ContentBox, ProjectsCard, ProjectsImg, ProjectsInfo, ProjectsDescription, ProjectsTitle, ProjectsLink, TitleProjects} from './styledProjects'
import { dataProjects } from './dataProjects';
import { BsDisplayFill } from "react-icons/bs";
import { SiGithub } from "react-icons/si";


const Projects = () => {
    return (
        <ContentBox id="projects">
            <TitleProjects>Projects</TitleProjects>
            <ContentProjects>
                {
                    dataProjects.map(item =>(
                        <ProjectsCard>
                            <ProjectsImg url={item.img}/>
                            <ProjectsInfo>
                                <ProjectsTitle>{item.name}</ProjectsTitle>
                                <ProjectsDescription >{item.description}</ProjectsDescription>
                                <ProjectsLink href={item.urlLive} target="_blank" column={"1/2"}>Live <BsDisplayFill/> </ProjectsLink>
                                <ProjectsLink href={item.urlGithub} target="_blank" column={"2/3"}>GitHub <SiGithub/></ProjectsLink>
                            </ProjectsInfo>
                        </ProjectsCard>
                    ))
                }
            </ContentProjects>
        </ContentBox>
    );
}
 
export default Projects;