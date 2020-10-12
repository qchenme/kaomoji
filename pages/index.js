import React from "react";
import { ThemeProvider } from "emotion-theming";
import theme from "../theme";
import App from "../components/app";

const Home = () => (
  <ThemeProvider theme={theme}>
    <App currentPage="home" />
  </ThemeProvider>
);

export default Home;
