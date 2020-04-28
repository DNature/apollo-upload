import { ApolloServer } from 'apollo-server-express';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import express from 'express';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';

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

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    const dir = path.join(process.cwd(), 'images');
    console.log(dir);
    app.use(express.static(dir));
    app.use('/images', express.static(dir));

    app.use(cors('*'));
    server.applyMiddleware({ app });
    app.listen(4000, () => {
      console.log(`🚀 server running @ http://localhost:4000`);
    });
  } catch (err) {
    console.error(err);
  }
})();
