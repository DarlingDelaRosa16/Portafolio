import {AppContent, HeaderContent, ImgContent, WhoAmICotent, InfoHeaderContent} from './styledApp';
import React from 'react';
import Menu from './Components/Menu/menu';
import About from './Components/About/about'
import Projects from './Components/Projects/projects';
import Contact from './Components/Contact/contact';

function App() {
  return (
     <AppContent>
        <HeaderContent>
         <Menu/>
           <InfoHeaderContent>               
               <ImgContent/>
               <WhoAmICotent>Hi, I am Darling <br/>De la Rosa Vanderhorst</WhoAmICotent>
           </InfoHeaderContent>
        </HeaderContent>
        <About/>
        <Projects/>
        <Contact/>
     </AppContent>
  );
}

export default App;
