import type { Supplier } from '@/types/supplier'

interface SupplierCardProps {
  data: Supplier
}

export function SupplierCard({ data }: SupplierCardProps) {
  return (
    <div className="flex bg-card active:bg-secondary hover:cursor-pointer active:dark:bg-primary-foreground border border-input flex-row gap-4 px-4 py-2 items-center rounded-md">
      <img
        src="https://github.com/MatheusFilg.png"
        alt=""
        className="h-16 w-16 rounded-full"
      />
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold">{data.name}</h1>
        <p className="italic">{data.state}</p>
        <p className="rounded-2xl bg-card-foreground text-background w-fit p-1 text-sm">
          {data.rating}
        </p>
        <p>{data.kwhMinLimit}</p>
        <p>{data.costOfKwh}</p>
        <div className="mt-6">
          <p>Possivel Accordion</p>
        </div>
      </div>
    </div>
  )
}
