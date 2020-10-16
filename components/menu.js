import React from "react";
import Link from "next/link";
import { Button } from "rebass";
import menu from "../assets/menu";
import { useRouter } from "next/router";

const Menu = () => {
  const router = useRouter();
  const { category } = router.query;

  function currentPage(id) {
    const page = category?.[0] ?? "heart";
    return id === page;
  }

  function href(id) {
    return id === "heart" ? "/" : id;
  }

  return (
    <>
      {menu.map((entry) => (
        <Link href={`${href(entry.id)}`} key={entry.id}>
          {currentPage(entry.id) ? (
            <Button variant="menuSelected">{entry.title.toUpperCase()}</Button>
          ) : (
            <Button variant="menuPrimary">{entry.title.toUpperCase()}</Button>
          )}
        </Link>
      ))}
    </>
  );
};

export default Menu;
