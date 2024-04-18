'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"

import { RowDetailClientComponent } from "@/app/components/index";

export const DetailClientComponent = () => {

    const [showDetail, setShowDetail] = useState(true);

    const updateState = () => {
        setShowDetail(!showDetail);
    }

    return (
        <>
            <div className="ml-3">
                <Button
                    onClick={updateState}
                    className="rounded-full bg-[#e9ecfb] hover:bg-blue-300 text-[#4564ff] hover:text-white">
                    {(showDetail) ? 'Ocultar detalles de cliente' : 'Mostrar detalles de cliente'}
                </Button>
            </div>
            <Table>
                <TableBody>
                    <TableRow className="border-b border-white">
                        <TableCell>
                            <RowDetailClientComponent label={"Código SICOM"} value={"123456"} />
                        </TableCell>
                        <TableCell>
                            <RowDetailClientComponent label={"Razón Social"} value={"Pelican Oil S.A.S"} />
                        </TableCell>
                    </TableRow>
                    <TableRow className="border-b border-white">
                        <TableCell>
                            <RowDetailClientComponent label={"NIT"} value={"123456789-0"} />
                        </TableCell>
                        <TableCell>
                            <RowDetailClientComponent label={"Tipo Contrato"} value={"SC"} />
                        </TableCell>
                    </TableRow>
                    {
                        showDetail && <>
                            <TableRow className="border-b border-white">
                                <TableCell>
                                    <RowDetailClientComponent label={"Clase Contrato"} value={"MultiPDS"} />
                                </TableCell>
                                <TableCell>
                                    <RowDetailClientComponent label={"Grupo Familiar"} value={"Pelican Group"} />
                                </TableCell>
                            </TableRow>
                            <TableRow className="border-b border-white">
                                <TableCell>
                                    <RowDetailClientComponent label={"Fecha Suscripción"} value={"01/03/22"} />
                                </TableCell>
                                <TableCell>
                                    <RowDetailClientComponent label={"Fecha Inicio"} value={"01/03/22"} />
                                </TableCell>
                            </TableRow>
                            <TableRow className="border-b border-white">
                                <TableCell>
                                    <RowDetailClientComponent label={"Fecha vencimiento"} value={"01/01/25"} />
                                </TableCell>
                                <TableCell>
                                    <RowDetailClientComponent label={"Plazo(Tiempo)"} value={"120 meses"} />
                                </TableCell>
                            </TableRow>
                            <TableRow className="border-b border-white">
                                <TableCell>
                                    <RowDetailClientComponent label={"Plazo(Volumen)"} value={"99.999.999 Gal"} />
                                </TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow className="border-b border-white">
                                <TableCell>
                                    <RowDetailClientComponent label={"Galonaje est. mensual"} value={"12.345.678,99 Gal"} />
                                </TableCell>
                                <TableCell>
                                    <RowDetailClientComponent label={"Cupo Crédiot"} value={"234.567.890"} />
                                </TableCell>
                            </TableRow>
                            <TableRow className="border-b border-white">
                                <TableCell>
                                    <RowDetailClientComponent label={"Días de Gracia"} value={"12 días"} />
                                </TableCell>
                                <TableCell>
                                    <RowDetailClientComponent label={"Días de Palzo"} value={"30 días"} />
                                </TableCell>
                            </TableRow>
                        </>
                    }

                </TableBody>
            </Table>
        </>
    )
}
