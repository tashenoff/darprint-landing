import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Advantages } from './components/Advantages';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <Advantages />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;