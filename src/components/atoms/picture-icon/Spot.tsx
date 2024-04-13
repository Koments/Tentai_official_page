import {SpotProps} from "./Types";

export const Spot = ({left, top, transform}: SpotProps) => {
    return (
        <div style={{position: "absolute", left: left, top: top, transform: transform}}>
            <svg width="436" height="356" viewBox="0 0 436 356" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_1_3077)">
                    <path
                        d="M106.08 270.384C188.574 313.93 314.401 310.532 366.968 210.949C419.535 111.366 393.461 62.498 310.967 18.9519C228.473 -24.5942 168.676 -32.1893 116.109 67.3937C63.5426 166.977 23.5857 226.838 106.08 270.384Z"
                        fill="url(#paint0_linear_1_3077)" fillOpacity="0.3"/>
                    <path
                        d="M106.313 269.942C147.472 291.668 199.442 301.682 247.667 293.846C295.878 286.013 340.327 260.346 366.526 210.715C392.786 160.967 399.335 124.01 389.142 94.0977C378.947 64.1778 351.952 41.1522 310.734 19.3941C269.493 -2.37542 234.05 -15.0846 202.395 -10.0069C170.785 -4.9367 142.8 17.9013 116.552 67.6271C112.854 74.6327 109.219 81.4396 105.686 88.0567C96.6573 104.966 88.2902 120.637 81.2148 135.217C71.3705 155.503 64.0495 173.635 60.938 189.996C57.8285 206.347 58.9285 220.902 65.8946 234.066C72.8648 247.238 85.742 259.083 106.313 269.942Z"
                        stroke="black"/>
                </g>
                <defs>
                    <filter id="filter0_f_1_3077" x="0.190865" y="-70.2208" width="452.625" height="425.816"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="29.3" result="effect1_foregroundBlur_1_3077"/>
                    </filter>
                    <linearGradient id="paint0_linear_1_3077" x1="162.193" y1="26.0035" x2="300.125" y2="229.462"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF6600"/>
                        <stop offset="1" stopColor="#D128A1"/>
                    </linearGradient>
                </defs>
            </svg>

        </div>
    );
};