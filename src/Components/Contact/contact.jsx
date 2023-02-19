import { ContentBox, ContactContent, ContactTitle, ContactLabel, ContactTextBox, ContactButton, ContactTextArea, LabelAndBox } from './styledContact'
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
                        autoComplete='off'
                    >

                        {/* <input type="hidden" name="form-name" value="contact-form" /> */}
                        <LabelAndBox gridCol={"1/2"}  gridSmCol={"1/4"}> 
                            <ContactLabel htmlFor="name">{name}</ContactLabel>
                            <ContactTextBox id="name" placeholder={name} name="name" required gridColumn={"1/2"} />
                        </LabelAndBox>

                        <LabelAndBox gridCol={"3/4"} gridSmCol={"1/4"} >
                            <ContactLabel htmlFor="email">{email}</ContactLabel>
                            <ContactTextBox id="email" placeholder={email} name="email" required gridColumn={"1/2"} />
                        </LabelAndBox>

                        <LabelAndBox gridCol={"1/4"}>
                        <ContactLabel htmlFor="message">{message}</ContactLabel>
                        <ContactTextArea id="message" placeholder={message} name="message" required className="contactArea" />
                        </LabelAndBox>



                        <ContactButton type="submit">{send}</ContactButton>
                    </form>
            </ContactContent>
        </ContentBox>
    );
}
