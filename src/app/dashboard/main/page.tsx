"use client"

import { DetailZoneComponent, FilterZoneComponent } from "@/app/components";
import { ApprovalZoneComponent, GuaranteeZoneComponent, InvestmentZoneComponent } from "@/app/components/branches-detail-zone";
import { useBranchContext } from "@/app/providers/DetailZoneProvider";


export default function MainPage() {

  const branch = useBranchContext().currentBranch;

  return (
    <div className="h-[90vh] overflow-scroll md:overflow-hidden grid grid-cols-12 gap2">
      <FilterZoneComponent className={`
          ${(branch !== 0) ? 'md:col-span-4 ' : 'md:col-span-8'}
          col-span-12 h-full overflow-hidden flex flex-col gap-6`} />
      <DetailZoneComponent className="col-span-12 md:col-span-4 h-full bg-white" />

      {
        (branch == 1) ? <InvestmentZoneComponent className="col-span-12 md:col-span-4 h-full bg-white" />
          : (branch == 2) ? <GuaranteeZoneComponent className="col-span-12 md:col-span-4 h-full bg-white" />
            : (branch == 3) && <ApprovalZoneComponent className="col-span-12 md:col-span-4 h-full bg-white" />

      }

    </div>
  );
}