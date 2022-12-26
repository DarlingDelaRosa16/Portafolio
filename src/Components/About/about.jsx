import { FaReact, FaNodeJs, FaBootstrap, FaHtml5, FaCss3 } from 'react-icons/fa'
import { SiStyledComponents, SiRedux, SiMongodb, SiJavascript, SiMaterialUi, SiGithub } from "react-icons/si";
import { ContentBox, ContentAboutAndSkill, ContentInfoAboutMe, TitleInfoAboutMe, ContentIcons, InfoAboutMe, ContentAboutSkills } from './styledAbout'
import { useAbout } from '../../Hooks/useAbout';

export const About = () => {

    const { aboutMe, infoAbout, skills } = useAbout()
    return (
        <ContentBox id="about">
            <ContentAboutAndSkill>
                <ContentInfoAboutMe>
                    <TitleInfoAboutMe>{aboutMe}</TitleInfoAboutMe>
                    <InfoAboutMe>{infoAbout}</InfoAboutMe>
                </ContentInfoAboutMe>
                <ContentAboutSkills>
                    <TitleInfoAboutMe>{skills}</TitleInfoAboutMe>
                    <ContentIcons>
                        <FaCss3 /> <FaReact /> <FaNodeJs /> <FaBootstrap /> <FaHtml5 /> <SiRedux />
                        <SiMongodb /> <SiMaterialUi /> <SiGithub /> <SiStyledComponents /> <SiJavascript />
                    </ContentIcons>
                </ContentAboutSkills>
            </ContentAboutAndSkill>
        </ContentBox>
    );
}
