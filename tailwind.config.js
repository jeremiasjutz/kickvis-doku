const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './getProjects.ts',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Satoshi', 'sans-serif'],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h3: { fontWeight: '400' },
          },
        },
      },
      colors: {
        white: '#FAFAFA',
        black: '#090909',
        gray: colors.trueGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
