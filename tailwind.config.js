/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#0B132B',
        accent: {
          1: '#FF4B5C',
          2: '#00C1D4',
          3: '#7D2AE8',
          cream: '#FEF7F0',
          soft: '#F3E8FF',
        },
        cream: {
          50: '#FEF7F0',
          100: '#FDF2F8',
          200: '#FCE7F3',
          300: '#FAD1E8',
          400: '#F8B4D9',
          500: '#F472B6',
          600: '#EC4899',
          700: '#DB2777',
          800: '#BE185D',
          900: '#9D174D',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          from: { boxShadow: '0 0 20px rgba(255, 75, 92, 0.5)' },
          to: { boxShadow: '0 0 30px rgba(255, 75, 92, 0.8)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'creamy-gradient': 'linear-gradient(135deg, #fef7f0 0%, #fdf2f8 25%, #f3e8ff 50%, #e0f2fe 75%, #f0fdf4 100%)',
        'soft-blur': 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
    },
  },
  plugins: [],
}