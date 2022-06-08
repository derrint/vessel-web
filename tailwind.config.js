module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // fontSize: {
    //   xs: '0.75rem',
    //   sm: '0.875rem',
    //   base: '1rem',
    //   lg: '1.125rem',
    //   xl: '1.25rem',
    //   '2xl': '1.5rem',
    //   '3xl': '1.875rem',
    //   '4xl': '2.25rem',
    //   '5xl': '3rem',
    //   '6xl': '4rem',
    // },
    fontFamily: {
      sans: ['Outfit'],
      // sans: ['Objectivity'],
    },
    extend: {
      colors: {
        primary: '#6151FF',
        secondary: '#27E5FF',
        black: '#0D0D10',
        gradient: {
          primary: {
            start: '#3D7BFF',
            end: '#6734FF',
          },
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
      boxShadow: {
        md: '4px 8px 20px 0px #0034B940',
      },
    },
  },
  variants: {},
  plugins: [],
};
