import React from "react";
import { Text } from "rebass";
import styles from "../styles/Header.module.css";

const Header = () => (
  <Text variant="headKaomoji">
    <span className={styles.spin}></span>
  </Text>
);

export default Header;
