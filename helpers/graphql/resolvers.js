import { snakeToCamel, allKaomoji } from "../utils";

const resolveKaomojiByCategory = (args) => {
  const categoryArg = args.category;

  const category = snakeToCamel(categoryArg.toLowerCase());
  const kaomoji = allKaomoji()[category];

  return {
    category: categoryArg,
    kaomojis: kaomoji,
  };
};

const resolveAllKaomojis = () => {
  const kaomojis = Object.values(allKaomoji()).flat();
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
