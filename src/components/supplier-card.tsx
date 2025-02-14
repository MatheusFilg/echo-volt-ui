import type { Supplier } from '@/types/supplier'
import { Label } from './ui/label'

interface SupplierCardProps {
  data: Supplier
}

export function SupplierCard({ data }: SupplierCardProps) {
  return (
    <div className="flex bg-card active:bg-secondary  active:dark:bg-primary-foreground border border-input flex-row gap-4 p-4 items-center rounded-md">
      <img
        src="https://github.com/MatheusFilg.png"
        alt=""
        className="h-16 w-16 rounded-full"
      />
      <div className="flex flex-col w-full gap-1">
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-col">
            <h1 className="font-semibold text-xl">{data.name}</h1>
            <p className="italic text-muted-foreground text-base">
              {data.state}
            </p>
          </div>
          <p className="rounded-4xl bg-card-foreground self-start text-background w-fit p-1.5 text-xs">
            {data.rating}
          </p>
        </div>

        <div className="mt-4">
          <Label className="italic text-sm text-muted-foreground">
            Limite mínimo
          </Label>
          <p>{data.kwhMinLimit}</p>
        </div>

        <div>
          <Label className="italic text-sm text-muted-foreground">Custo</Label>
          <p className="underline">{data.costOfKwh}</p>
        </div>

        <div className="mt-2">Possivel Hover Card</div>
      </div>
    </div>
  )
}
