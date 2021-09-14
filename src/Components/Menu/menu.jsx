import React, {useContext, useState} from 'react'
import "./menu.css"
import MyResume from '../../Resume/Myresume.pdf'
import { FiMenu } from "react-icons/fi";
import LanguageContext from '../../Context/languageContext'
import {Link} from 'react-scroll'
import {MenuBox, MenuLogo, MenuButton, MenuButtonDropDown, MenuBoxDropDown} from './styledMenu'

const Menu = () => {

    const [setLanguage, language] = useContext(LanguageContext)
    const [onOpen, setOnOpen] = useState(false)

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

    if(language ==="EN"){
        return (
            <>
                <MenuBox >
                        
                        <MenuLogo>XD</MenuLogo>
                        
                        <Link className="navButton"  to="about" smooth={true} duration={600}>About me</Link>
                        <Link className="navButton"  to="projects" smooth={true} duration={800}>Projects</Link>
                        <Link className="navButton"  to="contact" smooth={true} duration={1000}>Contact</Link>
                        <a className="navButton" target="_blank" rel="noreferrer" href={MyResume}>Resume</a>
    
                        <MenuButton onClick={toggleLanguage} display={"none"}>{language}</MenuButton>
                        
                        <MenuButtonDropDown onClick={toggleMenu}><FiMenu/></MenuButtonDropDown>
    
                </MenuBox>
    
                    <MenuBoxDropDown see={onOpen} >
    
                        <Link className="navDropButton" onClick={toggleMenu} to="about" smooth={true} duration={600}>About me</Link>
                        <Link className="navDropButton" onClick={toggleMenu} to="projects" smooth={true} duration={800}>Projects</Link>
                        <Link className="navDropButton" onClick={toggleMenu} to="contact" smooth={true} duration={1000}>Contact</Link>
                        <a className="navDropButton" onClick={toggleMenu} target="_blank" rel="noreferrer"  href={MyResume}>Resume</a>
                    
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
                        <a className="navButton" target="_blank" rel="noreferrer" href={MyResume}>Curriculum</a>
    
                        <MenuButton onClick={toggleLanguage} display={"none"}>{language}</MenuButton>
                        
                        <MenuButtonDropDown onClick={toggleMenu}><FiMenu/></MenuButtonDropDown>
    
                </MenuBox>
    
                    <MenuBoxDropDown see={onOpen} >
    
                        <Link className="navDropButton" onClick={toggleMenu} to="about" smooth={true} duration={600}>Sobre Mi</Link>
                        <Link className="navDropButton" onClick={toggleMenu} to="projects" smooth={true} duration={800}>Proyectos</Link>
                        <Link className="navDropButton" onClick={toggleMenu} to="contact" smooth={true} duration={1000}>Contacto</Link>
                        <a className="navDropButton" onClick={toggleMenu} target="_blank" rel="noreferrer" href={MyResume}>Curriculum</a>
                    
                        <MenuButton onClick={toggleLanguage}>{language}</MenuButton>
    
                    </MenuBoxDropDown>
            </>
        );
    }
    
}
 
export default Menu;