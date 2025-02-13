import { useQuery } from '@apollo/client'
import { getSuppliersByLimit } from './queries/get-supplier-by-limit'
import type { Supplier } from './types/supplier'
import { ThemeToggle } from './components/theme-toggle'
import { SupplierForm } from './components/supplier-form'

export function App() {
  const inputLimit = 3001
  const { data, loading } = useQuery<{ supplierTable: Supplier[] }>(
    getSuppliersByLimit,
    { variables: { inputLimit } }
  )

  return (
    <div className="flex flex-col gap-2 px-6 py-4 h-screen">
      <ThemeToggle />
      <SupplierForm />
      <div>{/* Map de Card Component com as informações da requisição */}</div>
    </div>
  )
}
