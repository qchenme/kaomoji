import { gql } from "graphql-tag";

export const typeDefs = gql`
  "Queries available."
  type Query {
    "Get all kaomojis."
    allKaomojis: [String!]!
    "Get kaomojis in the category specified."
    kaomojiByCategory(category: Category!): KaomojiCategory!
    "Get a random kaomoji."
    randomKaomoji: String!
  }

  "An object that wraps a category and all kaomojis in this category."
  type KaomojiCategory {
    "Category these kaomojis belongs to."
    category: Category!
    "A list of kaomojis."
    kaomojis: [String!]!
  }

  "All categories of kaomojis available."
  enum Category {
    "Love."
    LOVE
    "Happy."
    HAPPY
    "Cool."
    COOL
    "Dance."
    DANCE
    "Celebrate."
    CELEBRATE
    "Sad."
    SAD
    "Embarrassed."
    EMBARRASSED
    "Angry."
    ANGRY
    "Cat."
    CAT
    "Bear."
    BEAR
    "Sleep or sleepy."
    SLEEP
    "Flip table."
    FLIP_TABLE
    "Judging."
    JUDGING
    "Expressionless."
    EXPRESSIONLESS
    "Confused."
    CONFUSED
    "Unbelievable."
    UNBELIEVABLE
    "Cheer up."
    CHEER_UP
    "Bleeding."
    BLEEDING
    "Run away."
    RUN
    "Stalk."
    STALK
    "Yummy."
    YUMMY
    "Lay down."
    LAY_DOWN
  }
`;
