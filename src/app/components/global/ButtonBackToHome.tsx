"use client"
import { useBranchContext } from '@/app/providers/DetailZoneProvider';
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export const ButtonBackToHomeComponent = () => {

  const branch = useBranchContext();

  const setSelectedBranch = () => {
    branch.setBranch(0)
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
