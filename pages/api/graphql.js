import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "../../helpers/graphql/types";
import { resolvers } from "../../helpers/graphql/resolvers";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
