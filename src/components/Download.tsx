import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Zap, Sparkles } from 'lucide-react';
import { fetchDownloadLinks, type DownloadLinks } from '../services/appwriteData';

interface DownloadProps {
  language: 'en' | 'sw';
  darkMode: boolean;
}

const Download: React.FC<DownloadProps> = ({ language, darkMode }) => {
  const [links, setLinks] = useState<DownloadLinks | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadLinks = async () => {
      try {
        const response = await fetchDownloadLinks();
        if (!isMounted) return;
        setLinks(response);
        setHasError(false);
      } catch (error) {
        console.error('Failed to fetch download links', error);
        if (isMounted) {
          setHasError(true);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    void loadLinks();

    return () => {
      isMounted = false;
    };
  }, []);

  const buildPublicDownloadUrl = (fileId?: string) => {
    if (!fileId) return undefined;

    const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
    const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;
    const bucketId = import.meta.env.VITE_APPWRITE_BUCKET_ID;

    if (!endpoint || !projectId || !bucketId) {
      console.warn('Missing Appwrite storage configuration for generating download URL.');
      return undefined;
    }

    const normalizedEndpoint = endpoint.endsWith('/v1') ? endpoint.slice(0, -2) : endpoint;
    return `${normalizedEndpoint}/storage/buckets/${bucketId}/files/${fileId}/download?project=${projectId}&mode=public`;
  };

  const googlePlayUrl = links?.googlePlayUrl;
  const appStoreUrl = links?.appStoreUrl;
  const directApkUrl = links?.directApkUrl ?? buildPublicDownloadUrl(links?.directApkFileId);
  const content = {
    en: {
      title: 'Get Ribera App Today',
      subtitle: 'Download now and start creating amazing events',
      googlePlay: 'Get it on Google Play',
      appStore: 'Download on the App Store',
      directApk: 'Download APK (Quick Install)',
      apkNote: 'For Android users who prefer direct installation.',
      comingSoon: 'Coming Soon'
    },
    sw: {
      title: 'Pakua Programu ya Ribera Leo',
      subtitle: 'Pakua sasa na uanze kutengeneza matukio mazuri',
      googlePlay: 'Pata kwenye Google Play',
      appStore: 'Pakua kwenye App Store',
      directApk: 'Pakua APK (Haraka)',
      apkNote: 'Kwa watumiaji wa Android wanaopendelea kusakinisha moja kwa moja.',
      comingSoon: 'Inakuja Hivi Karibuni'
    }
  };

  return (
    <section id="download" className={`py-24 transition-all duration-1000 ${
      darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-cream-400 to-cream-500'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
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
              <p className={`text-xl md:text-2xl font-inter ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {content[language].subtitle}
              </p>
            </div>

            <div className="space-y-6">
              {/* Google Play Store */}
              <motion.div
                whileHover={{ scale: googlePlayUrl ? 1.05 : 1, y: googlePlayUrl ? -5 : 0 }}
                whileTap={{ scale: googlePlayUrl ? 0.95 : 1 }}
                className={`relative flex items-center space-x-6 w-full p-6 rounded-3xl border-2 backdrop-blur-xl transition-all duration-300 shadow-xl ${
                  darkMode 
                    ? 'border-gray-700/50 hover:border-gray-600/50 bg-gray-900/80' 
                    : 'border-white/50 hover:border-white/80 bg-white/90'
                } premium-shadow ${googlePlayUrl ? 'cursor-pointer' : 'cursor-not-allowed opacity-70'}`}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-white text-2xl">▶</span>
                </motion.div>
                <div className="flex-1 text-left">
                  <div className={`text-sm font-inter ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {googlePlayUrl
                      ? links?.lastUpdatedAt
                        ? `${language === 'en' ? 'Updated' : 'Imeboreshwa'} ${new Date(links.lastUpdatedAt).toLocaleDateString()}`
                        : language === 'en'
                          ? 'Live on Play Store'
                          : 'Inapatikana kwenye Play Store'
                      : isLoading
                        ? language === 'en'
                          ? 'Checking availability...'
                          : 'Inaangalia upatikanaji...'
                        : content[language].comingSoon}
                  </div>
                  <div className={`font-semibold font-poppins text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {content[language].googlePlay}
                  </div>
                </div>
                {googlePlayUrl && (
                  <a
                    href={googlePlayUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0"
                    aria-label="Download from Google Play"
                  />
                )}
              </motion.div>

              {/* App Store */}
              <motion.div
                whileHover={{ scale: appStoreUrl ? 1.05 : 1, y: appStoreUrl ? -5 : 0 }}
                whileTap={{ scale: appStoreUrl ? 0.95 : 1 }}
                className={`relative flex items-center space-x-6 w-full p-6 rounded-3xl border-2 backdrop-blur-xl transition-all duration-300 shadow-xl ${
                  darkMode 
                    ? 'border-gray-700/50 hover:border-gray-600/50 bg-gray-900/80' 
                    : 'border-white/50 hover:border-white/80 bg-white/90'
                } premium-shadow ${appStoreUrl ? 'cursor-pointer' : 'cursor-not-allowed opacity-70'}`}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-white text-2xl">🍎</span>
                </motion.div>
                <div className="flex-1 text-left">
                  <div className={`text-sm font-inter ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {appStoreUrl
                      ? language === 'en'
                        ? 'Live on App Store'
                        : 'Inapatikana kwenye App Store'
                      : isLoading
                        ? language === 'en'
                          ? 'Checking availability...'
                          : 'Inaangalia upatikanaji...'
                        : content[language].comingSoon}
                  </div>
                  <div className={`font-semibold font-poppins text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {content[language].appStore}
                  </div>
                </div>
                {appStoreUrl && (
                  <a
                    href={appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0"
                    aria-label="Download from App Store"
                  />
                )}
              </motion.div>

              {/* Direct APK */}
              <motion.div
                whileHover={{ scale: directApkUrl ? 1.05 : 1, y: directApkUrl ? -5 : 0 }}
                whileTap={{ scale: directApkUrl ? 0.95 : 1 }}
                className={`relative flex items-center space-x-6 w-full p-6 rounded-3xl bg-gradient-to-r from-accent-1 to-accent-3 text-white shadow-2xl transition-all duration-300 ${
                  directApkUrl ? 'hover:shadow-accent-1/50' : 'opacity-70'
                }`}
              >
                <motion.div 
                  className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm"
                  whileHover={{ rotate: [0, -15, 15, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  <Zap size={28} />
                </motion.div>
                <div className="flex-1 text-left">
                  <div className="text-sm text-white/80 font-inter">
                    {directApkUrl
                      ? language === 'en'
                        ? 'Direct install package'
                        : 'Faili ya kusakinisha moja kwa moja'
                      : isLoading
                        ? language === 'en'
                          ? 'Preparing download link...'
                          : 'Inatayarisha kiungo cha kupakua...'
                        : content[language].comingSoon}
                  </div>
                  <div className="font-semibold font-poppins text-lg">
                    {content[language].directApk}
                  </div>
                </div>
                {directApkUrl && (
                  <a
                    href={directApkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0"
                    aria-label="Download APK"
                  />
                )}
              </motion.div>

              <motion.p 
                className={`text-base font-inter ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                {hasError
                  ? language === 'en'
                    ? 'We could not load download information. Please refresh the page or try again later.'
                    : 'Hatukuweza kupakia taarifa za kupakua. Tafadhali onyesha upya ukurasa au jaribu tena baadaye.'
                  : content[language].apkNote}
              </motion.p>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div 
              className="relative z-10"
              animate={{ y: [0, -25, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=800&fit=crop&crop=center"
                alt="Ribera Mobile App"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl premium-shadow"
                loading="lazy"
              />
            </motion.div>

            {/* Enhanced Floating Elements */}
            <motion.div
              animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute top-20 -left-8 p-6 rounded-3xl backdrop-blur-xl glass-card shadow-2xl ${
                darkMode ? 'bg-gray-800/80' : 'bg-white/90'
              }`}
            >
              <div className="flex items-center space-x-4">
                <motion.div 
                  className="w-14 h-14 bg-green-500 rounded-3xl flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-white text-xl">✓</span>
                </motion.div>
                <div>
                  <p className={`text-base font-bold font-poppins ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Download Ready
                  </p>
                  <p className={`text-sm font-inter ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Instant Access
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className={`absolute bottom-20 -right-8 p-6 rounded-3xl backdrop-blur-xl glass-card shadow-2xl ${
                darkMode ? 'bg-gray-800/80' : 'bg-white/90'
              }`}
            >
              <div className="flex items-center space-x-4">
                <motion.div 
                  className="w-14 h-14 bg-accent-2 rounded-3xl flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <Smartphone className="text-white" size={24} />
                </motion.div>
                <div>
                  <p className={`text-base font-bold font-poppins ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Mobile Optimized
                  </p>
                  <p className={`text-sm font-inter ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Perfect Experience
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Premium Glow and Sparkles */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-accent-1/40 to-accent-3/40 rounded-3xl blur-3xl"
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>

            {/* Floating Sparkles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  top: `${15 + Math.random() * 70}%`,
                  left: `${15 + Math.random() * 70}%`,
                }}
                animate={{
                  scale: [0.5, 1.5, 0.5],
                  opacity: [0.3, 1, 0.3],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="text-accent-1/80" size={16 + Math.random() * 8} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Download;