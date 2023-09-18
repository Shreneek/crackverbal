import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/header.component';
import About from './components/about/about.component';
import Gmat from './components/gmat/gmat.component';
import Subscribe from './components/subscribe/subscribe.component';
import Testimonials from './components/testimonials/testimonials.component';
import Timer from './components/timer/timer.component'
import Freetrial from './components/freetrial/freetrial.component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <div className='sub-menus'>
      <Freetrial />
      <Gmat />
      <About />
      <Testimonials />
      <Timer />
      <Subscribe />
    </div>
  </React.StrictMode>
);

reportWebVitals();