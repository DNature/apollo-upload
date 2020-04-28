import { gql } from 'apollo-server';

export default gql`
  type File {
    id: ID!
    filename: String!
    mimetype: String!
    path: String!
  }

  type Query {
    hello: String
    files: [File!]
  }

  type Mutation {
    uploadFile(file: Upload!): File!
  }
`;
