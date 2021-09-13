import React from 'react'
import "./menu.css"
import {Link} from 'react-scroll'
import {MenuBox, MenuLogo, MenuButton, MenuButtonDropDown, MenuBoxDropDown} from './styledMenu'

const Menu = () => {
    return (
        <>
            <MenuBox >
                    
                    <MenuLogo>XD</MenuLogo>
                    
                    <Link className="navButton"  to="about" smooth={true} duration={600}>About me</Link>
                    <Link className="navButton"  to="projects" smooth={true} duration={600}>Projects</Link>
                    <Link className="navButton"  to="contact" smooth={true} duration={600}>Contact</Link>
                    <a className="navButton"  to="/contact">Resume</a>

                    <MenuButton  display={"none"}>EN</MenuButton>
                    
                    <MenuButtonDropDown >HOLA</MenuButtonDropDown>

            </MenuBox>

                <MenuBoxDropDown >

                    <a className="navDropButton"  to="/">Sobre Mi</a>
                    <a className="navDropButton"  to="/projects">Proyectos</a>
                    <a className="navDropButton"  to="/contact">Contacto</a>
                
                    <MenuButton>EN</MenuButton>

                </MenuBoxDropDown>
        </>
    );
}
 
export default Menu;