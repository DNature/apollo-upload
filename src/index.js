import { ApolloServer } from 'apollo-server-express';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import express from 'express';
// import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';

const app = express();

// Import your database configuration
import connect from './db';

export default (async function () {
  try {
    await connect.then(() => {
      console.log('Connected 🚀 To MongoDB Successfully');
    });

    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });

    // app.use(bodyParser.json());

    const dir = path.join(__dirname, '../images');
    app.use('/images', express.static(dir));

    console.log(dir);

    app.use(cors('*'));
    server.applyMiddleware({ app });
    app.listen(4000, () => {
      console.log(`🚀 server running @ http://localhost:4000`);
    });
  } catch (err) {
    console.error(err);
  }
})();
