import { Progress } from '@/components/ui/progress'

interface Props {
    title: string;
    subTitle?: string;
    valueProgress: number;
    contractFinalDay?: string;
    goodPercentage: number;
    badPercentage: number;
    className?: string;
}

export const CardProgressComponent = ({
    title,
    subTitle,
    valueProgress,
    contractFinalDay,
    goodPercentage,
    badPercentage,
    className }: Props) => {
    return (
        <div className={`${className}
        flex flex-col gap-3 border border-gray-300 rounded-lg px-3 py-2`}>
            <span className="text-gray-400 font-medium">{title}</span>
            <Progress className="bg-[#00bd9d]" value={valueProgress} />
            <div className="flex flex-row justify-between text-2xl">
                <span className="font-medium">{goodPercentage}%</span>
                <span className="font-medium text-gray-300">{badPercentage}%</span>
            </div>
            {
                (contractFinalDay && subTitle) &&
                <div className="flex flex-row gap-2 items-center">
                    <span className="text-xs text-gray-400">
                        {subTitle}
                    </span>
                    <span className="font-medium">{contractFinalDay}</span>
                </div>
            }
        </div>
    )
}
