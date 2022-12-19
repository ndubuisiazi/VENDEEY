import { gql } from '@apollo/client';



export const PRODUCT_LIST = gql`
query Products {
  products {
    productName
    category
    img
    price
  }
}`;