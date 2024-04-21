import { ButtonBackToHomeComponent, ButtonLinkComponent, ParagraphComponent, TitleSectionComponent } from "@/app/components/global"
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"

import { RowDetailClientComponent } from "@/app/components"

export const DetailApprovalComponet = () => {
  return (
      <section>
          <ButtonBackToHomeComponent />
          <div className="mb-10">
              <TitleSectionComponent title="Aprobación" subTitle="PDS Estación Calle 84" />
              <span className="px-3 font-semibold text-gray-400">Acta</span>

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

          <div className="h-[50px]">&nbsp;</div>
      </section>
  )
}
