import { useQuery } from '@apollo/client'
import { getSuppliersByLimit } from './queries/get-supplier-by-limit'
import type { Supplier } from './types/supplier'
import { Button } from './components/ui/button'
import { ThemeToggle } from './components/theme-toggle'

export function App() {
  const inputLimit = 3001
  const { data, loading } = useQuery<{ supplierTable: Supplier[] }>(
    getSuppliersByLimit,
    { variables: { inputLimit } }
  )

  function handleSubmitTest() {
    console.log('funcionou')
  }

  return (
    <div>
      <ThemeToggle />
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div>
          <ul>
            {data?.supplierTable.map(supplier => (
              <li key={supplier.id}>{supplier.name}</li>
            ))}
          </ul>
          <Button
            size="default"
            variant="outline"
            onClick={handleSubmitTest}
            className="cursor-pointer"
          >
            Submit
          </Button>
        </div>
      )}
    </div>
  )
}
