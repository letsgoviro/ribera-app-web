import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Briefcase, Handshake, Check, Sparkles, Crown } from 'lucide-react';

interface PricingProps {
  language: 'en' | 'sw';
  darkMode: boolean;
}

const Pricing: React.FC<PricingProps> = ({ language, darkMode }) => {
  const content = {
    en: {
      title: 'Financial Plan & Business Model',
      subtitle: 'Ribera operates on a transparent commission model, ensuring affordability for organizers and trust for attendees.',
      startFree: 'Start Organizing Free',
      becomePartner: 'Become a Partner',
      plans: [
        {
          icon: Gift,
          name: 'Launch Offer',
          period: 'First 3 Months',
          price: 'FREE',
          commission: '0% Commission',
          description: 'Perfect for new organizers to get started',
          features: [
            'Unlimited events',
            'Digital ticketing',
            'BillPay integration',
            'Basic analytics',
            'Email support'
          ],
          popular: true
        },
        {
          icon: Briefcase,
          name: 'Standard Model',
          period: 'After 3 months',
          price: '4.5%',
          commission: 'per ticket + TZS 500',
          description: 'Our standard pricing for regular organizers',
          features: [
            'All Launch Offer features',
            'Advanced analytics',
            'Priority support',
            'Custom branding',
            'Marketing tools'
          ],
          popular: false
        },
        {
          icon: Handshake,
          name: 'Partner Model',
          period: 'Custom Terms',
          price: 'Custom',
          commission: 'Tailored rates',
          description: 'For large venues, festivals, and institutions',
          features: [
            'All Standard features',
            'Dedicated account manager',
            'Custom integrations',
            'White-label options',
            'Volume discounts'
          ],
          popular: false
        }
      ]
    },
    sw: {
      title: 'Mpango wa Kifedha na Mfumo wa Biashara',
      subtitle: 'Ribera inafanya kazi kwa mfumo wa uwazi wa kamisheni, kuhakikisha gharama nafuu kwa waandaaji na uaminifu kwa washiriki.',
      startFree: 'Anza Kupanga Bure',
      becomePartner: 'Kuwa Mshirika',
      plans: [
        {
          icon: Gift,
          name: 'Ofa ya Uzinduzi',
          period: 'Miezi 3 ya Kwanza',
          price: 'BURE',
          commission: 'Kamisheni 0%',
          description: 'Bora kwa waandaaji wapya kuanza',
          features: [
            'Matukio yasiyo na kikomo',
            'Tiketi za kidigitali',
            'Muunganisho wa BillPay',
            'Uchambuzi wa msingi',
            'Msaada wa barua pepe'
          ],
          popular: true
        },
        {
          icon: Briefcase,
          name: 'Mfumo wa Kawaida',
          period: 'Baada ya miezi 3',
          price: '4.5%',
          commission: 'kwa tiketi + TZS 500',
          description: 'Bei yetu ya kawaida kwa waandaaji wa kawaida',
          features: [
            'Vipengele vyote vya Ofa ya Uzinduzi',
            'Uchambuzi wa hali ya juu',
            'Msaada wa kipaumbele',
            'Chapa maalum',
            'Zana za uuzaji'
          ],
          popular: false
        },
        {
          icon: Handshake,
          name: 'Mfumo wa Ushirikiano',
          period: 'Masharti Maalum',
          price: 'Maalum',
          commission: 'Viwango vilivyoratibiwa',
          description: 'Kwa maeneo makubwa, tamasha, na taasisi',
          features: [
            'Vipengele vyote vya Kawaida',
            'Meneja wa akaunti aliyejitolea',
            'Muunganisho maalum',
            'Chaguo za lebo nyeupe',
            'Punguzo la wingi'
          ],
          popular: false
        }
      ]
    }
  };

  return (
    <section id="pricing" className={`py-24 transition-all duration-1000 ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-cream-300 to-cream-400'
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
            <p className={`text-xl md:text-2xl max-w-4xl mx-auto font-inter ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {content[language].subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content[language].plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -20, 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className={`relative p-8 rounded-3xl border-2 transition-all duration-500 hover:shadow-2xl ${
                  plan.popular
                    ? 'border-accent-1 shadow-accent-1/20 bg-gradient-to-br from-accent-1/5 to-accent-2/5'
                    : darkMode
                    ? 'border-gray-700/50 hover:border-gray-600/50 bg-gray-800/50'
                    : 'border-cream-300/50 hover:border-cream-400/50 bg-white/80'
                } premium-shadow backdrop-blur-xl`}
              >
                {plan.popular && (
                  <motion.div 
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gradient-to-r from-accent-1 to-accent-3 text-white px-6 py-3 rounded-2xl font-semibold font-poppins shadow-xl flex items-center space-x-2">
                      <Crown size={18} />
                      <span>{language === 'en' ? 'Most Popular' : 'Maarufu Zaidi'}</span>
                    </div>
                  </motion.div>
                )}

                {/* Floating Sparkles for Popular Plan */}
                {plan.popular && (
                  <>
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute"
                        style={{
                          top: `${20 + Math.random() * 60}%`,
                          left: `${20 + Math.random() * 60}%`,
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
                        <Sparkles className="text-accent-1" size={12 + Math.random() * 8} />
                      </motion.div>
                    ))}
                  </>
                )}

                <div className="relative space-y-8">
                  {/* Icon */}
                  <motion.div 
                    className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-accent-1 to-accent-3 rounded-3xl mx-auto shadow-xl"
                    whileHover={{ 
                      rotate: [0, -15, 15, 0],
                      scale: 1.1,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <plan.icon className="text-white" size={36} />
                  </motion.div>

                  {/* Plan Info */}
                  <div className="text-center space-y-3">
                    <motion.h3 
                      className={`text-2xl font-bold font-poppins ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      } elegant-text`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {plan.name}
                    </motion.h3>
                    <p className={`text-base font-inter ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {plan.period}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center space-y-2">
                    <motion.div 
                      className={`text-5xl font-bold font-poppins ${
                        plan.popular ? 'text-accent-1' : darkMode ? 'text-white' : 'text-gray-900'
                      } elegant-text`}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                    >
                      {plan.price}
                    </motion.div>
                    <p className={`text-base font-inter ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {plan.commission}
                    </p>
                  </div>

                  {/* Description */}
                  <p className={`text-center text-base font-inter ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Check className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                        </motion.div>
                        <span className={`text-sm font-inter leading-relaxed ${
                          darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button 
                    className={`w-full py-4 px-6 rounded-2xl font-semibold font-poppins text-lg shadow-xl transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-accent-1 to-accent-3 text-white hover:shadow-accent-1/50'
                        : darkMode
                        ? 'bg-gray-700 text-white hover:bg-gray-600'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    {index === 2 ? content[language].becomePartner : content[language].startFree}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;