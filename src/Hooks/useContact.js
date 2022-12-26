import { useContext, useEffect, useState } from "react"
import LanguageContext from "../Context/languageContext"

export const useContact = () => {

    const [, language] = useContext(LanguageContext)
    const [infoLanguage, setInfoLanguage] = useState({})

    useEffect(() => {
        if (language === 'EN') {
            setInfoLanguage({
                contactMe: "Contact me",
                name: "Name",
                email: "Email",
                message: "Message",
                send: "Send"
            })
        } else {
            setInfoLanguage({
                contactMe: "Contáctame",
                name: "Nombre",
                email: "Email",
                message: "Mensaje",
                send: "Enviar"
            })
        }
    }, [language])

    return { ...infoLanguage }
}
