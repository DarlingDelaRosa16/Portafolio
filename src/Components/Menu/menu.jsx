import React, {useContext} from 'react'
import "./menu.css"
import LanguageContext from '../../Context/languageContext'
import {Link} from 'react-scroll'
import {MenuBox, MenuLogo, MenuButton, MenuButtonDropDown, MenuBoxDropDown} from './styledMenu'

const Menu = () => {

    const [setLanguage, language] = useContext(LanguageContext)

    const toggleLanguage = ()=>{
        if(language === "EN"){
            setLanguage("ES")
            localStorage.setItem("language", "ES")
        }else{
            setLanguage("EN")
            localStorage.setItem("language", "EN")
        }
        
    }

    if(language ==="EN"){
        return (
            <>
                <MenuBox >
                        
                        <MenuLogo>XD</MenuLogo>
                        
                        <Link className="navButton"  to="about" smooth={true} duration={600}>About me</Link>
                        <Link className="navButton"  to="projects" smooth={true} duration={800}>Projects</Link>
                        <Link className="navButton"  to="contact" smooth={true} duration={1000}>Contact</Link>
                        <a className="navButton"  to="/contact">Resume</a>
    
                        <MenuButton onClick={toggleLanguage} display={"none"}>{language}</MenuButton>
                        
                        <MenuButtonDropDown >HOLA</MenuButtonDropDown>
    
                </MenuBox>
    
                    <MenuBoxDropDown >
    
                        <Link className="navButton"  to="about" smooth={true} duration={600}>About me</Link>
                        <Link className="navButton"  to="projects" smooth={true} duration={800}>Projects</Link>
                        <Link className="navButton"  to="contact" smooth={true} duration={1000}>Contact</Link>
                        <a className="navButton"  to="/contact">Resume</a>
                    
                        <MenuButton onClick={toggleLanguage}>{language}</MenuButton>
    
                    </MenuBoxDropDown>
            </>
        );
    }else{
        return (
            <>
                <MenuBox >
                        
                        <MenuLogo>XD</MenuLogo>
                        
                        <Link className="navButton"  to="about" smooth={true} duration={600}>Sobre Mi</Link>
                        <Link className="navButton"  to="projects" smooth={true} duration={800}>Proyectos</Link>
                        <Link className="navButton"  to="contact" smooth={true} duration={1000}>Contacto</Link>
                        <a className="navButton"  to="/contact">Curriculum</a>
    
                        <MenuButton onClick={toggleLanguage} display={"none"}>{language}</MenuButton>
                        
                        <MenuButtonDropDown >HOLA</MenuButtonDropDown>
    
                </MenuBox>
    
                    <MenuBoxDropDown >
    
                        <Link className="navButton"  to="about" smooth={true} duration={600}>Sobre Mi</Link>
                        <Link className="navButton"  to="projects" smooth={true} duration={800}>Proyectos</Link>
                        <Link className="navButton"  to="contact" smooth={true} duration={1000}>Contacto</Link>
                        <a className="navButton"  to="/contact">Curriculum</a>
                    
                        <MenuButton onClick={toggleLanguage}>{language}</MenuButton>
    
                    </MenuBoxDropDown>
            </>
        );
    }
    
}
 
export default Menu;