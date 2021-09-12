import React from 'react'
import "./menu.css"
import {MenuBox, MenuLogo, MenuButton, MenuButtonDropDown, MenuBoxDropDown} from './styledMenu'

const Menu = () => {
    return (
        <>
            <MenuBox >
                    
                    <MenuLogo >XD</MenuLogo>
                    
                    <a className="navButton"  to="/">Sobre Mi</a>
                    <a className="navButton"  to="/projects">Proyectos</a>
                    <a className="navButton"  to="/contact">Contacto</a>
    
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