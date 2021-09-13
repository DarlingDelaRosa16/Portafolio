import React from 'react'
import {ContentBox, ContentInfoAboutMe, TitleInfoAboutMe,ContentIcons, InfoAboutMe, ContentAboutSkills} from './styledAbout'
import {FaReact, FaNodeJs, FaBootstrap, FaHtml5, FaCss3} from 'react-icons/fa'
import { SiStyledComponents, SiMongodb, SiJavascript, SiMaterialUi, SiGithub } from "react-icons/si";

const About = () => {

    return (
        <ContentBox id="about">
            <ContentInfoAboutMe>
                <TitleInfoAboutMe>About Me</TitleInfoAboutMe>
                <InfoAboutMe>My name is Darling Nomar De la Rosa Vanderhorst. Im a software development graduated from Intituto Tecnico Superior Comunitario (ITSC). I also study every day for impruve my skills and I try to use the most time posible for increase in this area. I try to be a better programmer than yesterday and that's one of my principal goals.</InfoAboutMe>
            </ContentInfoAboutMe>
            <ContentAboutSkills>
                <TitleInfoAboutMe>Skills</TitleInfoAboutMe>
                    <ContentIcons>
                        <FaCss3/> <FaReact/> <FaNodeJs/> <FaBootstrap/> <FaHtml5/> 
                        <SiMongodb/> <SiMaterialUi/> <SiGithub/> <SiStyledComponents/> <SiJavascript/> 
                    </ContentIcons>  
            </ContentAboutSkills>
        </ContentBox>
    );
}
 
export default About;