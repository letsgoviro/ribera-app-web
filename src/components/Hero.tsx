import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Users, ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'sw';
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ language, darkMode }) => {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);

  const taglines = [
    { en: 'Ribera — The Smart Way to Host Events.', sw: 'Ribera — Njia ya Kisasa ya Kuandaa Matukio.' },
    { en: 'Connect. Celebrate. Cash Out — Instantly.', sw: 'Unganika. Sherehekea. Pokea Malipo — Papo Hapo.' },
    { en: 'Built for Organizers, Loved by Attendees.', sw: 'Imeundwa kwa Waandaaji, Inapendwa na Washiriki.' },
    { en: 'Simple Events. Fast Payments.', sw: 'Matukio Rahisi. Malipo Haraka.' },
    { en: 'Your Event, Your Way — With Ribera.', sw: 'Tukio Lako, Kwa Njia Yako — Ukiwa na Ribera.' },
    { en: 'Digitize Your Events, Maximize Your Reach.', sw: 'Badilisha Matukio Yako Kuwa Kidigitali, Fikia Watu Zaidi.' },
    { en: 'Africa\'s Most Intuitive Event Platform.', sw: 'Jukwaa la Matukio la Kisasa Zaidi Barani Afrika.' },
    { en: 'Plan. Host. Grow.', sw: 'Panga. Andaa. Kua.' },
    { en: 'Seamless Payments, Limitless Possibilities.', sw: 'Malipo Rahisi, Fursa Zisizo na Kikomo.' },
    { en: 'Secure, Simple, and Made for You.', sw: 'Salama, Rahisi, na Imetengenezwa kwa Ajili Yako.' },
    { en: 'From Tickets to Memories — All in One App.', sw: 'Kutoka Tiketi Hadi Kumbukumbu — Yote Ndani ya App Moja.' },
    { en: 'Empowering Organizers, Delighting Audiences.', sw: 'Kuwawezesha Waandaaji, Kuwafurahisha Washiriki.' },
    { en: 'Experience the Future of Events — Today.', sw: 'Pata Uzoefu wa Baadaye wa Matukio — Leo.' },
    { en: 'More Than Events — It\'s a Movement.', sw: 'Zaidi ya Matukio — Ni Harakati.' },
    { en: 'Ribera: Where Every Event Starts Right.', sw: 'Ribera: Kila Tukio Linaanza kwa Usahihi.' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTaglineIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [taglines.length]);

  const content = {
    en: {
      headline: 'Plan, Connect, Celebrate Effortlessly.',
      subtext: 'Your modern African event & e-ticketing platform — secure, smart, and powered by CIFIC Enterprises.',
      downloadApp: 'Download App',
      joinOrganizer: 'Join as Organizer',
      learnMore: 'Learn More'
    },
    sw: {
      headline: 'Panga. Unganisha. Sherehekea Kwa Urahisi.',
      subtext: 'Jukwaa lako la kisasa la matukio na tiketi — salama, janja, na linatengenezwa na CIFIC Enterprises.',
      downloadApp: 'Pakua Programu',
      joinOrganizer: 'Jiunge Kama Mandaaji',
      learnMore: 'Jifunze Zaidi'
    }
  };

  const paymentCardContent = language === 'en'
    ? {
        title: 'BillPay Connected',
        subtitle: 'Payments across every mobile network and bank card.'
      }
    : {
        title: 'BillPay Imeunganishwa',
        subtitle: 'Malipo ya harakati mitandao yote ya simu na kadi za benki.'
      };

  return (
    <section id="home" className={`relative min-h-screen flex items-center overflow-hidden transition-all duration-1000 ${
      darkMode ? 'bg-gray-900' : 'creamy-gradient'
    }`}>
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-accent-1/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent-3/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-2/15 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        ></motion.div>
        
        {/* Floating Sparkles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="text-accent-1/60" size={16 + Math.random() * 8} />
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className={`text-5xl md:text-7xl font-bold leading-tight font-poppins ${
                  darkMode ? 'text-white' : 'text-gray-900'
                } elegant-text`}
              >
                {content[language].headline.split(' ').map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    className="inline-block mr-4"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
              
              {/* Rotating Taglines */}
              <div className="h-16 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentTaglineIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className={`text-xl md:text-2xl font-semibold font-inter ${
                      darkMode ? 'text-accent-1' : 'text-accent-1'
                    }`}
                  >
                    {taglines[currentTaglineIndex][language]}
                  </motion.p>
                </AnimatePresence>
              </div>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className={`text-xl md:text-2xl leading-relaxed font-inter ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {content[language].subtext}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <motion.button 
                className="flex items-center justify-center space-x-3 bg-gradient-to-r from-accent-1 to-accent-3 text-white px-10 py-5 rounded-2xl font-semibold font-poppins shadow-2xl hover:shadow-accent-1/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={24} />
                <span className="text-lg">{content[language].downloadApp}</span>
              </motion.button>
              
              <motion.button 
                className={`flex items-center justify-center space-x-3 px-10 py-5 rounded-2xl font-semibold font-poppins border-2 backdrop-blur-md shadow-xl transition-all duration-300 ${
                  darkMode 
                    ? 'border-gray-700 text-white hover:bg-gray-800/80' 
                    : 'border-white/50 text-gray-900 hover:bg-white/80'
                }`}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users size={24} />
                <span className="text-lg">{content[language].joinOrganizer}</span>
              </motion.button>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className={`flex items-center space-x-3 text-accent-1 hover:text-accent-2 transition-all duration-300 group font-poppins font-medium`}
              whileHover={{ x: 10 }}
            >
              <span className="text-lg">{content[language].learnMore}</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
            </motion.button>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <motion.div 
              className="relative z-10"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=800&fit=crop&crop=center"
                alt="Ribera App Interface"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl premium-shadow"
                loading="lazy"
              />
            </motion.div>
            
            {/* Enhanced Floating Elements */}
            <motion.div
              animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute top-16 -left-8 p-6 rounded-3xl backdrop-blur-xl glass-card shadow-2xl ${
                darkMode ? 'bg-gray-800/80' : 'bg-white/90'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl">✓</span>
                </div>
                <div>
                  <p className={`text-base font-bold font-poppins ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Ticket Verified
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    QR Code Scanned
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [15, -15, 15], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className={`absolute bottom-16 -right-8 p-6 rounded-3xl backdrop-blur-xl glass-card shadow-2xl ${
                darkMode ? 'bg-gray-800/80' : 'bg-white/90'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent-2 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl">💳</span>
                </div>
                <div>
                  <p className={`text-base font-bold font-poppins ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {paymentCardContent.title}
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {paymentCardContent.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Premium Glow Effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-accent-1/30 to-accent-3/30 rounded-3xl blur-2xl"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;