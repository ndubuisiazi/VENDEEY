import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const UPDATE_USER = gql`
  mutation UpdateUser($updateUserId: ID!, $input: UpdateUserInput!) {
    updateUser(id: $updateUserId, input: $input) {
      createdAt
      username
      companyname
      email
      phone
      password
    }
  }
`;
export const ADD_USER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!, $companyname: String, $phone: String) {
  addUser(username: $username, email: $email, password: $password, companyname: $companyname, phone: $phone) {
    user {
      _id
      companyname
      createdAt
      email
      phone
    }
    token
  }
}
`;

export const CREATE_ORDER = gql`
  mutation CreateOrder($id: ID!) {
    createOrder(_id: $id) {
      orders {
        _id
        createdAt
      }
    }
  }
`;

export const ADD_MACHINE = gql`
mutation Mutation($id: ID!, $machinetype: String!) {
  addMachine(_id: $id, machinetype: $machinetype) {
    orders {
      machinetype
    }
  }
}
`;

export const ADD_MACHINE_TYPE = gql`
mutation Mutation($id: ID!, $machineselection: String!) {
  addMachineSelection(_id: $id, machineselection: $machineselection) {
    orders {
      machineselection
      _id
    }
  }
}
`;
export const ADDITEM = gql`
mutation Mutation($id: ID!, $productId: Int!, $productName: String!, $category: String!) {
  addItems(_id: $id, productId: $productId, productName: $productName, category: $category) {
    orders {
      items {
        _id
        category
        productId
        productName
      }
    }
  }
}
`
export const ADDADDRESS = gql`
mutation AddAddress($id: ID!, $streetaddress: String, $city: String, $state: String, $zip: String) {
  addAddress(_id: $id, streetaddress: $streetaddress, city: $city, state: $state, zip: $zip) {
    _id
  }
}
`

export const ADD_SERVICE_REQUEST = gql`
mutation Mutation($id: ID!, $servicerequest: String!) {
  addServiceRequest(_id: $id, servicerequest: $servicerequest) {
    _id
    orders {
      servicerequest
    }
  }
}
`
;