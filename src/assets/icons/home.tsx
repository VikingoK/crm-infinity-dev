
export const HomeIcon = (
    props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) => {
    const { color, width = 28, height = 28 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_421_71)">
                <rect x="8" y="4.16663" width="28" height="28" rx="4" fill="#D3D9F8" shapeRendering="crispEdges" />
                <path d="M30.9688 18.6666C30.9688 19.2291 30.5 19.6666 29.9688 19.6666H28.9688L29 24.6666C29 24.7604 29 24.8541 29 24.9166V25.4166C29 26.1354 28.4375 26.6666 27.75 26.6666H27.25C27.1875 26.6666 27.1562 26.6666 27.125 26.6666C27.0938 26.6666 27.0312 26.6666 27 26.6666H25.25C24.5312 26.6666 24 26.1354 24 25.4166V22.6666C24 22.1354 23.5312 21.6666 23 21.6666H21C20.4375 21.6666 20 22.1354 20 22.6666V25.4166C20 26.1354 19.4375 26.6666 18.75 26.6666H17C16.9375 26.6666 16.9062 26.6666 16.8438 26.6666C16.8125 26.6666 16.7812 26.6666 16.75 26.6666H16.25C15.5312 26.6666 15 26.1354 15 25.4166V21.9166C15 21.9166 15 21.8854 15 21.8541V19.6666H14C13.4375 19.6666 13 19.2291 13 18.6666C13 18.3854 13.0938 18.1354 13.3125 17.9166L21.3125 10.9479C21.5312 10.7291 21.7812 10.6666 22 10.6666C22.2188 10.6666 22.4688 10.7604 22.6562 10.9166L30.625 17.9166C30.875 18.1354 31 18.3854 30.9688 18.6666Z" fill="#3C57E0" />
            </g>
            <defs>
                <filter id="filter0_d_421_71" x="0" y="0.166626" width="44" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_421_71" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.235294 0 0 0 0 0.341176 0 0 0 0 0.878431 0 0 0 0.04 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_421_71" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_421_71" result="shape" />
                </filter>
            </defs>
        </svg>

    )
}
