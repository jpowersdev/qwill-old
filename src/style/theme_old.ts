// default theme preset

const theme = {
  colors: {
    text: "#333",
    primary: "#333",
    secondary: "#545454",
    bg: "#eee"
  },
  fonts: {
    header: "'Helvetica', sans-serif",
    body: "sans-serif"
  }
};

export const preset = {
  breakpoints: ["576px", "768px", "992px", "1200px"],
  colors: {
    text: "#333",
    background: "#fff",
    primary: "#07c",
    secondary: "#30c",
    muted: "#f6f6f9",
    gray: "#dddddf",
    highlight: "hsla(205, 100%, 40%, 0.125)"
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Helvetica, Arial, sans-serif",
    monospace: "Menlo, monospace"
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
    small: "0 0 2px rgba(0, 0, 0, .25)",
    large: "0 0 24px rgba(0, 0, 0, .125)",
    card: "0 0 4px rgba(0, 0, 0, .125)"
  },
  // rebass variants
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      color: "text"
    },
    display: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: [5, 6, 7]
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.1em"
    }
  },
  variants: {
    avatar: {
      width: "avatar",
      height: "avatar",
      borderRadius: "circle"
    },
    card: {
      p: 2,
      bg: "background",
      boxShadow: "card"
    },
    link: {
      color: "primary"
    },
    nav: {
      fontSize: 1,
      fontWeight: "bold",
      display: "inline-block",
      p: 2,
      color: "inherit",
      textDecoration: "none",
      ":hover,:focus,.active": {
        color: "primary"
      }
    }
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: "bold",
      color: "background",
      bg: "primary",
      borderRadius: "default"
    },
    outline: {
      variant: "buttons.primary",
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 2px"
    },
    secondary: {
      variant: "buttons.primary",
      color: "background",
      bg: "secondary"
    }
  },
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body"
    }
  }
};

export default preset;
