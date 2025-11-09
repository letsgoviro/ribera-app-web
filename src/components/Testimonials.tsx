import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { fetchTestimonialsByLanguage, type TestimonialRecord } from '../services/appwriteData';

interface TestimonialsProps {
  language: 'en' | 'sw';
  darkMode: boolean;
}

const Testimonials: React.FC<TestimonialsProps> = ({ language, darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [remoteTestimonials, setRemoteTestimonials] = useState<TestimonialRecord[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  const content = {
    en: {
      title: 'What Our Users Say',
      subtitle: 'Join thousands of satisfied event organizers and attendees',
      testimonials: [
        {
          name: 'Amina Hassan',
          role: 'Music Event Organizer',
          event: 'Dar es Salaam Music Festival',
          image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
          text: 'Ribera made managing my music event effortless! The ticketing system is so smooth and my attendees loved the digital experience.',
          rating: 5
        },
        {
          name: 'John Mwalimu',
          role: 'Conference Organizer',
          event: 'Tech Summit Tanzania',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
          text: 'The analytics dashboard helped me understand my audience better. BillPay integration made payments seamless for everyone.',
          rating: 5
        },
        {
          name: 'Grace Kimaro',
          role: 'Wedding Planner',
          event: 'Luxury Weddings TZ',
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
          text: 'My clients love how easy it is to RSVP and manage their guest lists. Ribera has transformed how I handle events.',
          rating: 5
        },
        {
          name: 'David Moshi',
          role: 'Sports Event Manager',
          event: 'Kilimanjaro Marathon',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
          text: 'Managing thousands of participants became so much easier with Ribera. The QR code system worked flawlessly.',
          rating: 5
        }
      ]
    },
    sw: {
      title: 'Watumiaji Wetu Wanasema Nini',
      subtitle: 'Jiunge na maelfu ya waandaaji wa matukio na washiriki wenye furaha',
      testimonials: [
        {
          name: 'Amina Hassan',
          role: 'Mandaaji wa Matukio ya Muziki',
          event: 'Tamasha la Muziki Dar es Salaam',
          image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
          text: 'Ribera imenisaidia kusimamia tamasha langu kwa urahisi kabisa! Mfumo wa tiketi ni laini sana na washiriki wangu walipenda uzoefu wa kidigitali.',
          rating: 5
        },
        {
          name: 'John Mwalimu',
          role: 'Mandaaji wa Mikutano',
          event: 'Mkutano wa Teknolojia Tanzania',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
          text: 'Dashibodi ya uchambuzi ilinisaidia kuelewa hadhira yangu vizuri zaidi. Muunganisho wa BillPay ulifanya malipo kuwa rahisi kwa kila mtu.',
          rating: 5
        },
        {
          name: 'Grace Kimaro',
          role: 'Mpangaji wa Harusi',
          event: 'Harusi za Kifahari TZ',
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
          text: 'Wateja wangu wanapenda jinsi ilivyo rahisi kuthibitisha mahudhurio na kusimamia orodha za wageni. Ribera imebadilisha jinsi ninavyoshughulikia matukio.',
          rating: 5
        },
        {
          name: 'David Moshi',
          role: 'Meneja wa Matukio ya Michezo',
          event: 'Mbio za Kilimanjaro',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
          text: 'Kusimamia maelfu ya washiriki kulikuwa rahisi zaidi na Ribera. Mfumo wa msimbo wa QR ulifanya kazi bila tatizo.',
          rating: 5
        }
      ]
    }
  };

  useEffect(() => {
    let isMounted = true;

    const loadTestimonials = async () => {
      setIsLoading(true);
      try {
        const records = await fetchTestimonialsByLanguage(language);
        if (!isMounted) return;
        if (records.length > 0) {
          setRemoteTestimonials(records);
        } else {
          setRemoteTestimonials(null);
        }
        setFetchError(false);
      } catch (error) {
        console.error('Failed to load testimonials', error);
        if (isMounted) {
          setRemoteTestimonials(null);
          setFetchError(true);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    void loadTestimonials();

    return () => {
      isMounted = false;
    };
  }, [language]);

  const fallbackTestimonials = content[language].testimonials;
  const testimonials = remoteTestimonials?.length ? remoteTestimonials : fallbackTestimonials;

  useEffect(() => {
    setCurrentIndex(0);
  }, [language, remoteTestimonials]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={`py-24 transition-all duration-1000 ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-cream-500 to-cream-600'
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
            <div className="space-y-3">
              <p className={`text-xl md:text-2xl max-w-3xl mx-auto font-inter ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {content[language].subtitle}
              </p>
              {fetchError && (
                <p className="text-sm text-red-400">
                  {language === 'en'
                    ? 'We could not load the latest testimonials. Showing highlights instead.'
                    : 'Hatukuweza kupakia ushuhuda wa hivi karibuni. Tunaonyesha chaguo-msingi kwa sasa.'}
                </p>
              )}
            </div>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 200, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -200, scale: 0.9 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={`relative p-12 md:p-16 rounded-3xl backdrop-blur-xl border premium-shadow ${
                  darkMode 
                    ? 'bg-gray-800/60 border-gray-700/50' 
                    : 'bg-white/90 border-cream-200/50'
                }`}
              >
                {/* Quote Icon */}
                <motion.div 
                  className="absolute top-6 left-6 text-accent-1/30"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Quote size={48} />
                </motion.div>

                {/* Floating Sparkles */}
                {[...Array(5)].map((_, i) => (
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
                    <Star className="text-accent-1/40" size={12 + Math.random() * 8} />
                  </motion.div>
                ))}

                <div className="relative space-y-8">
                  {/* Stars */}
                  <motion.div 
                    className="flex justify-center space-x-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                        {[...Array(testimonials[currentIndex].rating ?? 5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                      >
                        <Star className="text-yellow-400 fill-current" size={24} />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Quote */}
                  <motion.blockquote 
                    className={`text-2xl md:text-3xl italic leading-relaxed font-inter ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    "{testimonials[currentIndex].text}"
                  </motion.blockquote>

                  {/* Author */}
                  <motion.div 
                    className="flex items-center justify-center space-x-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    <motion.img
                      src={
                        testimonials[currentIndex].image ||
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonials[currentIndex].name)}&background=3f3d56&color=ffffff`
                      }
                      alt={testimonials[currentIndex].name}
                      className="w-20 h-20 rounded-full object-cover shadow-xl border-4 border-white"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <div className="text-left">
                      <div className={`font-bold font-poppins text-xl ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      } elegant-text`}>
                        {testimonials[currentIndex].name}
                      </div>
                      <div className={`text-base font-inter ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {testimonials[currentIndex].role}
                      </div>
                      <div className="text-base text-accent-1 font-semibold font-poppins">
                        {testimonials[currentIndex].event}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Enhanced Navigation */}
            <div className="flex items-center justify-center space-x-6 mt-12">
              <motion.button
                onClick={prevTestimonial}
                className={`p-4 rounded-2xl backdrop-blur-xl transition-all duration-300 shadow-xl ${
                  darkMode 
                    ? 'bg-gray-800/80 text-gray-300 hover:text-white border border-gray-700/50' 
                    : 'bg-white/90 text-gray-600 hover:text-gray-900 border border-cream-200/50'
                }`}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={24} />
              </motion.button>

              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-accent-1 scale-125'
                        : darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-cream-300 hover:bg-cream-400'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                className={`p-4 rounded-2xl backdrop-blur-xl transition-all duration-300 shadow-xl ${
                  darkMode 
                    ? 'bg-gray-800/80 text-gray-300 hover:text-white border border-gray-700/50' 
                    : 'bg-white/90 text-gray-600 hover:text-gray-900 border border-cream-200/50'
                }`}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;