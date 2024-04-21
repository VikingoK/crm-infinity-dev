import { LayoutBoderComponent } from "@/app/components/global"
import { DetailInvestmentComponent } from "@/app/components/branches-detail-zone";


interface Props {
  className: string;
}

export const InvestmentZoneComponent = ({ className }: Props) => {
  return (
    <LayoutBoderComponent className={className}>
      <DetailInvestmentComponent />
    </LayoutBoderComponent>
  )
}
