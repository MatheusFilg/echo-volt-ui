import { useLazyQuery } from '@apollo/client'
import { getSuppliersByLimit } from './queries/get-supplier-by-limit'
import type { Supplier } from './types/supplier'
import { ThemeToggle } from './components/theme-toggle'
import { SupplierForm } from './components/supplier-form'
import { SupplierCard } from './components/supplier-card'
import { useEffect, useRef, useState } from 'react'
import { EmptySupplier } from './components/empty-supplier'
import { NoResultSupplier } from './components/no-results-supplier'
import { LoadingSpinner } from './components/loading-spinner'

export function App() {
  const [fetchSuppliers, { data, loading }] = useLazyQuery<{
    supplierTable: Supplier[]
  }>(getSuppliersByLimit, { variables: { consumption: 0 } })

  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [isConfirmed, setIsConfirmed] = useState(false)

  useEffect(() => {
    if (data?.supplierTable) {
      setSelectedId(null)
    }
  }, [data])

  function handleConfirmSupplier() {
    setIsConfirmed(true)
    setSelectedId(null)
  }

  async function handleSearchSuppliers(consumption: number) {
    setIsConfirmed(false)
    await fetchSuppliers({
      variables: { consumption },
    })
  }

  return (
    <div className="flex flex-col gap-4 px-6 py-4 h-screen">
      <ThemeToggle />
      <SupplierForm onSubmit={handleSearchSuppliers} isLoading={loading} />

      {loading ? (
        <LoadingSpinner />
      ) : isConfirmed ? (
        <EmptySupplier message="Fornecedor confirmado com sucesso! Deseja fazer uma nova consulta?" />
      ) : !data?.supplierTable ? (
        <EmptySupplier />
      ) : data?.supplierTable.length === 0 ? (
        <NoResultSupplier />
      ) : (
        <div className="mt-6 w-full h-full grid grid-cols-3 2xl:grid-cols-4 2xl:gap-x-6 2xl:gap-y-4 gap-y-2">
          {data.supplierTable.map(item => {
            return (
              <SupplierCard
                key={item.id}
                data={item}
                isSelected={selectedId === item.id}
                onSelect={() =>
                  setSelectedId(prev => (prev === item.id ? null : item.id))
                }
                onConfirm={handleConfirmSupplier}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
