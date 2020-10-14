import React from "react";
import Link from "next/link";
import { Button } from "rebass";
import menu from "../assets/menu";

class Menu extends React.Component {
  currentPage(title) {
    if (title === "♥") {
      return "home" === this.props.currentPage;
    }
    return title === this.props.currentPage;
  }

  href(title) {
    if (title === "♥" || title === "home") {
      return "/";
    } else {
      return title;
    }
  }

  render() {
    return (
      <>
        {menu.map((title) => (
          <Link href={`${this.href(title)}`} key={title}>
            {this.currentPage(title) ? (
              <Button variant="menuSelected">{title.toUpperCase()}</Button>
            ) : (
              <Button variant="menuPrimary">{title.toUpperCase()}</Button>
            )}
          </Link>
        ))}
      </>
    );
  }
}

export default Menu;
