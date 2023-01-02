import { useContext, useEffect, useState } from "react"
import LanguageContext from "../Context/languageContext"

export const useAbout = () => {

    const [, language] = useContext(LanguageContext)
    const [infoLanguage, setInfoLanguage] = useState({})

    useEffect(() => {
        if (language === 'EN') {
            setInfoLanguage({
                aboutMe: "About Me",
                infoAbout: "My name is Darling Nomar De la Rosa Vanderhorst. Im a software development graduated from Intituto Tecnico Superior Comunitario (ITSC).I like the web develoment using JavaScript for my practice and web projects and develop the cleanest code always . I try to be a better programmer than yesterday and that's one of the step that I have to follow to complete my goals. ",
                skills: 'Skills and Knowledge'
            })
        } else {
            setInfoLanguage({
                aboutMe: "Sobre Mi",
                infoAbout: "Mi nombre es Darling Nomar De la Rosa Vanderhorst. Soy un desarrollador de Software graduado en el Intituto Tecnico Superior Comunitario (ITSC). Me gusta el desarrollo Web y me enfoco en JavaScript para hacer mis practicas y proyectos, simepre buscando codigo limpio y simple de leer. Soy muy apacionado de la tecnologia, Deportes, video juegos y autos.",
                skills: 'Habilidades y Conocimientos'
            })
        }
    }, [language])

    return { ...infoLanguage }
}
