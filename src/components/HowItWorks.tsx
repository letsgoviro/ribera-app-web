import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Ticket, Share2, CreditCard, BarChart3, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  language: 'en' | 'sw';
  darkMode: boolean;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ language, darkMode }) => {
  const content = {
    en: {
      title: 'How Ribera Works',
      subtitle: 'Simple steps to create and manage your events',
      steps: [
        {
          icon: Plus,
          title: 'Create Event',
          description: 'Set up your event details, date, and venue information'
        },
        {
          icon: Ticket,
          title: 'Add Tickets & Prices',
          description: 'Configure ticket types, pricing, and availability'
        },
        {
          icon: Share2,
          title: 'Promote & Share',
          description: 'Share your event and reach your target audience'
        },
        {
          icon: CreditCard,
          title: 'Receive Payments via BillPay',
          description: 'Get paid securely through our integrated payment system'
        },
        {
          icon: BarChart3,
          title: 'Track Insights',
          description: 'Monitor sales, attendance, and event performance'
        }
      ]
    },
    sw: {
      title: 'Jinsi Ribera Inavyofanya Kazi',
      subtitle: 'Hatua rahisi za kutengeneza na kusimamia matukio yako',
      steps: [
        {
          icon: Plus,
          title: 'Tengeneza Tukio',
          description: 'Weka maelezo ya tukio lako, tarehe, na maelezo ya mahali'
        },
        {
          icon: Ticket,
          title: 'Ongeza Tiketi na Bei',
          description: 'Sanidi aina za tiketi, bei, na upatikanaji'
        },
        {
          icon: Share2,
          title: 'Tangaza na Sambaza',
          description: 'Sambaza tukio lako na kufikia hadhira unayolenga'
        },
        {
          icon: CreditCard,
          title: 'Pokea Malipo Kupitia BillPay',
          description: 'Pata malipo kwa usalama kupitia mfumo wetu wa malipo'
        },
        {
          icon: BarChart3,
          title: 'Fuatilia Takwimu',
          description: 'Fuatilia mauzo, mahudhurio, na utendaji wa tukio'
        }
      ]
    }
  };

  return (
    <section className={`py-24 transition-all duration-1000 ${
      darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-cream-200 to-cream-300'
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

          <div className="relative">
            {/* Enhanced Progress Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3 rounded-full transform -translate-y-1/2 shadow-lg">
              <motion.div 
                className="h-full bg-gradient-to-r from-accent-1 to-accent-3 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 2, ease: "easeInOut" }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {content[language].steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="relative text-center space-y-6"
                >
                  {/* Enhanced Step Number */}
                  <motion.div 
                    className={`relative z-10 w-20 h-20 mx-auto rounded-full flex items-center justify-center font-bold text-2xl font-poppins shadow-2xl ${
                      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
                    } premium-shadow`}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.6 }
                    }}
                  >
                    <motion.span
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                    >
                      {index + 1}
                    </motion.span>
                  </motion.div>
                  
                  {/* Enhanced Icon */}
                  <motion.div 
                    className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent-1 to-accent-3 rounded-3xl mx-auto shadow-xl"
                    whileHover={{ 
                      rotate: [0, -15, 15, 0],
                      scale: 1.1,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <step.icon className="text-white" size={28} />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <motion.h3 
                      className={`text-xl font-bold font-poppins ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      } elegant-text`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p 
                      className={`text-sm leading-relaxed font-inter max-w-xs mx-auto ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {step.description}
                    </motion.p>
                  </div>

                  {/* Enhanced Arrow (except last item) */}
                  {index < content[language].steps.length - 1 && (
                    <motion.div 
                      className="hidden lg:block absolute top-10 -right-4 text-accent-1 z-20"
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight size={24} />
                    </motion.div>
                  )}

                  {/* Connecting Line for Mobile */}
                  {index < content[language].steps.length - 1 && (
                    <motion.div 
                      className="lg:hidden w-1 h-8 bg-gradient-to-b from-accent-1 to-accent-2 mx-auto rounded-full"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;