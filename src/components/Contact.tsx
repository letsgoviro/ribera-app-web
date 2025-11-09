import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';
import { toast } from 'react-toastify';

interface ContactProps {
  language: 'en' | 'sw';
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ language, darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const content = {
    en: {
      title: 'Contact Us',
      subtitle: "Let's build the future of African events together.",
      name: 'Full Name',
      email: 'Email Address',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      contactInfo: 'Contact Information',
      address: 'DIT, Morogoro Road, Dar es Salaam, Tanzania'
    },
    sw: {
      title: 'Wasiliana Nasi',
      subtitle: 'Tujenge mustakabali wa matukio ya Kiafrika pamoja.',
      name: 'Jina Kamili',
      email: 'Anwani ya Barua Pepe',
      subject: 'Mada',
      message: 'Ujumbe',
      send: 'Tuma Ujumbe',
      sending: 'Inatuma...',
      contactInfo: 'Maelezo ya Mawasiliano',
      address: 'DIT, Barabara ya Morogoro, Dar es Salaam, Tanzania'
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast.success(language === 'en' ? 'Message sent successfully!' : 'Ujumbe umetumwa kwa mafanikio!');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className={`py-24 transition-all duration-1000 ${
      darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-cream-600 to-cream-700'
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

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`p-10 rounded-3xl backdrop-blur-xl border premium-shadow ${
                darkMode 
                  ? 'bg-gray-900/60 border-gray-700/50' 
                  : 'bg-white/90 border-cream-200/50'
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label className={`block text-sm font-medium mb-3 font-poppins ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {content[language].name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-6 py-4 rounded-2xl border-2 backdrop-blur-sm transition-all duration-300 focus:ring-4 focus:ring-accent-1/20 focus:border-accent-1 ${
                        darkMode 
                          ? 'bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400' 
                          : 'bg-cream-50/50 border-cream-200/50 text-gray-900 placeholder-gray-500'
                      } shadow-lg`}
                      placeholder={content[language].name}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label className={`block text-sm font-medium mb-3 font-poppins ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {content[language].email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-6 py-4 rounded-2xl border-2 backdrop-blur-sm transition-all duration-300 focus:ring-4 focus:ring-accent-1/20 focus:border-accent-1 ${
                        darkMode 
                          ? 'bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400' 
                          : 'bg-cream-50/50 border-cream-200/50 text-gray-900 placeholder-gray-500'
                      } shadow-lg`}
                      placeholder={content[language].email}
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className={`block text-sm font-medium mb-3 font-poppins ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {content[language].subject}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-6 py-4 rounded-2xl border-2 backdrop-blur-sm transition-all duration-300 focus:ring-4 focus:ring-accent-1/20 focus:border-accent-1 ${
                      darkMode 
                        ? 'bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400' 
                        : 'bg-cream-50/50 border-cream-200/50 text-gray-900 placeholder-gray-500'
                    } shadow-lg`}
                    placeholder={content[language].subject}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className={`block text-sm font-medium mb-3 font-poppins ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {content[language].message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full px-6 py-4 rounded-2xl border-2 backdrop-blur-sm transition-all duration-300 focus:ring-4 focus:ring-accent-1/20 focus:border-accent-1 resize-none ${
                      darkMode 
                        ? 'bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400' 
                        : 'bg-cream-50/50 border-cream-200/50 text-gray-900 placeholder-gray-500'
                    } shadow-lg`}
                    placeholder={content[language].message}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-accent-1 to-accent-3 text-white px-8 py-5 rounded-2xl font-semibold font-poppins text-lg shadow-2xl hover:shadow-accent-1/50 transition-all duration-300"
                >
                  <Send size={24} />
                  <span>{content[language].send}</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <motion.div 
                className={`p-10 rounded-3xl backdrop-blur-xl border premium-shadow ${
                  darkMode 
                    ? 'bg-gray-900/60 border-gray-700/50' 
                    : 'bg-white/90 border-cream-200/50'
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.h3 
                  className={`text-3xl font-bold mb-8 font-poppins ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  } elegant-text`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {content[language].contactInfo}
                </motion.h3>

                <div className="space-y-6">
                  <motion.div 
                    className="flex items-center space-x-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-r from-accent-1 to-accent-3 rounded-3xl flex items-center justify-center shadow-xl"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.6 }}
                    >
                      <Mail className="text-white" size={24} />
                    </motion.div>
                    <div>
                      <div className={`font-semibold font-poppins text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        support@riberaapp.me
                      </div>
                      <div className={`text-base font-inter ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        info@riberaapp.me
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center space-x-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-r from-accent-1 to-accent-3 rounded-3xl flex items-center justify-center shadow-xl"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.6 }}
                    >
                      <Phone className="text-white" size={24} />
                    </motion.div>
                    <div>
                      <div className={`font-semibold font-poppins text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        +255 760 727 437
                      </div>
                      <div className={`text-base font-inter ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        +255 714 530 292
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center space-x-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-r from-accent-1 to-accent-3 rounded-3xl flex items-center justify-center shadow-xl"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.6 }}
                    >
                      <MapPin className="text-white" size={24} />
                    </motion.div>
                    <div>
                      <div className={`font-semibold font-poppins text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {content[language].address}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Floating Sparkles */}
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
                      opacity: [0.2, 0.8, 0.2],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 4 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      ease: "easeInOut"
                    }}
                  >
                    <Sparkles className="text-accent-1/40" size={12 + Math.random() * 8} />
                  </motion.div>
                ))}
              </motion.div>

              {/* Map Placeholder */}
              <motion.div 
                className={`h-80 rounded-3xl overflow-hidden premium-shadow ${
                  darkMode ? 'bg-gray-900' : 'bg-cream-100'
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="w-full h-full flex items-center justify-center relative">
                  <div className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <MapPin size={64} className="mx-auto mb-4 text-accent-1" />
                    <p className="text-xl font-poppins font-semibold">Interactive Map</p>
                    <p className="text-lg font-inter">Dar es Salaam, Tanzania</p>
                  </div>
                  {/* Map Sparkles */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{
                        top: `${30 + Math.random() * 40}%`,
                        left: `${30 + Math.random() * 40}%`,
                      }}
                      animate={{
                        scale: [0.8, 1.5, 0.8],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 3 + Math.random(),
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "easeInOut"
                      }}
                    >
                      <Sparkles className="text-accent-1/60" size={16} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;