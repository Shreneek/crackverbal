import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/header.component';
import About from './components/about/about.component';
import Gmat from './components/gmat/gmat.component';
import Subscribe from './components/subscribe/subscribe.component';
import Testimonials from './components/testimonials/testimonials.component';
import CountdownTimer from './components/CountdownTimer/countdownTimer-component'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <div className='sub-menus'>
      <Gmat />
      <About />
      <Testimonials />
      <div>
        <h1>Access free Trial</h1>
        <CountdownTimer />
      </div>
      <Subscribe />
    </div>
  </React.StrictMode>
);

reportWebVitals();
