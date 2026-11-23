import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import '@fontsource/bebas-neue/400.css';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/800.css';
import '@fontsource/montserrat/900.css';
import '@fontsource/montserrat/400-italic.css';
import '@fontsource/montserrat/600-italic.css';
import '@fontsource/montserrat/800-italic.css';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
