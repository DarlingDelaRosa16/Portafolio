import React, {useContext} from 'react'
import "./contact.css"
import LanguageContext from '../../Context/languageContext'  
import {ContentBox, ContactContent, ContactTitle, ContactLabel, ContactTextBox, ContactButton, ContactTextArea} from './styledContact'

const Contact = () => {

    const [/*setLanguage*/, language] = useContext(LanguageContext)

    if(language === "EN"){
        return (
            <ContentBox id="contact">
                    <ContactContent >
                        <ContactTitle >Contact me</ContactTitle>
                        <form 
                            name="contact-form" 
                            className="contactInformation" 
                            method="POST"
                            data-netlify="true"
                        >
                            
                            <input type="hidden" name="form-name" value="contact-form" />
                            
                            <ContactLabel htmlFor="name"  gridColumn={"1/2"} >Name</ContactLabel>
                            <ContactTextBox id="name" placeholder="Name" name="name"  required  gridColumn={"1/2"}  />
                            
                            <ContactLabel htmlFor="email"  gridColumn={"1/2"} >Email</ContactLabel>
                            <ContactTextBox id="email" placeholder="Email" name="email" required gridColumn={"1/2"} />

                            <ContactLabel htmlFor="message"  gridColumn={"2/3"} gridRow={"1/2"} gridC={"1/2"} gridR={"auto"} >Message</ContactLabel>
                            <ContactTextArea id="message" placeholder="Message" name="message" required className="contactArea"/>

                            <ContactButton type="submit" >Send</ContactButton>                        
                        </form>
                    </ContactContent>
                </ContentBox>
        );
    }else{
        return (
            <ContentBox id="contact" >
                    <ContactContent >
                        <ContactTitle >Cont??ctame</ContactTitle>
                        <form 
                            name="contact-form" 
                            className="contactInformation" 
                            method="POST" 
                            data-netlify="true"
                        >
                            
                            <input type="hidden" name="form-name" value="contact-form" />

                            <ContactLabel htmlFor="name"  gridColumn={"1/2"} >Nombre</ContactLabel>
                            <ContactTextBox id="name" placeholder="Nombre" name="name" required type="text" gridColumn={"1/2"}  />

                            <ContactLabel htmlFor="email"  gridColumn={"1/2"} >Email</ContactLabel>
                            <ContactTextBox id="email" placeholder="Email" name="email" required type="email" gridColumn={"1/2"} />

                            <ContactLabel htmlFor="message"  gridColumn={"2/3"} gridRow={"1/2"} gridC={"1/2"} gridR={"auto"} >Mensaje</ContactLabel>
                            <ContactTextArea id="message" placeholder="Mensaje" name="message" required className="contactArea"/>

                            <ContactButton type="submit">Enviar</ContactButton>                        
                        </form>
                    </ContactContent>
                </ContentBox>
        );
    }
    
}
 
export default Contact;