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
  variants: {
    header: {
      minHeight: "4em",
      margin: "2px",
    },
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontSize: 64,
    },
    headKaomoji: {
      fontFamily: "body",
      fontWeight: "bold",
      fontSize: 32,
    },
  },
  buttons: {
    primary: {
      color: "text",
      bg: "transparent",
      font: "body",
      fontWeight: 700,
      cursor: "pointer",
      "&:hover": {
        color: "highlight",
        bg: "text",
      },
    },
    selected: {
      color: "highlight",
      bg: "text",
      font: "body",
      fontWeight: 700,
    },
  },
};
