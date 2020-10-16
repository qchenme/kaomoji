import React from "react";
import Kaomoji from "../components/kaomoji";
import * as fs from "fs";

const Category = (props) => {
  return <Kaomoji kaomoji={props.kaomoji} />;
};

export async function getStaticPaths() {
  const menu = fs.readdirSync("public");
  const paths = menu.map((title) => ({
    params: { category: [title.split(".")[0]] },
  }));

  // For root /
  paths.push({ params: { category: [] } });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(props) {
  const category = props.params.category?.[0] ?? "heart";
  const result = fs.readFileSync(`public/${category}.txt`, "utf8");
  const kaomoji = result.split("\n");

  return {
    props: {
      kaomoji,
    },
  };
}

export default Category;
