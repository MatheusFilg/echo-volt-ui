import { LoaderCircle } from 'lucide-react'

export function LoadingSpinner() {
  return (
    <div className="h-screen flex -translate-x-6 -translate-y-8 items-center justify-center">
      <LoaderCircle className="animate-spin h-16 w-16 " />
    </div>
  )
}
