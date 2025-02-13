import { gql } from '@apollo/client'

export const getSuppliersByLimit = gql`
query GetSuppliersByLimit($inputLimit: Int!) {
  supplierTable(where: { kwhMinLimit: { gte: $inputLimit } }) {
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
