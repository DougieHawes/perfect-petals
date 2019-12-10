// library imports
import React from 'react';

// style imports
import './style.css';

// component imports
import Header from './components/Header';
import Landing from './components/Landing';
import Work from './components/Work';
import Reviews from './components/Reviews';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Header />
      <Landing />
      <Work />
      <Reviews />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
