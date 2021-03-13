import React from "react";
import Kaomoji from "../components/kaomoji";
import { categoriesReader, kaomojiReader } from "../helpers/utils";

const Category = (props) => {
  return <Kaomoji kaomoji={props.kaomoji} />;
};

export async function getStaticPaths() {
  const menu = categoriesReader();
  const paths = menu.map((title) => ({
    params: { category: [title] },
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
  const kaomoji = kaomojiReader(category);

  return {
    props: {
      kaomoji,
    },
  };
}

export default Category;
