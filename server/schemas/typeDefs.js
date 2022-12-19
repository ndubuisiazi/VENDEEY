const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    orders: [Orders]!
  }

  type Products {
    productId:Int!
    productName:String!
    category:String!
    quantity:Int!
    price:Int!
    img:String!
  }

  type Orders {
    _id: ID!
    address: String
    items:[Products]
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    products:[Products]
    user(username: String!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createOrder( address:String!): Orders
    }
`;

module.exports = typeDefs;
