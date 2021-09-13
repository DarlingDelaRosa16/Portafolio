import {AppContent, HeaderContent, TouchMe, ImgContent, InfoMainContent, GreetingsContent, NameContent, InfoHeaderContent, CareerContent} from './styledApp';
import React from 'react';
import Menu from './Components/Menu/menu';
import About from './Components/About/about'
import Projects from './Components/Projects/projects';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';
import {Link} from 'react-scroll'

function App() {
  return (
     <AppContent>
        <HeaderContent>
         <Menu/>
           <InfoHeaderContent>               
               <ImgContent/>
               <InfoMainContent>
                  <GreetingsContent>Hi, I'm</GreetingsContent>
                  <NameContent> Darling De la<br/>Rosa Vanderhorst</NameContent>
                  <CareerContent>Web Developer</CareerContent>
                  <Link to="contact" smooth={true} duration={600}> <TouchMe>Touch me</TouchMe> </Link>
               </InfoMainContent>
           </InfoHeaderContent>
        </HeaderContent>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
     </AppContent>
  );
}

export default App;
