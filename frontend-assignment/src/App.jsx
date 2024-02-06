// import { useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import ContactSection from './components/contactSection/ContactSection';

function App() {
  return (
    <div className="screen-container">
      <Header />
      <main className="app-container">
        <Hero />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

