import React from 'react';
import { LanguageProvider } from './Context/languageContext';
import MainContent from './Pages/MainContent';

function App() {
  return (
     <LanguageProvider>
        <MainContent/>
     </LanguageProvider>
  );
}

export default App;
