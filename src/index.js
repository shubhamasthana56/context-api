import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthenticationProvider, DarkThemeProvider } from './context';
import Item from './item';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <AuthenticationProvider>
     <Item/>
     <DarkThemeProvider>
     <App/>
     </DarkThemeProvider>
     
   </AuthenticationProvider>
  </>
  
);


