"use client"
import React, { Dispatch, SetStateAction, useState, useContext } from "react";

interface DetailZoneContextType {
    currentArea: number;
    setArea: Dispatch<SetStateAction<number>>;
}

export const AreaContext = React.createContext<DetailZoneContextType>({
    currentArea: 0,
    setArea: () => { }
});


export const useAreaContext = () => useContext(AreaContext)


interface Props {
    children: React.ReactNode;
}

export const AreaProvider = ({ children }: Props) => {

    const [currentArea, setArea] = useState(0);

    return (
        <AreaContext.Provider value={{currentArea, setArea}}>
            {children}
        </AreaContext.Provider>
    );
}
