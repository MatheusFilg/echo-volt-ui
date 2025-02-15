import { CircleHelp } from 'lucide-react'

export function EmptySupplier() {
  return (
    <div className="h-screen flex flex-col items-center gap-4 justify-center">
      <CircleHelp className="h-12 w-12" />
      <p className="text-foreground font-semibold leading-relaxed max-w-90 text-center">
        Você ainda não pesquisou nenhum fornecedor, que tal fazer uma consulta
        agora mesmo?
      </p>
    </div>
  )
}
