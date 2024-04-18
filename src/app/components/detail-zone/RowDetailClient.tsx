interface Props {
    label: string;
    value: string;
}

export const RowDetailClientComponent = ({ label, value }: Props) => {
    return (
        <div className="flex flex-col ">
            <span className="text-xs text-gray-500">{label}</span>
            <span className="text-2xs font-semibold">{value}</span>
        </div>
    )
}
