import React, { SVGAttributes } from "react"
import { GlobalSvg } from "."

const WifiIcon: React.FC<SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <GlobalSvg
      width={props.width}
      height={props.height}
      fill="currentColor"
      viewBox="0 0 20 20"
      {...props}
    >
      <g strokeWidth={0} />
      <g
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <path
          d="M8.763 13.58a1.75 1.75 0 1 1 2.473 2.477 1.75 1.75 0 0 1-2.473-2.478v.001zM3.4 10.825c3.64-3.64 9.56-3.64 13.2 0l-1.65 1.65a7.007 7.007 0 0 0-9.9 0l-1.65-1.65zm-3.3-3.3c5.46-5.459 14.34-5.459 19.8 0l-1.65 1.65c-4.55-4.55-11.95-4.55-16.5 0L.1 7.526v-.001z"
          fill="#000000"
        />
      </g>
    </GlobalSvg>
  )
}

export { WifiIcon }
