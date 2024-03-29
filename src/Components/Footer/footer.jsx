import {SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import {FooterContent, ContactSocialMedias, ContactContentSocial} from './styledFooter'

export const Footer = () => {
    return (
        <FooterContent>
            <ContactContentSocial>
                    <ContactSocialMedias target="_blank" rel="noreferrer" href={"https://github.com/DarlingDelaRosa16"}> <SiGithub/> </ContactSocialMedias>
                    <ContactSocialMedias target="_blank" rel="noreferrer" href={"https://www.instagram.com/darling_delarosa/"}> <SiInstagram/> </ContactSocialMedias>
                    <ContactSocialMedias target="_blank" rel="noreferrer" href={"https://www.linkedin.com/in/darling-de-la-rosa"}> <SiLinkedin/> </ContactSocialMedias>
            </ContactContentSocial>
        </FooterContent>
    );
}