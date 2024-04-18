"use client"
import { useToast } from "@/components/ui/use-toast"

import { BellIcon } from '@/assets/icons'
import { Button } from '@/components/ui/button'

export const BellNotificationComponent = () => {

    const { toast } = useToast();

    const showToast = () => {
        toast({
            title: "Oh! Recibiste una notificación!",
            description: "Vuelve pronto",
            className:"bg-[#e9ecfb] text-[#4564ff]",
            duration: 1000
        })
    }

    return (
        <Button
            onClick={showToast}
            variant={'outline'}
            className="w-10 h-10 p-1 relative hover:bg-white"
        >
            <BellIcon width={45} height={45} />
            <span className="bg-rose-600 w-4 h-4 rounded-full text-xs text-center text-white pt-[2.5px] absolute -top-2 -right-2"></span>
        </Button>
    )
}
