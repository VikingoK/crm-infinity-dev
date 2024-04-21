interface Props {
    title: string;
    subTitle: string;
}

export const TitleSectionComponent = ({ title, subTitle }:Props) => {
    return (
        <div className="flex flex-col px-3 pb-8">
            <span className="text-2xl font-semibold">{title}</span>
            <span className="font-medium">{subTitle}</span>
        </div>
    )
}
