"use client"

import { DetailZoneComponent } from "@/app/components/main/detail-zone";
import { FilterZoneComponent } from "@/app/components/main/filter-zone";
import { ApprovalZoneComponent, GuaranteeZoneComponent, InvestmentZoneComponent } from "@/app/components/main/areas-detail-zone";
import { useAreaContext } from "@/app/providers/AreaProvider";


export default function MainPage() {

  const area = useAreaContext().currentArea;

  return (
    <div className="h-[90vh] overflow-scroll md:overflow-hidden grid grid-cols-12 gap2">
      <FilterZoneComponent className={`
          ${(area !== 0) ? 'md:col-span-4 ' : 'md:col-span-8'}
          col-span-12 h-full overflow-hidden flex flex-col gap-6`} />
      <DetailZoneComponent className="col-span-12 md:col-span-4 h-full bg-white" />

      {
        (area == 1) ? <InvestmentZoneComponent className="col-span-12 md:col-span-4 h-full bg-white" />
          : (area == 2) ? <GuaranteeZoneComponent className="col-span-12 md:col-span-4 h-full bg-white" />
            : (area == 3) && <ApprovalZoneComponent className="col-span-12 md:col-span-4 h-full bg-white" />

      }

    </div>
  );
}