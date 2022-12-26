import { Link } from 'react-scroll'
import { FiMenu } from "react-icons/fi";
import { useMenu } from '../../Hooks/useMenu';
import { MenuBox, MenuLogo, MenuButton, MenuButtonDropDown, MenuBoxDropDown } from './styledMenu'
import Resume from '../../Resume/Myresume.pdf'
import "./menu.css"

export const Menu = () => {

    const { toggleLanguage, toggleMenu, onOpen, aboutMe, projects, contact, resume, language } = useMenu()

    return (
        <>
            <MenuBox >

                <MenuLogo> DDV. </MenuLogo>

                <Link className="navButton" to="about" smooth={true} duration={600}>{aboutMe}</Link>
                <Link className="navButton" to="projects" smooth={true} duration={800}>{projects}</Link>
                <Link className="navButton" to="contact" smooth={true} duration={1000}>{contact}</Link>
                <a className="navButton" target="_blank" rel="noreferrer" href={Resume}>{resume}</a>

                <MenuButton onClick={toggleLanguage} display={"none"}>{language}</MenuButton>

                <MenuButtonDropDown onClick={toggleMenu}><FiMenu /></MenuButtonDropDown>

            </MenuBox>

            <MenuBoxDropDown see={onOpen} >

                <Link className="navDropButton" onClick={toggleMenu} to="about" smooth={true} duration={600}>{aboutMe}</Link>
                <Link className="navDropButton" onClick={toggleMenu} to="projects" smooth={true} duration={800}>{projects}</Link>
                <Link className="navDropButton" onClick={toggleMenu} to="contact" smooth={true} duration={1000}>{contact}</Link>
                <a className="navDropButton" onClick={toggleMenu} target="_blank" rel="noreferrer" href={Resume}>{resume}</a>

                <MenuButton onClick={toggleLanguage}>{language}</MenuButton>

            </MenuBoxDropDown>
        </>
    );
}