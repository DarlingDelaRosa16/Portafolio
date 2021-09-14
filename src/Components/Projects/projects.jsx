import React,{useContext} from 'react'
import {ContentProjects, ContentBox, ProjectsCard, ProjectsImg, ProjectsInfo, ProjectsDescription, ProjectsTitle, ProjectsLink, TitleProjects} from './styledProjects'
import { dataProjects, informacionDeProyectos} from './dataProjects';
import { BsDisplayFill } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import LanguageContext from '../../Context/languageContext' 


const Projects = () => {

    const [/*setLanguage*/, language] = useContext(LanguageContext)
    if(language === "EN"){
        return (
            <ContentBox id="projects">
                <TitleProjects>Projects</TitleProjects>
                <ContentProjects>
                    {
                        dataProjects.map(item =>(
                            <ProjectsCard key={item.id}>
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
    }else{
        return (
            <ContentBox id="projects">
                <TitleProjects>Proyectos</TitleProjects>
                <ContentProjects>
                    {
                        informacionDeProyectos.map(item =>(
                            <ProjectsCard key={item.id}>
                                <ProjectsImg url={item.img}/>
                                <ProjectsInfo>
                                    <ProjectsTitle>{item.name}</ProjectsTitle>
                                    <ProjectsDescription >{item.description}</ProjectsDescription>
                                    <ProjectsLink href={item.urlLive} target="_blank" column={"1/2"}>En curso <BsDisplayFill/> </ProjectsLink>
                                    <ProjectsLink href={item.urlGithub} target="_blank" column={"2/3"}>GitHub <SiGithub/></ProjectsLink>
                                </ProjectsInfo>
                            </ProjectsCard>
                        ))
                    }
                </ContentProjects>
            </ContentBox>
        );
    }
    
}
 
export default Projects;