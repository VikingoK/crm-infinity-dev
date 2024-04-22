"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import { RowDetailClientComponent } from "@/app/components/main/detail-zone";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CardCurrentWalletComponent } from "@/app/components/wallet/detail-contractual-info-zone"
import { ArrowRight } from "lucide-react";

import style from "./CardCurrentWallet.module.css"

interface Props {
  className: string;
}

export const DetailContractualInfoZoneComponent = ({ className }: Props) => {

  const currentWallet = [
    { id: 0, label: "Saldo en Cartera", value: "967.084.207", options: true },
    { id: 1, label: "Dias plazo cartera", value: "5 Días / max. vigente", options: true },
    { id: 2, label: "Cupo de credito real", value: "Cupo grupo $ 900M", options: true },
    { id: 3, label: "Cupo de credito calculado", value: "0", options: true },
    { id: 4, label: "Edades de Cartera", value: "N/A", options: false },
    { id: 5, label: "Intereses de mora causados año 2022", value: "36.053.978", options: false },
    { id: 6, label: "Intereses de mora causados año 2023", value: "163.786.853", options: false },
    { id: 7, label: "Intereses de mora promedio mes", value: "20.473.357", options: false },
  ];

  const totalWalletClient = [
    { id: 0, label: "Valor inicial del incentivo", value: "1.090.000.000", options: true },
    { id: 1, label: "Saldo incentivo", value: "921.870.184", options: true },
    { id: 2, label: "Préstamo inicial", value: "1.000.0000.000", options: true },
    { id: 3, label: "Tasa de interes préstamo", value: "1,1%", options: true },
    { id: 4, label: "Plazo del préstamo", value: "84", options: false },
    { id: 5, label: "N° cuotas pendientes", value: "49", options: false },
    { id: 6, label: "N° cuotas pagadas", value: "35", options: false },
    { id: 7, label: "N° cuotas en mora", value: "1", options: false },
    { id: 8, label: "Valor de las cuotas pendientes", value: "$ 9.943.346,00", options: false },
    { id: 9, label: "Saldo pendiente", value: "$ 690.357.899", options: false },
    { id: 10, label: "valor Cuota mensual", value: "$ 18.300.871", options: true },
    { id: 11, label: "Total cartera largo plazo", value: "$ 1.622.170.429", options: false },
  ];

  return (
    <motion.section
      className={`${className} bg-white`}
      initial={{ opacity: 0, y: 0, x: -10 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className=" bg-white m-5 border border-gray-300 h-[800px] rounded-lg">
        <div className="flex flex-col gap-3 border-b border-gray-300 p-5">
          <div className="flex flex-row gap-10">
            <RowDetailClientComponent label={"Cliente"} >
              <span className="text-2xl font-semibold" >Grupo Administrativo Kamel S.A.S</span>
            </RowDetailClientComponent>
            <RowDetailClientComponent label={"Grupo familiar"} >
              <Button variant="ghost" className="font-semibold text-[#4564ff]">
                Kamel Group <ArrowRight className="ml-3" />
              </Button>
            </RowDetailClientComponent>
            <RowDetailClientComponent label={"Estado de venta"} >
              <Badge className="m-auto rounded-md px-5 bg-[#e7fcf8] text-[#00bd9d] hover:bg-[#00e3bc] hover:text-green-100 cursor-pointer">
                ACTIVO
              </Badge>
            </RowDetailClientComponent>
            <RowDetailClientComponent label={"EDS"} >
              <Badge className="m-auto ml-0 px-7 rounded-md bg-[#D3D9F8] text-black hover:bg-[#D3D9F8] hover:text-green-100 cursor-pointer">
                9 EDS
              </Badge>
            </RowDetailClientComponent>
            <RowDetailClientComponent label={"Ciudad"} >
              <Badge className="m-auto ml-0 px-5 rounded-md bg-[#D3D9F8] text-black hover:bg-[#D3D9F8] hover:text-green-100 cursor-pointer">
                7 CIUDADES
              </Badge>
            </RowDetailClientComponent>
          </div>

          <div className="flex flex-row gap-16">
            <RowDetailClientComponent label={"Departamento"} value={"N de Santander"} />
            <RowDetailClientComponent label={"Dirección"} value={"Cra 10A No. 70-20"} />
            <RowDetailClientComponent label={"Representante Legal"} value={"Sandra Milena Mejía Díaz"} />
            <RowDetailClientComponent label={"Analista de cartera"} value={"Monica Bolaños"} />
            <RowDetailClientComponent label={"Asesor comercial"} value={"Yamil Egel"} />
          </div>
        </div>


        <div className="flex flex-col justify-between w-full h-[80%] overflow-y-scroll">
          <Tabs defaultValue="wallet" className="w-full mx-5">
            <TabsList>
              <TabsTrigger className={`${style.active_tab}`} value="wallet">Cartera corriente</TabsTrigger>
              <TabsTrigger className={`${style.active_tab}`} value="walletClient">Total cartera cliente</TabsTrigger>
            </TabsList>
            <TabsContent
              className="flex flex-row flex-wrap w-full justify-cente gap-3"
              value="wallet">
              {
                currentWallet.map((current) => (
                  <CardCurrentWalletComponent
                    key={current.id}
                    label={current.label}
                    value={current.value}
                    options={current.options}
                  />
                ))
              }
            </TabsContent>
            <TabsContent
              className="flex flex-row flex-wrap w-full justify-cente gap-3"
              value="walletClient">
              {
                totalWalletClient.map((current) => (
                  <CardCurrentWalletComponent
                    key={current.id}
                    label={current.label}
                    value={current.value}
                    options={current.options}
                  />
                ))
              }
            </TabsContent>
          </Tabs>

          <div className="flex flex-row justify-between border border-gray-300 py-4 px-3 mx-5 rounded-lg">
            <div className="flex flex-row gap-10">
              <div className="flex flex-col gap-1">
                <span className="text-xs">Cartera corriente</span>
                <span className="text-2xl font-semibold">$ 967.084.207</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs">Cartera largo plazo</span>
                <span className="text-2xl font-semibold">$ 1.622.170.429</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 items-end">
              <span className="text-xs">Total cartera cliente</span>
              <span className="text-2xl font-semibold text-[#4564ff]">$ 2.589.254.636</span>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  )
}
