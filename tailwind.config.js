module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        body: ['"Andada Pro"', 'sans-serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        primary: '#1db954',
        secondary: '#282828',
        tertiary: '#CECECE',
        quaternary: '#484848',
        background: '#000000',
      },
      screens: {
        '3xl': '1600px',
      },
    },
  },
  variants: {
    extend: {
      scale: ['hover'],
      textColor: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar-hide'),
  ],
};