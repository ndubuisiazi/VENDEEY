const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Users {
    _id: ID!
    username: String!
    email: String!
  }

  type Products {
    _id: ID!
    item: String!
    price: Int
    SKU: Int
    Catagory: String!
  }
  type Query {
    users: [Users]
  }

`;

module.exports = typeDefs;
