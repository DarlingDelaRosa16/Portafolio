import {AppContent, HeaderContent, TouchMe, ImgContent, InfoMainContent, GreetingsContent, NameContent, InfoHeaderContent, CareerContent} from './styledApp';
import React from 'react';
import Menu from './Components/Menu/menu';
import About from './Components/About/about'
import Projects from './Components/Projects/projects';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';

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
                  <TouchMe>Touch me</TouchMe>
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
