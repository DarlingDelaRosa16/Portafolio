import React, {useContext} from 'react'
import LanguageContext from '../../Context/languageContext'    
import {ContentBox, ContentAboutAndSkill ,ContentInfoAboutMe, TitleInfoAboutMe,ContentIcons, InfoAboutMe, ContentAboutSkills} from './styledAbout'
import {FaReact, FaNodeJs, FaBootstrap, FaHtml5, FaCss3} from 'react-icons/fa'
import { SiStyledComponents, SiRedux, SiMongodb, SiJavascript, SiMaterialUi, SiGithub } from "react-icons/si";

const About = () => {

    const [/*setLanguage*/, language] = useContext(LanguageContext)

    if(language === "EN"){
        return (
            <ContentBox id="about">
                <ContentAboutAndSkill>
                    <ContentInfoAboutMe>
                        <TitleInfoAboutMe>About Me</TitleInfoAboutMe>
                        <InfoAboutMe>My name is Darling Nomar De la Rosa Vanderhorst. Im a software development graduated from Intituto Tecnico Superior Comunitario (ITSC). I also study every day for impruve my skills and I try to use the most time posible for increase in this area. I try to be a better programmer than yesterday and that's one of my principal goals.</InfoAboutMe>
                    </ContentInfoAboutMe>
                    <ContentAboutSkills>
                        <TitleInfoAboutMe>Skills</TitleInfoAboutMe>
                            <ContentIcons>
                                <FaCss3/> <FaReact/> <FaNodeJs/> <FaBootstrap/> <FaHtml5/> <SiRedux/>
                                <SiMongodb/> <SiMaterialUi/> <SiGithub/> <SiStyledComponents/> <SiJavascript/> 
                            </ContentIcons>  
                    </ContentAboutSkills>
                </ContentAboutAndSkill>
            </ContentBox>
        );
    }else{
        return(
            <ContentBox id="about">
                <ContentAboutAndSkill>
                    <ContentInfoAboutMe>
                        <TitleInfoAboutMe>Sobre Mi</TitleInfoAboutMe>
                        <InfoAboutMe>Mi nombre es Darling Nomar De la Rosa Vanderhorst. Soy un desarrollador de Software graduado en el Intituto Tecnico Superior Comunitario (ITSC). Estudio diario para mejorar mis habilidades ademas intento utilizar el mayor tiempo posible para crecer en esta area. Intento ser mejor programador que ayer esa es una de mis principales metas.</InfoAboutMe>
                    </ContentInfoAboutMe>
                    <ContentAboutSkills>
                        <TitleInfoAboutMe>Habilidades</TitleInfoAboutMe>
                            <ContentIcons>
                                <FaCss3/> <FaReact/> <FaNodeJs/> <FaBootstrap/> <FaHtml5/> <SiRedux/>
                                <SiMongodb/> <SiMaterialUi/> <SiGithub/> <SiStyledComponents/> <SiJavascript/> 
                            </ContentIcons>  
                    </ContentAboutSkills>
                </ContentAboutAndSkill>
            </ContentBox>
        )
    }
}
 
export default About;