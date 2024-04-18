import { DetailResultComponent } from "@/app/components/index";

interface Props {
    className: string;
}

export const DetailZoneComponent = ({ className }: Props) => {
    return (
    <div className={className}>
        <div className="w-full h-[850px] border-l border-gray-300 p-5">
            <div className="w-full h-full rounded-md overflow-y-scroll border border-gray-300">
                <DetailResultComponent />
            </div>
        </div>
    </div>
  )
}
