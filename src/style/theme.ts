// default theme preset

const theme = {
  colors: {
    text: '#4F6D7A',
    primary: '#7B96BD',
    secondary: '#7FA8BE',
    bg: '#DBE9EE'
  },
  fonts: {
    header: "'Helvetica', sans-serif",
    body: 'sans-serif'
  }
};

export const preset = {
  breakpoints: ['576px', '768px', '992px', '1200px'],
  colors: {
    text: '#462749',
    background: '#FDFAFA',
    primary: '#8332AC',
    secondary: '#E291D7',
    muted: '#E5EEEC',
    gray: '#dddddf',
    highlight: 'hsla(205, 100%, 40%, 0.125)'
  },
  fonts: {
    body: '"Roboto Slab", Arial, sans-serif',
    heading: '"Work Sans", Arial, sans-serif',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.75,
    heading: 1.25
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    avatar: 48
  },
  radii: {
    default: 8,
    circle: 99999
  },
  shadows: {
    small: '0 0 2px rgba(0, 0, 0, .25)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
    card: '0 0 4px rgba(0, 0, 0, .125)'
  },
  // rebass variants
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      color: 'text'
    },
    display: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: [5, 6, 7]
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    }
  },
  variants: {
    avatar: {
      width: 'avatar',
      height: 'avatar',
      borderRadius: 'circle',
      objectFit: 'cover',
      maxWidth: '100%',
      marginLeft: '0',
      marginRight: '0',
      marginTop: '0',
      paddingBottom: '0',
      paddingLeft: '0',
      paddingRight: '0',
      paddingTop: '0',
      marginBottom: '1.75rem'
    },
    card: {
      p: 2,
      bg: 'background',
      boxShadow: 'card'
    },
    link: {
      color: 'primary'
    },
    nav: {
      fontSize: 1,
      fontWeight: 'bold',
      display: 'inline-block',
      p: 2,
      color: 'inherit',
      textDecoration: 'none',
      ':hover,:focus,.active': {
        color: 'primary'
      }
    }
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: 'bold',
      color: 'background',
      bg: 'primary',
      borderRadius: 'default'
    },
    outline: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 2px'
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'background',
      bg: 'secondary'
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    }
  }
};

export default preset;
