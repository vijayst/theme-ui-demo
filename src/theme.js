const theme = {
  fonts: {
    body: 'Montserrat',
    heading: 'Raleway',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48],
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#0552ba',
    secondary: '#ffdab9',
    highlight: '#002366',
    white: '#fff',
    white70: 'rgba(255, 255, 255, 0.7)',
    navbar: 'rgba(5, 82, 186, .7)',
    imageOverlay: 'rgba(5, 82, 186, .2)',
    hero: '#ffdab9',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#262629',
        secondary: '#333',
        highlight: '#1d1d1f',
        white: '#fff',
        white70: 'rgba(255, 255, 255, 0.7)',
        navbar: 'rgba(38, 38, 41, .7)',
        imageOverlay: 'rgba(0, 0, 0, .3)',
        hero: '#f2f2f2',
      },
    },
  },
  breakpoints: ['700px', '1000px', '1200px', '1440px'],
  styles: {
    root: {
      margin: 0,
    },
    heading: {
      fontFamily: 'heading',
      margin: 0,
      mb: 3,
      lineHeight: 'heading',
      color: 'text',
    },
    h1: {
      fontSize: 6,
      variant: 'styles.heading',
    },
    h2: {
      fontSize: 5,
      variant: 'styles.heading',
    },
    h3: {
      fontSize: 4,
      variant: 'styles.heading',
    },
    p: {
      fontSize: 2,
      color: 'text',
      lineHeight: 'body',
      fontFamily: 'body',
      textAlign: 'left',
    },
    button: {
      backgroundColor: 'primary',
      color: 'white70',
      px: 4,
      py: 3,
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      fontSize: 2,
      borderRadius: 4,
      transition: 'all 200ms',
      ':focus': {
        outline: '1px solid',
      },
      ':hover': {
        color: 'white',
        backgroundColor: 'highlight',
      },
    },
    card: {
      backgroundColor: 'background',
      height: '300px',
      mr: 4,
      mb: 4,
      padding: 3,
      borderRadius: 8,
      position: 'relative',
      textAlign: 'left',
    },
  },
};

export default theme;
