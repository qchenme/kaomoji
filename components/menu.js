import React, { useState } from "react";
import Link from "next/link";
import { Button, Box } from "rebass";
import menu from "../assets/menu";
import { useRouter } from "next/router";

const Menu = () => {
  const router = useRouter();
  const { category } = router.query;
  const [expand, setExpandState] = useState(false);

  function isCurrentPage(id) {
    const page = category?.[0] ?? "love";
    return id === page;
  }

  function currentPage() {
    const currentPage = category?.[0] ?? "love";
    const expandIcon = expand ? "▲" : "▼";
    return `${currentPage} ${expandIcon}`;
  }

  function href(id) {
    return id === "love" ? "/" : id;
  }

  function expandMenu() {
    setExpandState(!expand);
  }

  return (
    <>
      <Button variant="menuHead" onClick={expandMenu}>
        {currentPage().toUpperCase()}
      </Button>
      {expand && (
        <Box className="menu">
          {menu.map((entry) => (
            <Link href={`${href(entry.id)}`} key={entry.id}>
              {isCurrentPage(entry.id) ? (
                <Button variant="menuSelected">
                  {entry.title.toUpperCase()}
                </Button>
              ) : (
                <Button variant="menuPrimary" onClick={expandMenu}>
                  {entry.title.toUpperCase()}
                </Button>
              )}
            </Link>
          ))}
        </Box>
      )}
    </>
  );
};

export default Menu;
