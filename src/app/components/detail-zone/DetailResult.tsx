import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { MoneyIcon } from "@/assets/icons/money"
import { PaperIcon } from "@/assets/icons/paper"
import { PaperSuccesfullIcon } from "@/assets/icons/paper-succesful"

import style from "./DetailResult.module.css"

import { DetailClientComponent, CardProgressComponent, CardAreaComponent } from "@/app/components/detail-zone";


export const DetailResultComponent = () => {

    const branchesDetail = [
        { id: 1, title: "Inversión", icon: <MoneyIcon /> },
        { id: 2, title: "Garantías", icon: <PaperIcon /> },
        { id: 3, title: "Aprobación", icon: <PaperSuccesfullIcon />},
    ];

    return (
        <section>
            <div className="w-full h-[200px] bg-red-400">&nbsp;</div>
            <div
                className="px-3 py-4 w-full flex justify-between"
            >
                <h2
                    className="text-2xl font-bold"
                >
                    PDS Estación calle 84
                </h2>
                <div className="flex flex-col gap-2 items-end">
                    <Badge className=" bg-[#e7fcf8] text-[#00bd9d] hover:bg-[#00e3bc] hover:text-green-100 cursor-pointer">
                        Activo
                    </Badge>
                    <Button className="bg-[#5e79ff] text-white hover:bg-blue-700 hover:text-white rounded-full">
                        Ver cartera
                    </Button>
                </div>
            </div>
            <div className="flex flex-row justify-between px-3">
                <div className="flex flex-col">
                    <span className="text-xs text-gray-400">Contrato N°</span>
                    <span className="font-medium">SC-22-192</span>
                </div>
                <div className="flex flex-col items-end text-xs">
                    <span className="text-gray-400">Consumo traído al corte de</span>
                    <span className="text-gray-400">30/10/23</span>
                </div>
            </div>
            <div className="m-3">
                <div className="flex flex-col gap-3 w-full border border-gray-300 rounded-lg p-3">
                    <Tabs className="flex flex-col gap-3 w-full" defaultValue="byTime">
                        <TabsContent value="byTime">
                            <CardProgressComponent className="mb-3" valueProgress={64} goodPercentage={64} badPercentage={-36} title={"Progreso de cumplimiento"} />
                            <CardProgressComponent valueProgress={24} subTitle={'Finalización del contrato'} contractFinalDay={'01/01/25'} goodPercentage={24} badPercentage={-76} title={"Progreso de reaseguramiento"} />
                        </TabsContent>
                        <TabsContent  value="byVolume">
                            <CardProgressComponent className="mb-3" valueProgress={50} goodPercentage={50} badPercentage={-50} title={"Progreso de cumplimiento"} />
                            <CardProgressComponent valueProgress={84} subTitle={'Volumen Consumido'} contractFinalDay={'123.456.789 Gal'} goodPercentage={84} badPercentage={-16} title={"Progreso de reaseguramiento"} />
                        </TabsContent>
                        <TabsList className="flex flex-row w-full border border-[#4564ff] bg-white">
                            <TabsTrigger className={`w-full ${style.active_tab}`} value="byTime">Por tiempo</TabsTrigger>
                            <TabsTrigger className={`w-full ${style.active_tab}`} value="byVolume">Por volumen</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
            </div>
            <div className="flex flex-row gap-3 px-3 overflow-x-scroll m-5 ml-0">
                {
                    branchesDetail.map( branch => (
                        <CardAreaComponent
                            key={branch.id}
                            id={branch.id}
                            icon={branch.icon}
                            title={branch.title}
                        />
                    ) )
                }
            </div>
            <DetailClientComponent />
            <div className="h-[50px]">&nbsp;</div>
        </section>
    )
}


