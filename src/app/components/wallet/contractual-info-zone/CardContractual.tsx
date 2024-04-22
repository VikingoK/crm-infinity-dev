"use client"
import { Badge } from "@/components/ui/badge"
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { RowDetailClientComponent } from "@/app/components/main/detail-zone"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface Props {
    showAll: boolean;
}

export const CardContractualComponent = ({ showAll }: Props) => {

    const [infoShow, setInfoShow] = useState<boolean>(showAll);

    const changeState = () => {
        setInfoShow(!infoShow);
    }

    return (
        <div className={`
            ${(infoShow) ? 'bg-[#F7FBFF] ' : 'bg-white'}
            py-5 rounded-2xl border border-gray-300`}
        >
            <div className="flex flex-row justify-between px-3">
                <div className="flex flex-col justify-between">
                    <span className="text-xs text-gray-400">Contrato N°</span>
                    <span className="text-2xl font-semibold">CS-22-251</span>
                </div>
                <div className="flex flex-col items-end justify-between">
                    <span className="text-xs text-gray-400">Vigencia</span>
                    <Badge className="px-5 rounded-md bg-[#D3D9F8] text-black hover:bg-[#D3D9F8] hover:text-green-100 cursor-pointer">
                        10 Años
                    </Badge>
                </div>
            </div>
            <Table>
                <TableBody>
                    <TableRow className="border-b border-white">
                        <TableCell className="border-b border-hidden">
                            <RowDetailClientComponent label={"Fecha inicio"} value={"01/05/22"} />
                        </TableCell>
                        <TableCell className="border-b border-hidden">
                            <RowDetailClientComponent label={"Fecha final"} value={"01/06/23"} />
                        </TableCell>
                    </TableRow>
                    {
                        infoShow &&
                        <>
                            <TableRow className="border-b border-white">
                                <TableCell className="border-b border-hidden">
                                    <RowDetailClientComponent label={"Volumen pactado"} value={"44.084.000"} />
                                </TableCell>
                                <TableCell className="border-b border-hidden">
                                    <RowDetailClientComponent label={"Galonaje comprado"} value={"3.068.488"} />
                                </TableCell>
                            </TableRow>
                            <TableRow className="border-b border-white">
                                <TableCell className="border-b border-hidden">
                                    <RowDetailClientComponent label={"Prom. ventas GL mes"} value={"N/A"} />
                                </TableCell>
                                <TableCell className="border-b border-hidden">
                                    <RowDetailClientComponent label={"Bonificación mes"} value={"150 X GL"} />
                                </TableCell>
                            </TableRow>
                            <TableRow className="border-b border-white">
                                <TableCell className="border-b border-hidden">
                                    <RowDetailClientComponent label={"Anti. con la marca"} value={"N/A"} />
                                </TableCell>
                                <TableCell className="border-b border-hidden">
                                    <RowDetailClientComponent label={"Ultima intervención"} value={"N/A"} />
                                </TableCell>
                            </TableRow>
                            <TableRow className="border-b border-white">
                                <TableCell className="border-b border-hidden">
                                    <RowDetailClientComponent label={"Garantia de la EDS"} value={"N/A"} />
                                </TableCell>
                                <TableCell className="border-b border-hidden">
                                    <RowDetailClientComponent label={"ppto. invertido"} value={"N/A"} />
                                </TableCell>
                            </TableRow>
                        </>
                    }

                </TableBody>
            </Table>
            <div className="flex flex-row justify-end w-full px-3">
                <Button
                    variant="outline"
                    onClick={changeState}
                >
                        Ver menos
                </Button>
            </div>
        </div>
    )
}
