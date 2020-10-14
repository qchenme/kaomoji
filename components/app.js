import React from "react";
import { Box } from "rebass";

import Header from "./header";
import Menu from "./menu";
import Kaomoji from "./kaomoji";
import styles from "../styles/App.module.css";

const App = (props) => (
  <Box className={styles.layout}>
    <Box className={styles.header} variant="header">
      <Header />
    </Box>
    <Box className={styles.sidebar}>
      <Menu currentPage={props.currentPage} />
    </Box>
    <Box className={styles.content}>
      <Kaomoji category={props.currentPage} />
    </Box>
  </Box>
);

export default App;
