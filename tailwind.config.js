module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    borderColor: theme => {
      return {
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        primary: '#3CB043',
        secondary: '#466D1D',
        'gray-500': '#6B7280',
        danger: '#F44336',
      };
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
