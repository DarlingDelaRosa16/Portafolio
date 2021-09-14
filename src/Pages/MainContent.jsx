import {AppContent, HeaderContent, TouchMe, ImgContent, InfoMainContent, GreetingsContent, NameContent, InfoHeaderContent, CareerContent} from './styledMainContent';
import React, {useContext} from 'react';
import Menu from '../Components/Menu/menu';
import About from '../Components/About/about'
import Projects from '../Components/Projects/projects';
import Contact from '../Components/Contact/contact';
import Footer from '../Components/Footer/footer';
import {Link} from 'react-scroll'
import LanguageContext from '../Context/languageContext'

const MainContent = () => {
    const [setLanguage, language] = useContext(LanguageContext)

    if(language === "EN"){
        return (
            <AppContent>
            <HeaderContent>
                <Menu/>
                <InfoHeaderContent>               
                    <ImgContent/>
                    <InfoMainContent>
                        <GreetingsContent>Hi, I'm</GreetingsContent>
                        <NameContent> Darling De la Rosa Vanderhorst.</NameContent>
                        <CareerContent>Web Developer</CareerContent>
                        <Link to="contact" smooth={true} duration={1000}> <TouchMe>Get in Touch</TouchMe> </Link>
                    </InfoMainContent>
                </InfoHeaderContent>
            </HeaderContent>
            <About/>
            <Projects/>
            <Contact/>
            <Footer/>
        </AppContent>
        );
    }else{
        return (
            <AppContent>
            <HeaderContent>
                <Menu/>
                <InfoHeaderContent>               
                    <ImgContent/>
                    <InfoMainContent>
                        <GreetingsContent>Hola, soy</GreetingsContent>
                        <NameContent> Darling De la Rosa Vanderhorst.</NameContent>
                        <CareerContent>Desarrollador Web</CareerContent>
                        <Link to="contact" smooth={true} duration={1000}> <TouchMe>Contactame</TouchMe> </Link>
                    </InfoMainContent>
                </InfoHeaderContent>
            </HeaderContent>
            <About/>
            <Projects/>
            <Contact/>
            <Footer/>
        </AppContent>
        )
    }
}
 
export default MainContent;