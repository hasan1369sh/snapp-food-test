
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <ThemeProvider dir='rtl' >
	   <App />
   </ThemeProvider>
);

 