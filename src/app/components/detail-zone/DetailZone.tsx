import { DetailResultComponent } from "@/app/components";
import { LayoutBoderComponent } from "@/app/components/global"


interface Props {
    className: string;
}

export const DetailZoneComponent = ({ className }: Props) => {
    return (
        <LayoutBoderComponent
            className={className}
            initial={{ opacity: 0, y: 0, x: -10}}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.2 }}
        >
            <DetailResultComponent />
        </LayoutBoderComponent>
    )
}
