module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'alpino': ['Alpino-Variable', 'sans-serif']
    },
    borderRadius:{
      md: '0.33rem',
      lg: '1rem'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      grey: {
        light: '#F4F5F7',
        DEFAULT: '#929295',
        dark: '#21243D',
        bluish: '#838AAF'
      },
      blue: {
        lightest: '#8691F4',
        light: '#5E6CD5',
        DEFAULT: '#3B4ACD',
        dark: '#303EAC'
      },
      black: {
        light: '#33395C',
        DEFAULT: '#212549',
        dark: '#1A1E40'
      },
      drugs: {
        red: '#FF6384',
        blue: '#36A2EB',
        yellow: '#FFCE56',
        teal: '#4BC0C0'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
