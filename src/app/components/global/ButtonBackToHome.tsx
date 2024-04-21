"use client"
import { useAreaContext } from '@/app/providers/AreaProvider';
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export const ButtonBackToHomeComponent = () => {

  const branch = useAreaContext();

  const setSelectedBranch = () => {
    branch.setArea(0)
  }

  return (
    <Button
        onClick={setSelectedBranch}
        variant="ghost"
        className="mx-3 my-5">
            <ArrowLeft className="mr-3" /> Volver
    </Button>
  )
}
