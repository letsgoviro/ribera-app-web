import React from 'react';
import { motion } from 'framer-motion';
import { Ticket, CreditCard, Calendar, Globe, Moon, Shield, Sparkles } from 'lucide-react';

interface FeaturesProps {
  language: 'en' | 'sw';
  darkMode: boolean;
}

const Features: React.FC<FeaturesProps> = ({ language, darkMode }) => {
  const content = {
    en: {
      title: 'Core Features',
      subtitle: 'Everything you need to create, manage, and enjoy events',
      features: [
        {
          icon: Ticket,
          title: 'Smart Digital Ticketing',
          description: 'QR code tickets with real-time validation and fraud protection'
        },
        {
          icon: CreditCard,
          title: 'BillPay Payments',
          description: 'Secure payment processing with multiple payment options'
        },
        {
          icon: Calendar,
          title: 'Event Management Dashboard',
          description: 'Complete control over your events with analytics and insights'
        },
        {
          icon: Globe,
          title: 'Bilingual Interface',
          description: 'Full support for English and Swahili languages'
        },
        {
          icon: Moon,
          title: 'Dark & Light Themes',
          description: 'Choose your preferred interface theme for better experience'
        },
        {
          icon: Shield,
          title: 'Enterprise-Grade Security',
          description: 'Encrypted infrastructure and compliance safeguards for every transaction'
        }
      ]
    },
    sw: {
      title: 'Vipengele Vikuu',
      subtitle: 'Kila kitu unachohitaji kutengeneza, kusimamia, na kufurahia matukio',
      features: [
        {
          icon: Ticket,
          title: 'Tiketi za Kidigitali',
          description: 'Tiketi za msimbo wa QR zenye uthibitisho wa wakati halisi na ulinzi dhidi ya udanganyifu'
        },
        {
          icon: CreditCard,
          title: 'Malipo Kupitia BillPay',
          description: 'Uchakataji salama wa malipo na chaguo nyingi za malipo'
        },
        {
          icon: Calendar,
          title: 'Dashibodi ya Usimamizi wa Matukio',
          description: 'Udhibiti kamili wa matukio yako pamoja na uchambuzi na maarifa'
        },
        {
          icon: Globe,
          title: 'Kiolesura cha Lugha Mbili',
          description: 'Msaada kamili wa lugha za Kiingereza na Kiswahili'
        },
        {
          icon: Moon,
          title: 'Mandhari Meusi na Meupe',
          description: 'Chagua mandhari unayopendelea kwa uzoefu bora zaidi'
        },
        {
          icon: Shield,
          title: 'Usalama wa Kiwango cha Biashara',
          description: 'Miundombinu iliyosimbwa na uzingatiaji wa viwango kwa kila muamala'
        }
      ]
    }
  };

  return (
    <section id="features" className={`py-24 transition-all duration-1000 ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-cream-100 to-cream-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
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
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto font-inter ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {content[language].subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content[language].features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className={`relative group p-8 rounded-3xl backdrop-blur-xl border transition-all duration-500 hover:shadow-2xl ${
                  darkMode 
                    ? 'bg-gray-800/60 border-gray-700/50 hover:border-gray-600/50 hover:shadow-accent-1/20' 
                    : 'bg-white/80 border-cream-200/50 hover:border-cream-300/50 hover:shadow-accent-1/10'
                } premium-shadow`}
              >
                {/* Enhanced Glow Effect */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-1/10 to-accent-3/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                ></motion.div>
                
                {/* Floating Sparkles */}
                <motion.div
                  className="absolute top-4 right-4"
                  animate={{ 
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.5, 1, 0.5],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  <Sparkles className="text-accent-1/60" size={20} />
                </motion.div>

                <div className="relative space-y-6">
                  <motion.div 
                    className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-accent-1 to-accent-3 rounded-3xl mx-auto shadow-xl"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="text-white" size={36} />
                  </motion.div>
                  
                  <motion.h3 
                    className={`text-2xl font-bold font-poppins ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    } elegant-text`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {feature.title}
                  </motion.h3>
                  
                  <motion.p 
                    className={`text-base leading-relaxed font-inter ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {feature.description}
                  </motion.p>
                </div>

                {/* Hover Effect Border */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-accent-1/50 transition-all duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                ></motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;