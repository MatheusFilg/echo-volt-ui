import { useState, type FormEvent } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { LoaderCircle, Search } from 'lucide-react'

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
    <div className="flex flex-col translate-y-4 gap-3 justify-center items-center self-center w-full">
      <form className="flex flex-col w-[620px] gap-4" onSubmit={handleSubmit}>
        <Label htmlFor="supplier" className="flex self-start">
          Descubra o fornecedor ideal para o seu consumo de energia!
        </Label>
        <div className="flex flex-row gap-2">
          <Input
            placeholder="Informe o consumo mensal de energia (kWh)"
            id="supplier"
            type="number"
            value={consumption}
            onChange={e => setConsumption(e.target.value)}
            min={1}
            max={500000}
          />
          <Button
            size="default"
            variant="outline"
            className="cursor-pointer"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <LoaderCircle className="animate-spin" /> : <Search />}
            {isLoading ? 'Carregando' : 'Procurar'}
          </Button>
        </div>
      </form>
    </div>
  )
}
