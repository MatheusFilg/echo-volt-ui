import { gql } from '@apollo/client'

export const getSuppliersByLimit = gql`
query GetSuppliersByLimit($consumption: Int!) {
  supplierTable(where: { kwhMinLimit: { lte: $consumption } }) {
    id
    name
    logo
    state
    costOfKwh
    kwhMinLimit
    totalClients
    rating
  }
}
`
