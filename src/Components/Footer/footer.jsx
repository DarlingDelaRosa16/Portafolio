import React from 'react'
import {SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import {FooterContent, ContactSocialMedias, ContactContentSocial} from './styledFooter'

const Footer = () => {
    return (
        <FooterContent>
            <ContactContentSocial>
                    <ContactSocialMedias target="_blank" rel="noreferrer" href={"https://github.com/DarlingDelaRosa16"}> <SiGithub/> </ContactSocialMedias>
                    <ContactSocialMedias target="_blank" rel="noreferrer" href={"https://www.instagram.com/darling_delarosa/"}> <SiInstagram/> </ContactSocialMedias>
                    <ContactSocialMedias target="_blank" rel="noreferrer" href={"https://www.linkedin.com/in/darling-nomar-de-la-rosa-314872219/"}> <SiLinkedin/> </ContactSocialMedias>
            </ContactContentSocial>
        </FooterContent>
    );
}
 
export default Footer;