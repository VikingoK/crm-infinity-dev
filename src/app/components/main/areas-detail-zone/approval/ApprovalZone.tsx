import { DetailApprovalComponet } from "@/app/components/main/areas-detail-zone";
import { LayoutBoderComponent } from "@/app/components/global";

interface Props {
  className: string;
}

export const ApprovalZoneComponent = ({ className }: Props) => {
  return (
    <LayoutBoderComponent className={className}>
      <DetailApprovalComponet />
    </LayoutBoderComponent>
  )
}
