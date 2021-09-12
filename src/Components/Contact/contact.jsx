import React from 'react'
import "./contact.css"
import {ContentBox, ContactContent, ContactTitle, ContactLabel, ContactTextBox, ContactButton, ContactTextArea} from './styledContact'

const Contact = () => {
    return (
        <ContentBox >
                <ContactContent >
                    <ContactTitle >Contact me</ContactTitle>
                    <form id="contactInformation">
                        <ContactLabel gridColumn={"1/2"} gridRow={"1/2"}>Name</ContactLabel>
                        <ContactTextBox gridColumn={"1/2"} gridRow={"2/3"} />
                        <ContactLabel gridColumn={"1/2"} gridRow={"3/4"}>Email</ContactLabel>
                        <ContactTextBox gridColumn={"1/2"} gridRow={"4/5"}/>
                        <ContactLabel gridColumn={"2/3"} gridRow={"1/2"} gridC={"1/2"} gridR={"5/6"} >Description</ContactLabel>
                        <ContactTextArea id="contactArea"/>
                        <ContactButton>Send</ContactButton>                        
                    </form>
                </ContactContent>
            </ContentBox>
    );
}
 
export default Contact;