import { Link } from 'react-scroll'
import {Menu} from '../Components/Menu/menu';
import {About} from '../Components/About/about'
import {Projects} from '../Components/Projects/projects';
import { Contact } from '../Components/Contact/contact';
import {Footer} from '../Components/Footer/footer';
import { AppContent, HeaderContent, TouchMe, ImgContent, InfoMainContent, GreetingsContent, NameContent, InfoHeaderContent, CareerContent } from './styledMainContent';
import { useMainContent } from '../Hooks/useMainContent';

export const MainContent = () => {

    const { adaptedWidth, greetings, nameContent, careerContent, touchMe } = useMainContent()
    return (
        <AppContent width={adaptedWidth}>
            <HeaderContent>
                <Menu />
                <InfoHeaderContent>
                    <ImgContent />
                    <InfoMainContent>
                        <GreetingsContent>{greetings}</GreetingsContent>
                        <NameContent>{nameContent}</NameContent>
                        <CareerContent>{careerContent}</CareerContent>
                        <Link to="contact" smooth={true} duration={1000}><TouchMe>{touchMe}</TouchMe> </Link>
                    </InfoMainContent>
                </InfoHeaderContent>
            </HeaderContent>
            <About />
            <Projects />
            <Contact />
            <Footer />
        </AppContent>
    );

}
