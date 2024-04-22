import { ContractualInfoZoneComponent } from "@/app/components/wallet/contractual-info-zone";
import { DetailContractualInfoZoneComponent } from "@/app/components/wallet/detail-contractual-info-zone";

export default function WalletPage() {

    return (
        <div className="h-[90vh] overflow-scroll md:overflow-hidden grid grid-cols-12 gap2 rounded-lg">
            <ContractualInfoZoneComponent className="col-span-12 md:col-span-3 h-full"/>
            <DetailContractualInfoZoneComponent className="col-span-12 md:col-span-9 h-full bg-white"/>
        </div>
    );

}