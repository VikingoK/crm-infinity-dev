import { ButtonBackToHomeComponent, ButtonLinkComponent, ParagraphComponent, TitleSectionComponent } from "@/app/components/global"
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"

import { RowDetailClientComponent } from "@/app/components/detail-zone"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export const DetailApprovalComponet = () => {
  return (
      <section>
          <ButtonBackToHomeComponent />

        <TitleSectionComponent title="Aprobación" subTitle="PDS Estación Calle 84" />
          <div>
            <div>
                <span className="px-3 font-semibold text-gray-400">Tipo de aprobación</span>
                <RadioGroup className="flex flex-col px-3 mb-5 mt-5 gap-5" defaultValue="option-one">
                    <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="1" id="option-one" />
                            <Label htmlFor="option-one">Comité E. de negocios</Label>
                        </div>
                        <div className="flex items-center space-x-2 mr-[6.1rem]">
                            <RadioGroupItem value="2" id="option-two" />
                            <Label htmlFor="option-two">Gerencia</Label>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="3" id="option-three" />
                            <Label htmlFor="option-three">Comité E. de Inversiones</Label>
                        </div>
                        <div className="flex items-center space-x-2 mr-20">
                            <RadioGroupItem value="4" id="option-four" />
                            <Label htmlFor="option-four">Presidencia</Label>
                        </div>
                    </div>
                </RadioGroup>

            </div>
            <div className="mb-10">
                    <span className="px-3 font-semibold text-gray-400">Acta</span>

                    <div className="flex flex-col gap-3">
                        <Table>
                            <TableBody>
                                <TableRow className="border-b border-white">
                                    <TableCell>
                                        <RowDetailClientComponent label={"Numero de acta"} value={"1426"} />
                                    </TableCell>
                                    <TableCell>
                                        <RowDetailClientComponent label={"Fecha de acta"} value={"23/04/22"} />
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>


                        <ButtonLinkComponent title={"Fecha de carga: 29/12/23"} textLink={"Aprobación_Acta-12394.pdf"} />
                        <ParagraphComponent title="Tipo de Bien" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam laudantium minus culpa rerum hic quidem, nihil eaque cumque voluptates mollitia, qui obcaecati, magnam asperiores? Minus laboriosam sint ab pariatur veritatis." />
                        <ButtonLinkComponent title={"Fecha de carga: 14/06/23"} textLink={"Aprobación_Acta-12394.pdf"} />
                        <ButtonLinkComponent title={"Fecha de carga: 23/04/22"} textLink={"Aprobación_Acta-12394.pdf"} />
                    </div>
                </div>
            </div>

          <div className="h-[50px]">&nbsp;</div>
      </section>
  )
}
