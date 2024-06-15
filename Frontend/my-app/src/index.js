import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./Style.css"
import "./style2.css"
import "./styleN.css"
import "./styleI.css"
import "./stylem.css"
import "./stylep.css"
import "./stylea.css"
import "./stylec.css"
import "./styler.css"
import Images from './Components/Images';
import Product from './Components/Product';
import Menu from './Components/Menu';
import Review from './Components/Review';
import Contact from './Components/Contact';
import About from './Components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
<App/>
<Images/>
<Menu/>
<Product/>
<Review/>
<Contact/>
<About/>
  </>
)
