require("typeface-noto-serif-jp");
require("typeface-open-sans-condensed");

import { ThemeProvider } from "emotion-theming";
import { Box } from "rebass";

import Header from "../components/header";
import Menu from "../components/menu";

import theme from "../theme";
import "../styles/globals.css";
import styles from "../styles/App.module.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <title>♡Kaomoji</title>
      <ThemeProvider theme={theme}>
        <Box className={styles.layout}>
          <Box className={styles.header} variant="header">
            <Header />
          </Box>
          <Box className={styles.sidebar}>
            <Menu />
          </Box>
          <Box className={styles.content}>
            <Component {...pageProps} />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
