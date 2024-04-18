import { ReactNode } from "react";

interface Props {
    icon: ReactNode;
    title: string;
}

export const CardAreaComponent = ({ icon, title }: Props) => {
  return (
    <div className="border border-gray-300 rounded-lg w-[300px] h-[100px] cursor-pointer">
        <div className="flex flex-col items- justify-center h-full gap-3 px-3">
            {icon}
            <span>{title}</span>
        </div>
    </div>
  )
}
