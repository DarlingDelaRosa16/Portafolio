import React, { createContext, useState } from 'react'

const LanguageContext = createContext();  

const LanguageProvider = ( {children} ) => {
    
    let lang = ""
    if(localStorage.getItem("language") !== undefined){
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
export {LanguageProvider};
export default LanguageContext;  