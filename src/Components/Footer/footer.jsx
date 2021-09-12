import React from 'react'
import {SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import {FooterContent, ContactSocialMedias, ContactContentSocial} from './styledFooter'

const Footer = () => {
    return (
        <FooterContent>
            <ContactContentSocial>
                <ContactSocialMedias>
                    <ContactSocialMedias target="_blank" href={"https://github.com/DarlingDelaRosa16"}> <SiGithub/> </ContactSocialMedias>
                    <ContactSocialMedias target="_blank" href={"https://www.instagram.com/darling_delarosa/"}> <SiInstagram/> </ContactSocialMedias>
                    <ContactSocialMedias target="_blank" href={"https://www.linkedin.com/in/darling-nomar-de-la-rosa-314872219/"}> <SiLinkedin/> </ContactSocialMedias>
                </ContactSocialMedias>
            </ContactContentSocial>
        </FooterContent>
    );
}
 
export default Footer;