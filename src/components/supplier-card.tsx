import type { Supplier } from '@/types/supplier'
import { Label } from './ui/label'
import { ChevronsRight, User } from 'lucide-react'
import { Button } from './ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'

interface SupplierCardProps {
  data: Supplier
  isSelected: boolean
  onSelect: () => void
  onConfirm: () => void
}

export function SupplierCard({
  data,
  isSelected,
  onSelect,
  onConfirm,
}: SupplierCardProps) {
  let ratingStyle = ' '
  switch (data.rating) {
    case 'Ótimo':
      ratingStyle += 'bg-chart-2'
      break

    case 'Regular':
      ratingStyle += 'bg-chart-3'
      break

    case 'Ruim':
      ratingStyle += 'bg-destructive'
      break

    default:
      ratingStyle += 'bg-card-foreground'
      break
  }

  function handleSelectSupplier(e: React.MouseEvent) {
    e.stopPropagation()
    onConfirm()
  }

  return (
    <div
      className={
        'flex bg-card active:bg-secondary dark:aria-checked:bg-primary-foreground border border-input 2xl:h-[240px] h-[200px] 2xl:w-[432px] w-[384px] flex-row gap-2 p-2 items-center rounded-md cursor-pointer'
      }
      aria-checked={isSelected}
      onClick={onSelect}
    >
      <img
        src={data.logo}
        alt=""
        className="h-12 w-12 text-foreground rounded-full"
      />
      <div className="grid grid-cols-2 w-full">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h1 className="font-semibold text-xl">{data.name}</h1>
            <p className="italic text-muted-foreground text-base">
              {data.state}
            </p>
          </div>

          <div className="mt-4">
            <Label className="italic text-sm text-muted-foreground">
              Limite mínimo (kWh)
            </Label>
            <p>{data.kwhMinLimit.toLocaleString('pt-BR')} kWh</p>
          </div>

          <div>
            <Label className="italic text-sm text-muted-foreground">
              Custo
            </Label>
            <p className="underline">{data.costOfKwh}</p>
          </div>
        </div>

        <div>
          <div className="place-self-end">
            <Label className="italic text-sm text-muted-foreground">
              Clientes
            </Label>
            <p className="flex flex-row items-center justify-between">
              {data.totalClients} <User className="h-4 w-4" />
            </p>
          </div>

          <p
            className={`rounded-4xl self-start text-background w-fit p-1.5 text-sm font-semibold place-self-end mt-2 ${ratingStyle}`}
          >
            {data.rating}
          </p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className={`${isSelected ? 'visible' : 'invisible'} rounded-full text-sm translate-x-30 translate-y-10 2xl:translate-x-36 2xl:translate-y-9`}
                  variant="outline"
                  size="icon"
                  onClick={handleSelectSupplier}
                >
                  <ChevronsRight />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="text-sm font-medium">
                <p>Confirmar Escolha</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  )
}
