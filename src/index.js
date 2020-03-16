import { ApolloServer } from "apollo-server";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

// Import your database configuration
import connect from "./db";

export default (async function() {
  try {
    await connect.then(() => {
      console.log("Connected 🚀 To MongoDB Successfully");
    });

    const server = new ApolloServer({
      typeDefs,
      resolvers
    });

    server.listen(4000, () => {
      console.log(`🚀 server running @ http://localhost:4000`);
    });
  } catch (err) {
    console.error(err);
  }
})();
