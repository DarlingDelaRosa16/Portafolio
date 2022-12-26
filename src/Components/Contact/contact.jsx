import { ContentBox, ContactContent, ContactTitle, ContactLabel, ContactTextBox, ContactButton, ContactTextArea } from './styledContact'
import "./contact.css"
import { useContact } from '../../Hooks/useContact';

export const Contact = () => {

    const { contactMe, name, email, message, send } = useContact()

    return (
        <ContentBox id="contact">
            <ContactContent >
                <ContactTitle>{contactMe}</ContactTitle>
                <form
                    name="contact-form"
                    className="contactInformation"
                    method="POST"
                    data-netlify="true"
                >

                    <input type="hidden" name="form-name" value="contact-form" />

                    <ContactLabel htmlFor="name" gridColumn={"1/2"} >{name}</ContactLabel>
                    <ContactTextBox id="name" placeholder={name} name="name" required gridColumn={"1/2"} />

                    <ContactLabel htmlFor="email" gridColumn={"1/2"} >{email}</ContactLabel>
                    <ContactTextBox id="email" placeholder={email} name="email" required gridColumn={"1/2"} />

                    <ContactLabel htmlFor="message" gridColumn={"2/3"} gridRow={"1/2"} gridC={"1/2"} gridR={"auto"} >{message}</ContactLabel>
                    <ContactTextArea id="message" placeholder={message} name="message" required className="contactArea" />

                    <ContactButton type="submit" >{send}</ContactButton>
                </form>
            </ContactContent>
        </ContentBox>
    );
}
