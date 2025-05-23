/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        dark: {
          DEFAULT: '#000000',
          100: '#121212',
          200: '#1A1A1A',
          300: '#232323',
        },
        electric: {
          DEFAULT: '#00b4ff',
          light: '#33c3ff',
          dark: '#0091cc',
        },
        purple: {
          DEFAULT: '#6200ea',
          light: '#7c26ff',
          dark: '#4a00b3',
        },
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'tech-pattern': 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.8 8.544 15.214 9.96l9.9-9.9h-2.77zm22.628 0L53.8 8.828 52.385 10.243 41.8 0h3.17zm-16.97 0L36.8 8.8 35.385 10.214 26.8 0h1.2zM32 0l8.485 8.485-1.414 1.414L30 0h2zM0 0c.593.59 1.183 1.183 1.778 1.778l-1.415 1.415L0 2.828V0zm0 5.373l3.657 3.657-1.414 1.414L0 8.2V5.374zm0 5.656l6.485 6.485-1.414 1.414L0 13.8v-2.77zm0 5.656l9.314 9.314-1.414 1.414L0 19.4v-2.714zM0 22.343l12.142 12.142-1.414 1.414L0 25v-2.657zm0 5.657l14.97 14.97-1.415 1.415L0 30.656v-2.656zm0 5.657l17.8 17.8-1.415 1.415L0 36.314v-2.657zm0 5.657l20.627 20.627-1.414 1.414L0 41.97v-2.656zm0 5.657l23.455 23.455-1.414 1.414L0 47.627V44.97zm0 5.657l26.283 26.283-1.414 1.414L0 53.284v-2.657zm0 5.657l29.11 29.11-1.414 1.414L0 58.94v-2.656zm0 5.657l31.94 31.94-1.415 1.415L0 60h2.828L60 2.828V0H57.172zm0 5.657L34.627 34.627l1.414-1.414L60 8.485V5.657zm0 5.657L28.97 28.97l1.414-1.414L60 14.142v-2.827zm0 5.657L23.314 23.314l1.414-1.414L60 19.8v-2.828zm0 5.657L17.657 17.657l1.414-1.414L60 25.456v-2.828zm0 5.657L12 12l1.414-1.414L60 31.113v-2.828zm0 5.657L6.343 6.343 7.757 4.93 60 36.77v-2.828zm0 5.657L.686.686 2.1-.728 60 42.427v-2.828z\' fill=\'%2300b4ff\' fill-opacity=\'0.02\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
      },
    },
  },
  plugins: [],
};