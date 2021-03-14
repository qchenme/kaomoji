import kaomoji from "../assets/kaomoji";

export function getCategories() {
  return Object.keys(kaomoji);
}

export function kaomojiByCategory(category) {
  return kaomoji[category];
}

export function allKaomoji() {
  return kaomoji;
}

export function snakeToCamel(str) {
  return str.replace(/([-_][a-z])/g, (group) =>
    group.toUpperCase().replace("-", "").replace("_", "")
  );
}
