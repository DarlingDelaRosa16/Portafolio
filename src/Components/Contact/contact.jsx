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
                            name="contact" 
                            className="contactInformation" 
                            method="post"
                            data-netlify="true"
                            onSubmit="submit"
                        >
                            
                            <input type="hidden" name="form-name" value="contact" />
                            
                            <ContactLabel htmlFor="name" gridColumn={"1/2"} >Name</ContactLabel>
                            <ContactTextBox id="name" name="name" gridColumn={"1/2"}  />
                            
                            <ContactLabel htmlFor="email" gridColumn={"1/2"} >Email</ContactLabel>
                            <ContactTextBox id="email" name="email" gridColumn={"1/2"} />

                            <ContactLabel htmlFor="message" gridColumn={"2/3"} gridRow={"1/2"} gridC={"1/2"} gridR={"auto"} >Message</ContactLabel>
                            <ContactTextArea id="message" name="message" className="contactArea"/>

                            <ContactButton type="submit" >Send</ContactButton>                        
                        </form>
                    </ContactContent>
                </ContentBox>
        );
    }else{
        return (
            <ContentBox id="contact" >
                    <ContactContent >
                        <ContactTitle >Contactame</ContactTitle>
                        <form 
                            name="contact" 
                            id="contactInformation" 
                            method="post" 
                            data-netlify="true"
                            onSubmit="submit"
                        >
                            
                            <input type="hidden" name="form-name" value="contact" />

                            <ContactLabel htmlFor="name" gridColumn={"1/2"} >Nombre</ContactLabel>
                            <ContactTextBox id="name" name="name" type="text" gridColumn={"1/2"}  />

                            <ContactLabel htmlFor="email" gridColumn={"1/2"} >Email</ContactLabel>
                            <ContactTextBox id="email" name="email" type="email" gridColumn={"1/2"} />

                            <ContactLabel htmlFor="message" gridColumn={"2/3"} gridRow={"1/2"} gridC={"1/2"} gridR={"auto"} >Mensaje</ContactLabel>
                            <ContactTextArea id="message" name="message" className="contactArea"/>

                            <ContactButton type="submit">Enviar</ContactButton>                        
                        </form>
                    </ContactContent>
                </ContentBox>
        );
    }
    
}
 
export default Contact;