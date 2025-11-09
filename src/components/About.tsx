import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Gift, Star } from 'lucide-react';
import { fetchSiteMetrics, type SiteMetrics } from '../services/appwriteData';

interface AboutProps {
  language: 'en' | 'sw';
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ language, darkMode }) => {
  const [metrics, setMetrics] = useState<SiteMetrics | null>(null);
  const [isLoadingMetrics, setIsLoadingMetrics] = useState(false);
  const [metricsError, setMetricsError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const loadMetrics = async () => {
      setIsLoadingMetrics(true);
      try {
        const data = await fetchSiteMetrics();
        if (!isMounted) return;
        setMetrics(data);
        setMetricsError(false);
      } catch (error) {
        console.error('Unable to fetch site metrics', error);
        if (isMounted) {
          setMetrics(null);
          setMetricsError(true);
        }
      } finally {
        if (isMounted) {
          setIsLoadingMetrics(false);
        }
      }
    };

    void loadMetrics();

    return () => {
      isMounted = false;
    };
  }, []);
  const content = {
    en: {
      title: 'About Ribera',
      description: 'Ribera is a platform that empowers African event organizers and attendees to manage, discover, and enjoy events with digital ease.',
      offerTitle: 'Limited Time Offer!',
      offerText: 'Join now and enjoy 3 months of 0% commission for all your events!',
      joinNow: 'Join Now'
    },
    sw: {
      title: 'Kuhusu Ribera',
      description: 'Ribera ni jukwaa linalowawezesha waandaaji wa matukio na washiriki barani Afrika kupanga na kufurahia matukio kwa urahisi wa kidigitali.',
      offerTitle: 'Ofa ya Muda Mfupi!',
      offerText: 'Jiunge sasa upate miezi 3 bila kamisheni kwa matukio yako yote!',
      joinNow: 'Jiunge Sasa'
    }
  };

  return (
    <section id="about" className={`py-24 transition-all duration-1000 ${
      darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-cream-50 to-cream-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2
              className={`text-4xl md:text-6xl font-bold font-poppins ${
                darkMode ? 'text-white' : 'text-gray-900'
              } elegant-text`}
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {content[language].title}
            </motion.h2>
            
            <motion.p
              className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-inter ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {content[language].description}
            </motion.p>
          </motion.div>

          {/* Enhanced Offer Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3 p-1 rounded-3xl shadow-2xl">
              <motion.div 
                className={`relative rounded-3xl p-12 md:p-16 backdrop-blur-xl ${
                  darkMode ? 'bg-gray-900/90' : 'bg-white/95'
                } premium-shadow`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Animated Sparkle Effects */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      top: `${10 + Math.random() * 80}%`,
                      left: `${10 + Math.random() * 80}%`,
                    }}
                    animate={{
                      scale: [0.5, 1.5, 0.5],
                      opacity: [0.3, 1, 0.3],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      ease: "easeInOut"
                    }}
                  >
                    <Sparkles className="text-yellow-400" size={16 + Math.random() * 8} />
                  </motion.div>
                ))}

                <div className="relative space-y-8">
                  <motion.div 
                    className="flex items-center justify-center space-x-4"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Gift className="text-accent-1" size={40} />
                    </motion.div>
                    <h3 className={`text-3xl md:text-4xl font-bold font-poppins ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    } elegant-text`}>
                      {content[language].offerTitle}
                    </h3>
                  </motion.div>
                  
                  <motion.p
                    className={`text-xl md:text-2xl font-semibold font-inter ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    viewport={{ once: true }}
                  >
                    {content[language].offerText}
                  </motion.p>
                  
                  <motion.button
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.2, type: "spring" }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-accent-1 to-accent-3 text-white px-12 py-6 rounded-2xl font-semibold font-poppins text-xl shadow-2xl hover:shadow-accent-1/50 transition-all duration-300"
                  >
                    {content[language].joinNow}
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                number: metrics?.eventsCreated
                  ? `${metrics.eventsCreated.toLocaleString()}+`
                  : '10K+',
                label: language === 'en' ? 'Events Created' : 'Matukio Yaliyotengenezwa',
              },
              {
                number: metrics?.ticketsSold
                  ? `${metrics.ticketsSold.toLocaleString()}+`
                  : '50K+',
                label: language === 'en' ? 'Tickets Sold' : 'Tiketi Zilizouzwa',
              },
              {
                number: metrics?.happyUsers
                  ? `${metrics.happyUsers.toLocaleString()}+`
                  : '25K+',
                label: language === 'en' ? 'Happy Users' : 'Watumiaji Wenye Furaha',
              },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`text-center space-y-4 p-8 rounded-3xl backdrop-blur-xl ${
                  darkMode ? 'bg-gray-800/50' : 'bg-white/80'
                } shadow-xl premium-shadow`}
              >
                <motion.div
                  className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-1 to-accent-3 bg-clip-text text-transparent font-poppins`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                >
                  {isLoadingMetrics ? (language === 'en' ? '...' : '...') : stat.number}
                </motion.div>
                <div className={`text-lg font-medium font-inter ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {stat.label}
                </div>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: index * 2 }}
                  className="flex justify-center"
                >
                  <Star className="text-accent-1" size={24} />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          {metrics?.updatedAt && (
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {language === 'en'
                ? `Figures updated ${new Date(metrics.updatedAt).toLocaleDateString()}`
                : `Takwimu zimesasishwa ${new Date(metrics.updatedAt).toLocaleDateString()}`}
            </p>
          )}
          {metricsError && !isLoadingMetrics && (
            <p className="text-sm text-red-400">
              {language === 'en'
                ? 'Live metrics are temporarily unavailable. Showing estimates.'
                : 'Takwimu za moja kwa moja hazipatikani kwa sasa. Zinaonyesha makadirio.'}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;