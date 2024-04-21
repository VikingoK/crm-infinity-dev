"use client"
import React, { Dispatch, SetStateAction, useState, useContext } from "react";

interface DetailZoneContextType {
    currentBranch: number;
    setBranch: Dispatch<SetStateAction<number>>;
}

export const BranchContext = React.createContext<DetailZoneContextType>({
    currentBranch: 0,
    setBranch: () => { }
});


export const useBranchContext = () => useContext(BranchContext)


interface Props {
    children: React.ReactNode;
}

export const DetailZoneProvider = ({ children }: Props) => {

    const [currentBranch, setBranch] = useState(0);

    return (
        <BranchContext.Provider value={{currentBranch, setBranch}}>
            {children}
        </BranchContext.Provider>
    );
}
