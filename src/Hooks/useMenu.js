import { useContext, useEffect, useState } from "react"
import LanguageContext from "../Context/languageContext"

export const useMenu = () => {

    const [setLanguage, language] = useContext(LanguageContext)
    const [onOpen, setOnOpen] = useState(false)
    const [infoLanguage, setInfoLanguage] = useState({})
    
    const toggleLanguage = ()=>{
        setOnOpen(false)
        if(language === "EN"){
            setLanguage("ES")
            localStorage.setItem("language", "ES")
        }else{
            setLanguage("EN")
            localStorage.setItem("language", "EN")
        }
    }

    const toggleMenu = ()=>{
        if(onOpen === false)setOnOpen(true)
        else setOnOpen(false)
    } 

    useEffect(() => {
        if(language === 'EN'){
            setInfoLanguage({
                aboutMe: "About me",
                projects: "Projects",
                contact: "Contact",
                resume: "Resume"
            })
        }else{
            setInfoLanguage({
                aboutMe: "Sobre Mi",
                projects: "Proyectos",
                contact: "Contacto",
                resume: "Curriculum"
            })
        }
    }, [language])

    return { toggleLanguage, toggleMenu, onOpen, ...infoLanguage, language } 
}
