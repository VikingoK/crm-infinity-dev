interface Props {
    label: string;
    value?: string;
    children?: React.ReactNode;
}

export const RowDetailClientComponent = ({ label, value, children }: Props) => {
    return (
        <div className="flex flex-col ">
            <span className="text-xs text-gray-500">{label}</span>
            {
                !children
                    ? <span className="text-2xs font-semibold">{value}</span>
                    : children

            }
        </div>
    )
}
