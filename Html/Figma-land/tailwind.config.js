module.exports = {
  purge: {
    enabled: false,
    content: ['./dist/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#2091f9',
        secondary: '#f15b07',
        first: '#252b42',
        second: '#374754',
        white: '#ffffff',
        gradient: '#222b32',
      },
      fontFamily: { graphik: 'Graphik', roboto: 'Roboto' },
      boxShadow: {
        shadow: '0px 13px 19px 0px rgba(0,0,0,0.07)',
        dramatic: '-31px -22px 19px 0px rgba(0,0,0,0.3)',
      },
      backgroundImage: (theme) => ({
        image: "url('../img/bg-mobile.jpg')",
      }),
      container: {
        center: true,
      },
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '100%',
        '2xl': '1777px',
      },
    },
  },
  variants: {},
  plugins: [],
};
