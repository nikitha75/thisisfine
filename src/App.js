import React from 'react';
import './style.css';
import Home from './core/Home';
import About from './core/About';
import HowToBuy from './core/HowToBuy';
import Tokenomics from './core/Tokenomics';
import Roadmap from './core/Roadmap';
import Footer from './core/Footer';


function App() {
  return (
    <>
      <div className='container'>
        <Home />
        <About />
        <HowToBuy />
        <Tokenomics />
        <Roadmap />
        <Footer />
      </div>
    </>
  );
}

export default App;
