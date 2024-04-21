interface Props {
    title?: string;
    text: string;
}

export const ParagraphComponent = ({ title, text }: Props) => {
    return (
        <div className="px-3 mb-3">
            {
                (title) && <span className="text-xs text-gray-400">{title}</span>
            }
            <p className="text-sm"> {text} </p>
        </div>
    )
}
