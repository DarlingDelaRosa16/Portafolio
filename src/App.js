import { LanguageProvider } from './Context/languageContext';
import {MainContent} from './Pages/MainContent';

export function App() {
  return (
     <LanguageProvider>
        <MainContent/>
     </LanguageProvider>
  );
}
