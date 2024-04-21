import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

interface Props {
    title: string;
    textLink: string;
}


export const ButtonLinkComponent = ({ title, textLink }: Props) => {
    return (
        <div className="flex flex-col items-start px-3">
            <span className="text-xs text-gray-400">{title}</span>
            <Button
                variant="ghost"
            >
                <span className="underline">{textLink}</span> <Eye className="ml-3" />
            </Button>
        </div>
    )
}
