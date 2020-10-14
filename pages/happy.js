import React from "react";
import { ThemeProvider } from "emotion-theming";
import theme from "../theme";
import App from "../components/app";

const Home = () => (
  <ThemeProvider theme={theme}>
    <App currentPage="happy" />
  </ThemeProvider>
);

export default Home;
