import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"

import { RowDetailClientComponent } from "@/app/components/detail-zone"
import { Button } from "@/components/ui/button"
import { SquareArrowOutUpRight } from "lucide-react"

import { ButtonBackToHomeComponent, ParagraphComponent, TitleSectionComponent } from "@/app/components/global"


export const DetailGuaranteeComponent = () => {

    return (
        <section>
            <ButtonBackToHomeComponent />
            <div className="mb-10">
                <TitleSectionComponent title="Garantías" subTitle="PDS Estación Calle 84" />
                <span className="px-3 font-semibold text-gray-400">Hipoteca</span>

                <ParagraphComponent title="Tipo de Bien" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam laudantium minus culpa rerum hic quidem, nihil eaque cumque voluptates mollitia, qui obcaecati, magnam asperiores? Minus laboriosam sint ab pariatur veritatis." />
                <ParagraphComponent title="Descripción hipoteca" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam laudantium minus culpa rerum hic quidem, nihil eaque cumque voluptates mollitia, qui obcaecati, magnam asperiores? Minus laboriosam sint ab pariatur veritatis." />

                <Table>
                    <TableBody>
                        <TableRow className="border-b border-white">
                            <TableCell>
                                <RowDetailClientComponent label={"Número de Escritura"} value={"1425 263"} />
                            </TableCell>
                            <TableCell>
                                <RowDetailClientComponent label={"Notaria"} value={"Notaría 5° Barranquilla"} />
                            </TableCell>
                        </TableRow>
                        <TableRow className="border-b border-white">
                            <TableCell>
                                <RowDetailClientComponent label={"Fecha de Escritura"} value={"01/03/23"} />
                            </TableCell>
                            <TableCell>
                                <RowDetailClientComponent label={"Valor avalúo Comercial"} value={"$ 1.525.285.252.252"} />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Button
                    variant="outline"
                    className="ml-3 text-[#4564ff] border border-[#4564ff]">
                    Escritura de hipoteca y avalúo
                </Button>
            </div>

            <div className="mb-10">
                <span className="px-3 mb-3 font-semibold text-gray-400 w-full">Prenda</span>
                <Table>
                    <TableBody>
                        <TableRow className="border-b border-white">
                            <TableCell>
                                <RowDetailClientComponent label={"Tipo de Prenda"} value={"Establecimiento de Comercio"} />
                            </TableCell>
                            <TableCell>
                                <RowDetailClientComponent label={"Vigencia de la Prenda (años)"} value={"12 años"} />
                            </TableCell>
                        </TableRow>
                        <TableRow className="border-b border-white">
                            <TableCell>
                                <RowDetailClientComponent label={"Valor Asegurado"} value={"$1.525.285.252.252"} />
                            </TableCell>
                            <TableCell>
                                <RowDetailClientComponent label={"Valor avalúo Comercial"} value={"$ 1.525.285.252.252"} />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Button
                    variant="outline"
                    className="ml-3 text-[#4564ff] border border-[#4564ff]" >
                    Ver Avalúo comercial
                </Button>
            </div>

            <div className="mb-10">
                <span className="px-3 mb-3 font-semibold text-gray-400 w-full">Prenda</span>
                <Table>
                    <TableBody>
                        <TableRow className="border-b border-white">
                            <TableCell>
                                <RowDetailClientComponent label={"Tipo de Prenda"} value={"Establecimiento de Comercio"} />
                            </TableCell>
                            <TableCell>
                                <RowDetailClientComponent label={"Vigencia de la Prenda (años)"} value={"12 años"} />
                            </TableCell>
                        </TableRow>
                        <TableRow className="border-b border-white">
                            <TableCell>
                                <RowDetailClientComponent label={"Valor Asegurado"} value={"$1.525.285.252.252"} />
                            </TableCell>
                            <TableCell>
                                <RowDetailClientComponent label={"Valor avalúo Comercial"} value={"$ 1.525.285.252.252"} />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Button
                    variant="outline"
                    className="ml-3 text-[#4564ff] border border-[#4564ff]">
                    Ver Avalúo comercial
                </Button>
            </div>

            <Button className="ml-3 bg-[#e9ecfb] text-[#4564ff] hover:bg-blue-100">
                Ver documentos en OnBase
                <SquareArrowOutUpRight className="ml-3 p-1" />
            </Button>
            <div className="h-[50px]">&nbsp;</div>
        </section>
    )
}

