import React from 'react'
import {ContentBox, ProjectsCard, ProjectsImg, ProjectsInfo, ProjectsDescription, ProjectsTitle, ProjectsLink, TitleProjects} from './styledProjects'
import { dataProjects } from './dataProjects';

const Projects = () => {
    return (
        <>
        <TitleProjects>Projects</TitleProjects>
            <ContentBox>
                {
                    dataProjects.map(item =>(
                        <ProjectsCard>
                            <ProjectsImg url={item.img}/>
                            <ProjectsInfo>
                                <ProjectsTitle>{item.name}</ProjectsTitle>
                                <ProjectsDescription >{item.description}</ProjectsDescription>
                                <ProjectsLink column={"1/2"}>Github</ProjectsLink>
                                <ProjectsLink column={"2/3"}>Live</ProjectsLink>
                            </ProjectsInfo>
                        </ProjectsCard>
                    ))
                }
            </ContentBox>
        </>
    );
}
 
export default Projects;