import React from 'react'
import {ContentBox, ProjectsCard, ProjectsImg, ProjectsInfo, ProjectsDescription, ProjectsTitle, ProjectsLink, TitleProjects} from './styledProjects'


const Projects = () => {
    return (
        <>
        <TitleProjects>Projects</TitleProjects>
        <ContentBox>
            <ProjectsCard>
                <ProjectsImg url={"https://i.imgur.com/BEDdBib.png"}/>
                <ProjectsInfo>
                    <ProjectsTitle>My Comunity app</ProjectsTitle>
                    <ProjectsDescription >This aplication is for post news about topics and comunities. This was create in Reat.js using Hooks and Node.js using Express. The purpose was only for practice.</ProjectsDescription>
                    <ProjectsLink column={"1/2"}>Github</ProjectsLink>
                    <ProjectsLink column={"2/3"}>Live</ProjectsLink>
                </ProjectsInfo>

            </ProjectsCard>

            <ProjectsCard>
                <ProjectsImg url={"https://i.imgur.com/BEDdBib.png"}/>

                <ProjectsInfo>
                    <ProjectsTitle>My Comunity app</ProjectsTitle>
                    <ProjectsDescription >This aplication is for post news about topics and comunities. This was create in Reat.js using Hooks and Node.js using Express. The purpose was only for practice.</ProjectsDescription>
                    <ProjectsLink column={"1/2"}>Github</ProjectsLink>
                    <ProjectsLink column={"2/3"}>Live</ProjectsLink>
                </ProjectsInfo>

            </ProjectsCard>

            <ProjectsCard>
                <ProjectsImg url={"https://i.imgur.com/BEDdBib.png"}/>

                <ProjectsInfo>
                    <ProjectsTitle>My Comunity app</ProjectsTitle>
                    <ProjectsDescription >This aplication is for post news about topics and comunities. This was create in Reat.js using Hooks and Node.js using Express. The purpose was only for practice.</ProjectsDescription>
                    <ProjectsLink column={"1/2"}>Github</ProjectsLink>
                    <ProjectsLink column={"2/3"}>Live</ProjectsLink>
                </ProjectsInfo>

            </ProjectsCard>
        </ContentBox>
        </>
    );
}
 
export default Projects;