import { CircleCheckBig, CircleHelp } from 'lucide-react'

type EmptySupplierProps = {
  message?: string
}

export function EmptySupplier({ message }: EmptySupplierProps) {
  return (
    <div className="h-screen flex flex-col items-center gap-4 justify-center">
      {message ? (
        <CircleCheckBig className="h-12 w-12" />
      ) : (
        <CircleHelp className="h-12 w-12" />
      )}
      <p className="text-foreground font-semibold leading-relaxed max-w-80 text-center">
        {message ||
          'Você ainda não pesquisou nenhum fornecedor, que tal fazer uma consulta agora mesmo?'}
      </p>
    </div>
  )
}
