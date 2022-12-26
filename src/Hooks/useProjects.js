import { useContext, useEffect, useState } from "react"
import LanguageContext from "../Context/languageContext"
import {dataProjects, informacionDeProyectos} from '../Components/Projects/dataProjects';

export const useProjects = () => {

    const [, language] = useContext(LanguageContext)
    const [infoLanguage, setInfoLanguage] = useState({})

    useEffect(() => {
        if(language === 'EN'){
            setInfoLanguage({
                titleProjects: "Projects",
                projectsLink: "Live",
                lang: dataProjects
            })
        }else{
            setInfoLanguage({
                titleProjects: "Proyectos",
                projectsLink: "En curso",
                lang: informacionDeProyectos
            })
        }
    }, [language])

    return { ...infoLanguage }
}
