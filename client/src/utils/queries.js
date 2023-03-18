import { gql } from '@apollo/client';



export const PRODUCT_LIST = gql`
query Products($category: String!) {
  products(category: $category) {
    category
    img
    price
    productId
    productName
  }
}`

export const MACHINE_TYPE = gql`
query Machinetype($type: String!) {
  machinetype(type: $type) {
    Depth
    Height
    Width
    img
    name
    type
  }
}`

export const Orders = gql`
query Orders($id: ID!) {
  orders(_id: $id) {
    _id
    machinetype
  }
}`;


export const Users = gql`
query User($id: ID!) {
  users(_id: $id) {
    username
    companyname
    email
    phone
    orders {
      _id
      machinetype
      machineselection
      address {
        state
        city
        zip
        streetaddress
      }
    }
  }
}`;

