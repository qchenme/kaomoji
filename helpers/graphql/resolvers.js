import { categoriesReader, kaomojiReader, snakeToCamel } from "../utils";

const resolveKaomojiByCategory = (args) => {
  const categoryArg = args.category;

  const category = snakeToCamel(categoryArg.toLowerCase());
  const kaomoji = kaomojiReader(category);

  return {
    category: categoryArg,
    kaomojis: kaomoji,
  };
};

const resolveAllKaomojis = () => {
  const categories = categoriesReader();
  const kaomojis = categories.map((cat) => kaomojiReader(cat)).flat();
  return kaomojis;
};

export const resolvers = {
  Query: {
    kaomojiByCategory(_parent, args, _context) {
      return resolveKaomojiByCategory(args);
    },
    allKaomojis(_parent, _args, _context) {
      return resolveAllKaomojis();
    },
  },
};
