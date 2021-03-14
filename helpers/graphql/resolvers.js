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

const resolveRandomKaomoji = () => {
  const kaomojis = Object.values(allKaomoji()).flat();

  const min = Math.ceil(0);
  const max = Math.floor(kaomojis.length - 1);
  const random = Math.floor(Math.random() * (max - min + 1));

  return kaomojis[random];
};

export const resolvers = {
  Query: {
    kaomojiByCategory(_parent, args, _context) {
      return resolveKaomojiByCategory(args);
    },
    allKaomojis(_parent, _args, _context) {
      return resolveAllKaomojis();
    },
    randomKaomoji(_parent, _args, _context) {
      return resolveRandomKaomoji();
    },
  },
};
