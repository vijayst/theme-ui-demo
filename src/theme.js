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
    secondary: '#fa8072',
    accent: '#ffdab9',
    highlight: '#002366',

    white: '#fff',
    white70: 'rgba(255, 255, 255, 0.7)',
  },
  styles: {
    root: {
      margin: 0,
      boxSizing: 'border-box',
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
  },
};

export default theme;
