import React, {useContext} from 'react'
import "./contact.css"
import LanguageContext from '../../Context/languageContext'  
import {ContentBox, ContactContent, ContactTitle, ContactLabel, ContactTextBox, ContactButton, ContactTextArea} from './styledContact'

const Contact = () => {

    const [setLanguage, language] = useContext(LanguageContext)

    if(language === "EN"){
        return (
            <ContentBox id="contact">
                    <ContactContent >
                        <ContactTitle >Contact me</ContactTitle>
                        <form id="contactInformation">
                            <ContactLabel gridColumn={"1/2"} gridRow={"1/2"}>Name</ContactLabel>
                            <ContactTextBox gridColumn={"1/2"} gridRow={"2/3"} />
                            <ContactLabel gridColumn={"1/2"} gridRow={"3/4"}>Email</ContactLabel>
                            <ContactTextBox gridColumn={"1/2"} gridRow={"4/5"}/>
                            <ContactLabel gridColumn={"2/3"} gridRow={"1/2"} gridC={"1/2"} gridR={"5/6"} >Message</ContactLabel>
                            <ContactTextArea id="contactArea"/>
                            <ContactButton>Send</ContactButton>                        
                        </form>
                    </ContactContent>
                </ContentBox>
        );
    }else{
        return (
            <ContentBox id="contact">
                    <ContactContent >
                        <ContactTitle >Contactame</ContactTitle>
                        <form id="contactInformation">
                            <ContactLabel gridColumn={"1/2"} gridRow={"1/2"}>Nombre</ContactLabel>
                            <ContactTextBox gridColumn={"1/2"} gridRow={"2/3"} />
                            <ContactLabel gridColumn={"1/2"} gridRow={"3/4"}>Correo Electronico</ContactLabel>
                            <ContactTextBox gridColumn={"1/2"} gridRow={"4/5"}/>
                            <ContactLabel gridColumn={"2/3"} gridRow={"1/2"} gridC={"1/2"} gridR={"5/6"} >Mensaje</ContactLabel>
                            <ContactTextArea id="contactArea"/>
                            <ContactButton>Enviar</ContactButton>                        
                        </form>
                    </ContactContent>
                </ContentBox>
        );
    }
    
}
 
export default Contact;