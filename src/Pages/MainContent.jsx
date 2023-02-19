import { LanguageProvider } from '../Context/languageContext';
import { About } from '../Components/About/about'
import { Projects } from '../Components/Projects/projects';
import { Contact } from '../Components/Contact/contact';
import { Footer } from '../Components/Footer/footer';
import { AppContent } from '../Components/Header/styledHeaderContent';
import { Header } from "../Components/Header/Header";

export const MainContent = () => {

    return (
        <LanguageProvider>
            <AppContent>
                <Header />
                <About />
                <Projects />
                <Contact />
                <Footer />
            </AppContent>
        </LanguageProvider>
    );

}
