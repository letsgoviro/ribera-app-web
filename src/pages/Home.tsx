import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Download from '../components/Download';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'sw'>('en');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <Header 
        language={language} 
        setLanguage={setLanguage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Hero language={language} darkMode={darkMode} />
      <About language={language} darkMode={darkMode} />
      <Features language={language} darkMode={darkMode} />
      <HowItWorks language={language} darkMode={darkMode} />
      <Pricing language={language} darkMode={darkMode} />
      <Download language={language} darkMode={darkMode} />
      <Testimonials language={language} darkMode={darkMode} />
      <Contact language={language} darkMode={darkMode} />
      <Footer language={language} darkMode={darkMode} />
    </div>
  );
};

export default Home;