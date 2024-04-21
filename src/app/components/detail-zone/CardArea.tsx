"use client"
import { useBranchContext } from "@/app/providers/DetailZoneProvider";
import { ReactNode } from "react";

interface Props {
    id: number;
    title: string;
    icon: ReactNode;
}

export const CardAreaComponent = ({ icon, title, id }: Props) => {

  const branch = useBranchContext();
  const setCurrentBranch = () => {
    branch.setBranch(id);
  }

  return (
      <div
        onClick={setCurrentBranch}
        className={`${(branch.currentBranch == id) && 'bg-[#e9ecfb]'}
        border border-gray-300 rounded-lg w-[300px] h-[100px] cursor-pointer`}>
          <div className="flex flex-col items- justify-center h-full gap-3 px-3">
              {icon}
              <span>{title}</span>
          </div>
      </div>
  )
}

