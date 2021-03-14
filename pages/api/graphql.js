import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "../../helpers/graphql/types";
import { resolvers } from "../../helpers/graphql/resolvers";

const microCors = require("micro-cors");
const cors = microCors({ allowMethods: ["GET", "POST", "OPTIONS"] });
const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = apolloServer.createHandler({ path: "/api/graphql" });

export default cors((req, res) =>
  req.method === "OPTIONS" ? res.end() : handler(req, res)
);
