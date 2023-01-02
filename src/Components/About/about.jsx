import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from 'react-icons/fa'
import { SiStyledComponents, SiRedux, SiMongodb, SiJavascript, SiGithub } from "react-icons/si";
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
                        <SiJavascript /> <FaReact /> <SiRedux /> <FaNodeJs /> <SiGithub /> <SiStyledComponents /> <SiMongodb /> <FaCss3 /> <FaHtml5 />
                    </ContentIcons>
                </ContentAboutSkills>
            </ContentAboutAndSkill>
        </ContentBox>
    );
}
