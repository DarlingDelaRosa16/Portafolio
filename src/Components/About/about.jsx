import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaGitAlt } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { SiRedux, SiMongodb, SiJavascript, SiTypescript} from "react-icons/si";
import {
    ContentBox, ContentAboutAndSkill, ContentInfoAboutMe, TitleInfoAboutMe, ContentLanguage, NameLanguage,
    ContentIcons, InfoAboutMe, ContentAboutSkills, TitleInfoSkills, ContentSkills
} from './styledAbout'
import { useAbout } from '../../Hooks/useAbout';

export const About = () => {

    const { aboutMe, infoAbout, skills } = useAbout()
    return (
        <ContentBox id='about'>
            <ContentAboutAndSkill>
                <ContentInfoAboutMe>
                    <InfoAboutMe>
                        <TitleInfoAboutMe>{aboutMe}</TitleInfoAboutMe>
                        {infoAbout}
                    </InfoAboutMe>
                </ContentInfoAboutMe>
                <ContentAboutSkills>
                    <ContentSkills>
                        <TitleInfoSkills>{skills}</TitleInfoSkills>
                        <ContentIcons>

                            <ContentLanguage>
                                <SiJavascript />
                                <NameLanguage>JavaScript</NameLanguage>
                            </ContentLanguage>

                            <ContentLanguage>
                                <FaReact />
                                <NameLanguage>React.js</NameLanguage>
                            </ContentLanguage>

                            <ContentLanguage>
                                <SiRedux />
                                <NameLanguage>Redux</NameLanguage>
                            </ContentLanguage>

                            <ContentLanguage>
                                <SiTypescript />
                                <NameLanguage>TypeScript</NameLanguage>
                            </ContentLanguage>

                            <ContentLanguage>
                                <FaNodeJs />
                                <NameLanguage>Node.js</NameLanguage>
                            </ContentLanguage>

                            <ContentLanguage>
                                <SiMongodb />
                                <NameLanguage>MongoDB</NameLanguage>
                            </ContentLanguage>

                            <ContentLanguage>
                                <GrMysql />
                                <NameLanguage>MySQL</NameLanguage>
                            </ContentLanguage>

                            <ContentLanguage>
                                <FaHtml5 />
                                <NameLanguage>HTML</NameLanguage>
                            </ContentLanguage>

                            <ContentLanguage>
                                <FaCss3 />
                                <NameLanguage>CSS</NameLanguage>
                            </ContentLanguage>

                            <ContentLanguage>
                                <FaGitAlt />
                                <NameLanguage>Git</NameLanguage>
                            </ContentLanguage>

                        </ContentIcons>
                    </ContentSkills>
                </ContentAboutSkills>
            </ContentAboutAndSkill>
        </ContentBox>
    );
}
