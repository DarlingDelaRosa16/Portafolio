import {SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { Link } from "react-scroll";
import { Menu } from "../Menu/menu"
import { ContactSocialMedias } from "../Footer/styledFooter"
import { CareerContent, GreetingsContent, TouchMe,HeaderContent, InfoHeaderContent, InfoMainContent, MySocialMedias, NameContent, SocialMediaContent } from "./styledHeaderContent"
import { useMainContent } from "../../Hooks/useMainContent"

export const Header = () => {

    const { greetings, nameContent, careerContent, touchMe } = useMainContent()

    return (
        <HeaderContent>
            <Menu />
            <InfoHeaderContent>
                <InfoMainContent>
                    <GreetingsContent>{greetings}</GreetingsContent>
                    <NameContent>{nameContent}</NameContent>
                    <CareerContent>{careerContent}</CareerContent>
                    <Link to="contact" smooth={true} duration={1000}><TouchMe>{touchMe}</TouchMe> </Link>
                </InfoMainContent>
                <SocialMediaContent>
                    <MySocialMedias>
                        <ContactSocialMedias target="_blank" rel="noreferrer" href={"https://github.com/DarlingDelaRosa16"}> <SiGithub /> </ContactSocialMedias>
                        <ContactSocialMedias target="_blank" rel="noreferrer" href={"https://www.instagram.com/darling_delarosa/"}> <SiInstagram /> </ContactSocialMedias>
                        <ContactSocialMedias target="_blank" rel="noreferrer" href={"https://www.linkedin.com/in/darling-de-la-rosa"}> <SiLinkedin /> </ContactSocialMedias>
                    </MySocialMedias>
                </SocialMediaContent>
            </InfoHeaderContent>
        </HeaderContent>
    )
}
