import { useContext, useEffect, useState } from "react"
import LanguageContext from "../Context/languageContext"

export const useAbout = () => {

    const [, language] = useContext(LanguageContext)
    const [infoLanguage, setInfoLanguage] = useState({})

    useEffect(() => {
        if (language === 'EN') {
            setInfoLanguage({
                aboutMe: "About Me",
                infoAbout: "My name is Darling Nomar De la Rosa Vanderhorst. Im a software development graduated from Intituto Tecnico Superior Comunitario (ITSC). I also study every day for impruve my skills and I try to use the most time posible for increase in this area. I try to be a better programmer than yesterday and that's one of my principal goals.",
                skills: 'Skills'
            })
        } else {
            setInfoLanguage({
                aboutMe: "Sobre Mi",
                infoAbout: "Mi nombre es Darling Nomar De la Rosa Vanderhorst. Soy un desarrollador de Software graduado en el Intituto Tecnico Superior Comunitario (ITSC). Estudio diario para mejorar mis habilidades ademas intento utilizar el mayor tiempo posible para crecer en esta area. Intento ser mejor programador que ayer esa es una de mis principales metas.",
                skills: 'Habilidades'
            })
        }
    }, [language])

    return { ...infoLanguage }
}
