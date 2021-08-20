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

    white: '#fff',
    white70: 'rgba(255, 255, 255, 0.7)',
  },
  styles: {
    root: {
      margin: 0,
      boxSizing: 'border-box',
    },
    h1: {
      fontFamily: 'heading',
      fontSize: 6,
    },
    h2: {
      fontFamily: 'heading',
      fontSize: 5,
      margin: 0,
      mb: 3,
      lineHeight: 'heading',
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
      boxShadow: '0px 2px 1px 1px rgba(0, 0, 0, .3)',
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
      flex: 1,
      maxWidth: '25%',
      height: '200px',
      mr: 4,
      padding: 3,
      borderRadius: 8,
    },
  },
};

export default theme;