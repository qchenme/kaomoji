export default {
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    text: "#261447",
    primary: "#F39C6B",
    secondary: "#CC978E",
    highlight: "#FF3864",
    hint: "#C0BDA5",
    white: "#ffffff",
    green: "#69dc9e",
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: "Open Sans Condensed, sans-serif",
    heading: "Noto Sans JP, sans-serif",
  },
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  variants: {},
  text: {
    headKaomoji: {
      fontFamily: "body",
      fontWeight: "bold",
      fontSize: [16, 18, 24, 32],
    },
  },
  buttons: {
    menuPrimary: {
      color: "primary",
      bg: "transparent",
      display: "block",
      cursor: "pointer",
      marginRight: 1,
      borderRadius: 0,
      borderTopRightRadius: "0.5em",
      borderBottomRightRadius: "0.5em",
      font: "body",
      fontWeight: 400,
      fontSize: [14, 18, 20, 24],
      "&:hover": {
        color: "highlight",
        bg: "text",
        fontWeight: 700,
      },
    },
    menuSelected: {
      color: "highlight",
      bg: "text",
      display: "block",
      cursor: "pointer",
      marginRight: 1,
      borderRadius: 0,
      borderTopRightRadius: "0.5em",
      borderBottomRightRadius: "0.5em",
      font: "body",
      fontWeight: 700,
      fontSize: [14, 18, 20, 24],
    },
    menuHead: {
      color: "green",
      outline: "none",
      bg: "transparent",
      display: "block",
      cursor: "pointer",
      textAlign: "left",
      marginRight: 1,
      borderColor: "primary",
      borderTopRightRadius: "0.5em",
      borderBottomRightRadius: "0.5em",
      font: "body",
      fontWeight: 900,
      fontSize: [14, 18, 20, 24],
    },
    kaomoji: {
      color: "text",
      bg: "transparent",
      cursor: "pointer",
      mx: 4,
      my: 3,
      padding: 2,
      font: "heading",
      fontWeight: 700,
      fontSize: [16, 20, 24, 28],
      cursor: "pointer",
      outline: "none",
      "&:hover": {
        color: "white",
        borderColor: "highlight",
        bg: "highlight",
      },
    },
  },
};
