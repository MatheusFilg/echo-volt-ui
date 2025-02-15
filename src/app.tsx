import { useLazyQuery } from '@apollo/client'
import { getSuppliersByLimit } from './queries/get-supplier-by-limit'
import type { Supplier } from './types/supplier'
import { ThemeToggle } from './components/theme-toggle'
import { SupplierForm } from './components/supplier-form'
import { SupplierCard } from './components/supplier-card'
import { useState } from 'react'

export function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const [fetchSuppliers, { data, loading }] = useLazyQuery<{
    supplierTable: Supplier[]
  }>(getSuppliersByLimit, { variables: { consumption: 0 } })

  async function handleSearchSuppliers(consumption: number) {
    await fetchSuppliers({
      variables: { consumption },
    })
  }

  return (
    <div className="flex flex-col gap-2 px-6 py-4 h-screen">
      <ThemeToggle />
      <SupplierForm onSubmit={handleSearchSuppliers} isLoading={loading} />
      <div className="mt-6 w-full h-full grid grid-cols-4 grid-rows-3 gap-x-6 gap-y-4">
        {data?.supplierTable.map(item => {
          return (
            <SupplierCard
              key={item.id}
              data={item}
              isSelected={selectedId === item.id}
              onSelect={() => {
                setSelectedId(prev => (prev === item.id ? null : item.id))
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
