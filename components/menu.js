import React from "react";
import Link from "next/link";
import { Flex, Box, Button } from "rebass";
import menu from "../assets/menu";

class Menu extends React.Component {
  currentPage(title) {
    return title === this.props.currentPage;
  }

  render() {
    return (
      <Flex flexWrap="wrap" mx={-2}>
        {menu.map((title) => (
          <Link href={`${title}`} key={title}>
            <Box width={1 / 6} px={1} py={1}>
              {this.currentPage(title) ? (
                <Button variant="selected">{title.toUpperCase()}</Button>
              ) : (
                <Button variant="primary">{title.toUpperCase()}</Button>
              )}
            </Box>
          </Link>
        ))}
      </Flex>
    );
  }
}

export default Menu;
