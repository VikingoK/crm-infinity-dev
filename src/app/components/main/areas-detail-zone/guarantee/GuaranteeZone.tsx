import { LayoutBoderComponent } from "@/app/components/global"
import { DetailGuaranteeComponent } from "@/app/components/main/areas-detail-zone";

interface Props {
  className: string;
}

export const GuaranteeZoneComponent = ({ className }: Props) => {
  return (
    <LayoutBoderComponent className={className}>
      <DetailGuaranteeComponent />
    </LayoutBoderComponent>
  )
}
