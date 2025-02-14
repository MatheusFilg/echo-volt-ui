import type { FormEvent } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'

export function SupplierForm() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <div className="flex flex-col gap-3 w-[620px] justify-center items-center self-center">
      <Label htmlFor="supplier" className="flex self-start">
        Descubra o fornecedor ideal para o seu consumo de energia!
      </Label>
      <form id="supplier" className="flex flex-row w-full gap-4">
        <Input
          placeholder="Informe o consumo mensal de energia (kWh)"
          type="number"
        />
        <Button
          size="default"
          variant="outline"
          onClick={handleSubmit}
          className="cursor-pointer"
          type="submit"
        >
          Procurar
        </Button>
      </form>
    </div>
  )
}
