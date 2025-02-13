import { useQuery } from '@apollo/client'
import { getSuppliersByLimit } from './queries/get-supplier-by-limit'
import type { Supplier } from './types/supplier'

export function App() {
  const inputLimit = 3001
  const { data, loading } = useQuery<{ supplierTable: Supplier[] }>(
    getSuppliersByLimit,
    { variables: { inputLimit } }
  )

  return (
    <div>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {data?.supplierTable.map(supplier => (
            <li key={supplier.id}>{supplier.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
