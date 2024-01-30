/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '0'
      }
    },
    fontFamily: {
      primary: 'Poppins'
    },
    extend: {
      colors: {
        darkblue: {
          DEFAULT: '#0D0D2B',
          secondary: '#252540'
        },
        gray: {
          DEFAULT: '#E0E0E0'
        },
        violet: '#2B076E',
        white: '#ffffff'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px'
    }
  }
};