"use client"
import { LayoutBoderComponent } from "@/app/components/global"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import { CardContractualComponent } from "@/app/components/wallet/contractual-info-zone"
import Link from "next/link";

interface Props {
  className: string;
}

export const ContractualInfoZoneComponent = ({ className }: Props) => {
  return (
    <motion.section
      className={`${className}  border-r border-gray-300`}
      initial={{ opacity: 0, y: 0, x: -10 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className={`bg-white h-[850px] p-5`}>
        <div>
          <Link
                href="/dashboard/main"
            >
                <Button
                  variant="ghost"
                  className=" my-3">
                  <ArrowLeft className="mr-3" /> Volver
                </Button>
            </Link>

          <div className="flex flex-row justify-between mb-6">
            <h1 className="text-2xl text-gray-400 font-semibold">Info contractual</h1>
            <Badge className="rounded-md bg-[#D3D9F8] text-black hover:bg-[#D3D9F8] hover:text-green-100 cursor-pointer">
              3 CONTRATOS
            </Badge>
          </div>
        </div>

        <div className="w-full h-[85%] rounded-md overflow-y-scroll">
          <div className="flex flex-col gap-3 h-full">
            <CardContractualComponent showAll={true} />
            <CardContractualComponent showAll={false} />
            <CardContractualComponent showAll={false} />
          </div>
        </div>
      </div>
    </motion.section>
  )
}
