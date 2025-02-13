import { useQuery } from '@apollo/client'
import { getSuppliersByLimit } from './queries/get-supplier-by-limit'
import type { Supplier } from './types/supplier'
import { ThemeToggle } from './components/theme-toggle'
import { SupplierForm } from './components/supplier-form'
import { SupplierCard } from './components/supplier-card'

export function App() {
  const inputLimit = 1
  const { data, loading } = useQuery<{ supplierTable: Supplier[] }>(
    getSuppliersByLimit,
    { variables: { inputLimit } }
  )
  return (
    <div className="flex flex-col gap-2 px-6 py-4 h-screen">
      <ThemeToggle />
      <SupplierForm />
      <div className="mt-6 w-full h-full grid grid-cols-4 grid-rows-3 gap-x-6 gap-y-4">
        {data?.supplierTable.map(item => {
          return <SupplierCard key={item.id} data={item} />
        })}
      </div>
    </div>
  )
}
