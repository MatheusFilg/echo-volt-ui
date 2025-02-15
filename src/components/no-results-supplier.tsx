import { SearchX } from 'lucide-react'

export function NoResultSupplier() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <SearchX className="h-12 w-12 mb-4" />
      <p className="text-foreground font-semibold leading-relaxed max-w-80 text-center">
        Nenhum Resultado foi encontrado para esta consulta.
      </p>
      <p className="text-foreground font-semibold leading-relaxed max-w-80 text-center underline">
        Por favor, tente novamente.
      </p>
    </div>
  )
}
