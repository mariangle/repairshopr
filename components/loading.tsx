import { Loader2 } from 'lucide-react'

export const LoadingScreen = () => {
  return (
    <div className='min-h-screen w-full mx-auto flex items-center justify-center'>
        <Loader2 className="w-8 h-8 animate-spin"/>
    </div>
  )
}