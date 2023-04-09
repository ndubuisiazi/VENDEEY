const { gql } = require('apollo-server-express');



const typeDefs = gql`
scalar Date

  type User {
    _id: ID
    username: String
    createdAt: Date!
    companyname: String
    email: String
    phone: String
    password: String
    orders: [Order]
  }
  input UpdateUserInput {
    username: String
    companyname: String
    phone: String
    email: String
    password: String
  }
  
  type Products {
    _id: ID
    productId:Int
    productName:String
    category:String
    quantity:Int
    price:Int
    img:String
  }

  type MachineType {
    name:String!
    Height:String
    Width:String
    Depth:String
    img:String
    type:String
  }

  type Order {
    _id: ID!
    items: [Products]
    createdAt: String
    machinename: String
    machineselection: String
    machinetype: String
    address: [Address]
    servicerequest: String
  }

  type Address {
    streetaddress:String
    city:String
    state:String
    zip:String
    country:String
    phone:String
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users(_id:ID!): [User]
    products(category:String!):[Products]
    orders(userId: ID!, orderId: ID!): Order
    user(_id:ID!): User
    machinetype(type:String!):[MachineType]
  }

  type Mutation {
    updateUser(id: ID!, input: UpdateUserInput!): User!
    addUser(
      username: String!,
      email: String!,
      password: String!
      companyname: String
      phone: String
    ): Auth
    login(
      email: String!,
      password: String!
    ): Auth
    createOrder(
      _id:ID!
    ): User
    addMachine(
      _id:ID!, 
      machinetype: String!
      
    ): User
    addItems(
      _id:ID!,
      productId:Int!, 
      productName:String!,
      category:String!,
      img:String
    ): User
    addAddress(
      _id:ID!,
      streetaddress:String,
      city:String,
      state:String,
      zip:String,
      phone:String
    ): User
    addMachineSelection(
      _id:ID!, 
      machineselection:String!,
      machinename: String
    ): User
    addServiceRequest(
      _id:ID!, 
      servicerequest:String!
    ): User
    removeItem(
      _id: ID!,
      productId: Int!
    ): User
  }
`;

module.exports = typeDefs;

// addMachine( _id:ID!, machinetype:String): Orders
