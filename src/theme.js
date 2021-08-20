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
  space: [0, 4, 8, 16, 32, 64, 96, 128, 224, 256, 512],
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#0552ba',
    secondary: '#ffdab9',
    highlight: '#002366',
    white: '#fff',
    white70: 'rgba(255, 255, 255, 0.7)',
    navbar: 'rgba(5, 82, 186, .7)',
  },
  breakpoints: ['700px', '1000px', '1200px', '1440px'],
  styles: {
    root: {
      margin: 0,
      boxSizing: 'border-box',
    },
    heading: {
      fontFamily: 'heading',
      margin: 0,
      mb: 3,
      lineHeight: 'heading',
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
      backgroundColor: 'white',
      height: '300px',
      mr: 4,
      mb: 4,
      padding: 3,
      borderRadius: 8,
      position: 'relative',
    },
  },
};

export default theme;
