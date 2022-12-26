import { createContext, useState } from 'react'

const LanguageContext = createContext();  

export const LanguageProvider = ({children}) => {
    
    let lang = ""

    if(localStorage.getItem("language")){
        lang = localStorage.getItem("language")
    }else{
        localStorage.setItem("language", "EN")
    }

    const [language, setLanguage] = useState(lang)

    return (
        <LanguageContext.Provider value={[setLanguage, language]}>
            {children}
        </LanguageContext.Provider>
    );
}
export default LanguageContext;  