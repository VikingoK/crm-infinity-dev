
export const BellIcon = (
    props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) => {
    const { color, width = 28, height = 28 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="28" height="28" rx="4" fill="white" />
            <path d="M15.125 6.875V7.50781C17.6562 7.92969 19.625 10.1445 19.625 12.7812V13.9766C19.625 15.5586 20.1523 17.1055 21.1367 18.3711L21.6641 19.0039C21.875 19.2852 21.9102 19.6367 21.7695 19.918C21.6289 20.1992 21.3477 20.375 21.0312 20.375H6.96875C6.61719 20.375 6.33594 20.1992 6.19531 19.918C6.05469 19.6367 6.08984 19.2852 6.30078 19.0039L6.82812 18.3711C7.8125 17.1055 8.375 15.5586 8.375 13.9766V12.7812C8.375 10.1445 10.3086 7.92969 12.875 7.50781V6.875C12.875 6.27734 13.3672 5.75 14 5.75C14.5977 5.75 15.125 6.27734 15.125 6.875ZM13.7188 9.125C11.6797 9.125 10.0625 10.7773 10.0625 12.7812V13.9766C10.0625 15.6641 9.57031 17.2812 8.65625 18.6875H19.3086C18.3945 17.2812 17.9375 15.6641 17.9375 13.9766V12.7812C17.9375 10.7773 16.2852 9.125 14.2812 9.125H13.7188ZM16.25 21.5C16.25 22.0977 16.0039 22.6953 15.582 23.1172C15.1602 23.5391 14.5625 23.75 14 23.75C13.4023 23.75 12.8047 23.5391 12.3828 23.1172C11.9609 22.6953 11.75 22.0977 11.75 21.5H16.25Z" fill="#575757" />
        </svg>
    )
}
