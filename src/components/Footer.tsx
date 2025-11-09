import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Heart, Sparkles } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'sw';
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ language, darkMode }) => {
  const content = {
    en: {
      home: 'Home',
      about: 'About',
      features: 'Features',
      download: 'Download',
      pricing: 'Pricing',
      contact: 'Contact',
      privacy: 'Privacy',
      terms: 'Terms',
      poweredBy: 'Powered by CIFIC Enterprises',
      crafted: 'Built with love by the Ribera Team'
    },
    sw: {
      home: 'Nyumbani',
      about: 'Kuhusu',
      features: 'Vipengele',
      download: 'Pakua',
      pricing: 'Bei',
      contact: 'Wasiliana',
      privacy: 'Faragha',
      terms: 'Masharti',
      poweredBy: 'Inatengenezwa na CIFIC Enterprises',
      crafted: 'Imetengenezwa kwa upendo na Timu ya Ribera'
    }
  };

  const footerLinks = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'features', href: '#features' },
    { key: 'download', href: '#download' },
    { key: 'pricing', href: '#pricing' },
    { key: 'contact', href: '#contact' },
    { key: 'privacy', href: '#privacy' },
    { key: 'terms', href: '#terms' }
  ];

  return (
    <footer className={`py-16 border-t transition-all duration-1000 ${
      darkMode 
        ? 'bg-gray-900 border-gray-800/50' 
        : 'bg-gradient-to-t from-cream-700 to-cream-800 border-cream-600/50'
    } premium-shadow relative overflow-hidden`}>
      {/* Background Sparkles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0.5, 1.5, 0.5],
            opacity: [0.1, 0.4, 0.1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        >
          <Sparkles className="text-accent-1/20" size={12 + Math.random() * 12} />
        </motion.div>
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="#home"
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.img
                src="/ribera-logo.jpg"
                alt="Ribera logo"
                className="w-14 h-14 rounded-3xl object-cover shadow-xl border border-white/40"
                animate={{ rotate: [0, 4, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                loading="lazy"
              />
              <span className={`text-2xl font-bold font-poppins ${darkMode ? 'text-white' : 'text-gray-900'} elegant-text`}>
                Ribera
              </span>
            </motion.a>
            <p className={`text-base leading-relaxed font-inter max-w-xs ${
              darkMode ? 'text-gray-400' : 'text-gray-300'
            }`}>
              {language === 'en' 
                ? 'Your modern African event & e-ticketing platform — secure, smart, and powered by CIFIC Enterprises.'
                : 'Jukwaa lako la kisasa la matukio na tiketi — salama, janja, na linatengenezwa na CIFIC Enterprises.'
              }
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-xl font-semibold font-poppins ${
              darkMode ? 'text-white' : 'text-gray-900'
            } elegant-text`}>
              {language === 'en' ? 'Quick Links' : 'Viungo vya Haraka'}
            </h3>
            <ul className="space-y-4">
              {footerLinks.slice(0, 4).map((link, index) => (
                <motion.li 
                  key={link.key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className={`text-base font-inter transition-all duration-300 hover:text-accent-1 hover:translate-x-2 ${
                      darkMode ? 'text-gray-400' : 'text-gray-300'
                    }`}
                  >
                    {content[language][link.key as keyof typeof content.en]}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* More Links */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-xl font-semibold font-poppins ${
              darkMode ? 'text-white' : 'text-gray-900'
            } elegant-text`}>
              {language === 'en' ? 'More' : 'Zaidi'}
            </h3>
            <ul className="space-y-4">
              {footerLinks.slice(4).map((link, index) => (
                <motion.li 
                  key={link.key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className={`text-base font-inter transition-all duration-300 hover:text-accent-1 hover:translate-x-2 ${
                      darkMode ? 'text-gray-400' : 'text-gray-300'
                    }`}
                  >
                    {content[language][link.key as keyof typeof content.en]}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Contact */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-xl font-semibold font-poppins ${
              darkMode ? 'text-white' : 'text-gray-900'
            } elegant-text`}>
              {language === 'en' ? 'Connect' : 'Unganisha'}
            </h3>
            <div className="flex space-x-4">
              {[
                { Icon: Instagram, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Linkedin, href: '#' }
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className={`p-4 rounded-3xl backdrop-blur-xl transition-all duration-300 shadow-xl ${
                    darkMode 
                      ? 'bg-gray-800/80 text-gray-400 hover:text-white border border-gray-700/50' 
                      : 'bg-white/20 text-gray-600 hover:text-gray-900 border border-cream-200/50'
                  }`}
                  whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
            <div className={`text-base font-inter ${darkMode ? 'text-gray-400' : 'text-gray-300'}`}>
              <p>support@riberaapp.me</p>
              <p>+255 760 727 437</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className={`mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 ${
            darkMode ? 'border-gray-800/50' : 'border-cream-600/50'
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={`text-base font-inter ${darkMode ? 'text-gray-400' : 'text-gray-300'}`}>
            <p>© 2025 Ribera. {content[language].poweredBy}</p>
          </div>
          
          <div className={`flex items-center space-x-3 text-base font-inter ${
            darkMode ? 'text-gray-400' : 'text-gray-300'
          }`}>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="text-red-500 fill-current" size={20} />
            </motion.div>
            <span>{content[language].crafted}</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;