import { DotsIcon } from "@/assets/icons"

interface Props {
    label: string;
    value: string;
    options: boolean;
}

export const CardCurrentWalletComponent = ({ label, value, options }:Props) => {
  return (
    <div className="px-3 py-2 bg-white rounded-lg border border-gray-300 w-[18rem]">
        <div className="flex flex-row justify-between pb-3">
            <span className="text-gray-400 text-xs text-balance min-w-min">{label}</span>
            {
                options && <span> <DotsIcon width={20} height={20} /> </span>
            }
        </div>
        <span className="font-semibold text-xl">{value}</span>
    </div>
  )
}
