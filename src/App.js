import React from 'react';
import './App.css';
import 'lenis/dist/lenis.css';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import { SmoothScrollProvider } from './context/SmoothScrollContext';

const App = () => {
  return (
    <SmoothScrollProvider>
      <div className="App">
        <Navbar />
        <Header />
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <FindUs />
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}

export default App;
