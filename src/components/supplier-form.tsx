import { useState, type FormEvent } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'

interface SupplierFormProps {
  onSubmit: (value: number) => void
  isLoading: boolean
}

export function SupplierForm({ onSubmit, isLoading }: SupplierFormProps) {
  const [consumption, setConsumption] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (consumption) {
      onSubmit(Number(consumption))
      setConsumption('')
    }
  }

  return (
    <div className="flex flex-col gap-3 w-[620px] justify-center items-center self-center">
      <Label htmlFor="supplier" className="flex self-start">
        Descubra o fornecedor ideal para o seu consumo de energia!
      </Label>
      <form
        id="supplier"
        className="flex flex-row w-full gap-4"
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="Informe o consumo mensal de energia (kWh)"
          type="number"
          value={consumption}
          onChange={e => setConsumption(e.target.value)}
        />
        <Button
          size="default"
          variant="outline"
          className="cursor-pointer"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Carregando...' : 'Procurar'}
        </Button>
      </form>
    </div>
  )
}
