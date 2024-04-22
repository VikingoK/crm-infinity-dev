import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface Props {
    label: string;
    buttonLabel: string;
    placeholder: string;
}

export const SelectFilterComponent = ({ label, buttonLabel, placeholder }: Props) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <span className="text-xs">{label}</span>
                <Button variant="ghost">{buttonLabel}</Button>
            </div>
            <Select>
                <SelectTrigger className="w-[280px]">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}
