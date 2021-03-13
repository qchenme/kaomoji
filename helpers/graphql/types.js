import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Query {
    allKaomojis: [String!]!
    kaomojiByCategory(category: Category!): KaomojiCategory!
  }
  type KaomojiCategory {
    category: Category!
    kaomojis: [String!]!
  }
  enum Category {
    LOVE
    HAPPY
    COOL
    DANCE
    CELEBRATE
    SAD
    EMBARRASSED
    ANGRY
    CAT
    SLEEP
    FLIP_TABLE
    JUDGING
    EXPRESSIONLESS
    CONFUSED
    UNBELIEVABLE
    CHEER_UP
    BLEEDING
    RUN
    STALK
    YUMMY
    LAY_DOWN
  }
`;
