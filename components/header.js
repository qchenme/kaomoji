import React from "react";
import Link from "next/link";
import { Text, Box } from "rebass";
import styles from "../styles/Header.module.css";

const Header = () => (
  <Box variant="header">
    <Link href="/">
      <Text variant="headKaomoji">
        <span className={styles.spin}></span>
      </Text>
    </Link>
  </Box>
);

export default Header;
