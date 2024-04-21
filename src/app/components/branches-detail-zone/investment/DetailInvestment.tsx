import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"

import { RowDetailClientComponent } from "@/app/components"
import { ButtonBackToHomeComponent, TitleSectionComponent } from "@/app/components/global"


export const DetailInvestmentComponent = () => {

    return (
        <section>
            <ButtonBackToHomeComponent />
            <TitleSectionComponent title="Inversión" subTitle="PDS Estación Calle 84" />
            <Table>
            <TableBody>
                <TableRow className="border-b border-white">
                    <TableCell>
                        <RowDetailClientComponent label={"Número de Islas"} value={"3"} />
                    </TableCell>
                    <TableCell>
                        <RowDetailClientComponent label={"Tiempo de contrato(años)"} value={"5 años"} />
                    </TableCell>
                </TableRow>
                <TableRow className="border-b border-white">
                    <TableCell>
                        <RowDetailClientComponent label={"Valor inversión imagen"} value={"$123.456.789"} />
                    </TableCell>
                    <TableCell>
                        <RowDetailClientComponent label={"Valor reinversion"} value={"$123.456.789"} />
                    </TableCell>
                </TableRow>
                <TableRow className="border-b border-white">
                    <TableCell>
                        <RowDetailClientComponent label={"Descuento Anticipado"} value={"$123.456.789"}/>
                    </TableCell>
                    <TableCell>
                        <RowDetailClientComponent label={"Fecha desembolso"} value={"01/03/23"} />
                    </TableCell>
                </TableRow>
                <TableRow className="border-b border-white">
                    <TableCell>
                        <RowDetailClientComponent label={"Fecha contrato"} value={"01/03/23"} />
                    </TableCell>

                </TableRow>
                <TableRow className="border-b border-white">
                    <TableCell>
                        <RowDetailClientComponent label={"Volumen Total"} value={"123.456.789 Gal"} />
                    </TableCell>
                    <TableCell>
                        <RowDetailClientComponent label={"Volumen estimado mensual"} value={"123.456.789,00 Gal"} />
                    </TableCell>
                </TableRow>
                <TableRow className="border-b border-white">
                    <TableCell>
                        <RowDetailClientComponent label={"Amortización $/Gal"} value={"123"} />
                    </TableCell>
                    <TableCell>
                        <RowDetailClientComponent label={"Descuento anticipado =>500MM"} value={"123 Bonificación"} />
                    </TableCell>
                </TableRow>
                <TableRow className="border-b border-white">
                    <TableCell>
                        <RowDetailClientComponent label={"Dotación"} value={"Si"} />
                    </TableCell>
                    <TableCell>
                        <RowDetailClientComponent label={"Fecha entrega dotación"} value={"01/03/23"} />
                    </TableCell>
                </TableRow>
                <TableRow className="border-b border-white">
                    <TableCell>
                        <RowDetailClientComponent label={"Cantidad"} value={"12"} />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
            <div className="h-[50px]">&nbsp;</div>
        </section>
    )
}

