import { useContext, useEffect, useState } from "react";
import LanguageContext from "../Context/languageContext";

export const useMainContent = () => {
  
    const adaptedWidth = (window.innerWidth-1300)/2;
    const [, language] = useContext(LanguageContext)

    const [infoLanguaje, setInfoLanguage] = useState({})
    
    useEffect(() => {
        if(language === 'EN'){
            setInfoLanguage({
                greetings: "Hi, I'm",
                nameContent: "Darling De la Rosa Vanderhorst.",
                careerContent: "Web Developer",
                touchMe: "Get in Touch"
            })
        }else{
            setInfoLanguage({
                greetings: "Hola, soy",
                nameContent: "Darling De la Rosa Vanderhorst.",
                careerContent: "Desarrollador Web",
                touchMe: "Contáctame"
            })
        }
    }, [language])

    return { adaptedWidth, ...infoLanguaje }
}
