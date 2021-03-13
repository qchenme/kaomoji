import * as fs from "fs";

export function categoriesReader() {
  const menu = fs.readdirSync("public/kaomoji");
  return menu.map((title) => title.split(".")[0]);
}

export function kaomojiReader(category) {
  const result = fs.readFileSync(`public/kaomoji/${category}.txt`, "utf8");
  return result
    .split("\n")
    .map((el) => el.normalize())
    .filter((el) => el != "");
}

export function snakeToCamel(str) {
  return str.replace(/([-_][a-z])/g, (group) =>
    group.toUpperCase().replace("-", "").replace("_", "")
  );
}
