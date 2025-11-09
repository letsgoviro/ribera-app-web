import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  language: 'en' | 'sw';
  setLanguage: (lang: 'en' | 'sw') => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage, darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const content = {
    en: {
      home: 'Home',
      about: 'About',
      features: 'Features',
      download: 'Download',
      pricing: 'Pricing',
      contact: 'Contact',
      getStarted: 'Get Started'
    },
    sw: {
      home: 'Nyumbani',
      about: 'Kuhusu',
      features: 'Vipengele',
      download: 'Pakua',
      pricing: 'Bei',
      contact: 'Wasiliana',
      getStarted: 'Anza Sasa'
    }
  };

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'features', href: '#features' },
    { key: 'download', href: '#download' },
    { key: 'pricing', href: '#pricing' },
    { key: 'contact', href: '#contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-all duration-500 ${
        darkMode 
          ? 'bg-gray-900/90 border-gray-800/50 shadow-2xl' 
          : 'bg-white/90 border-cream-200/50 shadow-xl creamy-gradient'
      } premium-shadow`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.img
              src="/ribera-logo.jpg"
              alt="Ribera logo"
              className="w-12 h-12 rounded-2xl object-cover shadow-lg border border-white/40"
              animate={{ rotate: [0, 4, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              loading="lazy"
            />
            <span className={`text-xl font-bold font-poppins ${darkMode ? 'text-white' : 'text-gray-900'} elegant-text`}>
              Ribera
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.key}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`text-sm font-medium font-poppins transition-all duration-300 hover:text-accent-1 hover:scale-105 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
                whileHover={{ y: -2 }}
              >
                {content[language][item.key as keyof typeof content.en]}
              </motion.a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <motion.div 
              className={`flex rounded-xl p-1 backdrop-blur-md ${
                darkMode ? 'bg-gray-800/80' : 'bg-white/80'
              } shadow-lg`}
              whileHover={{ scale: 1.05 }}
            >
              <motion.button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 text-sm font-medium font-poppins rounded-lg transition-all duration-300 ${
                  language === 'en'
                    ? 'bg-gradient-to-r from-accent-1 to-accent-2 text-white shadow-lg'
                    : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                EN
              </motion.button>
              <motion.button
                onClick={() => setLanguage('sw')}
                className={`px-4 py-2 text-sm font-medium font-poppins rounded-lg transition-all duration-300 ${
                  language === 'sw'
                    ? 'bg-gradient-to-r from-accent-1 to-accent-2 text-white shadow-lg'
                    : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                SW
              </motion.button>
            </motion.div>

            {/* Theme Toggle */}
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-3 rounded-xl backdrop-blur-md transition-all duration-300 shadow-lg ${
                darkMode ? 'bg-gray-800/80 text-gray-300 hover:text-white' : 'bg-white/80 text-gray-600 hover:text-gray-900'
              }`}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? '☀️' : '🌙'}
            </motion.button>

            {/* CTA Button */}
            <motion.button 
              className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-accent-1 to-accent-3 text-white px-6 py-3 rounded-xl font-semibold font-poppins shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              <span>{content[language].getStarted}</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-3 rounded-xl backdrop-blur-md shadow-lg transition-all duration-300 ${
                darkMode ? 'text-gray-300 hover:text-white bg-gray-800/80' : 'text-gray-600 hover:text-gray-900 bg-white/80'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={`md:hidden border-t backdrop-blur-md ${
                darkMode ? 'border-gray-800/50 bg-gray-900/90' : 'border-cream-200/50 bg-white/90'
              } rounded-b-2xl shadow-xl mt-2`}
            >
              <div className="py-6 px-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.key}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`block text-base font-medium font-poppins transition-all duration-300 hover:text-accent-1 hover:translate-x-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    {content[language][item.key as keyof typeof content.en]}
                  </motion.a>
                ))}
                <motion.button 
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-accent-1 to-accent-3 text-white px-6 py-3 rounded-xl font-semibold font-poppins w-full shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={18} />
                  <span>{content[language].getStarted}</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;