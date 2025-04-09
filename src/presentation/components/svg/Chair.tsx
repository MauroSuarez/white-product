import React, { SVGAttributes } from "react"
import { GlobalSvg } from "."

const ChairIcon: React.FC<SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <GlobalSvg
      width={props.width}
      height={props.height}
      fill="currentColor"
      viewBox="0 0 512 512"
      {...props}
    >
       <g strokeWidth={0} />
        <g
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          <style type="text/css">{" .st0{fill:#000000;} "}</style>
          <g>
            <rect
              x={262.97}
              y={298.368}
              className="st0"
              width={33.329}
              height={155.344}
            />
            <path
              className="st0"
              d="M243.216,23.156l-50.788,201.47h-42.233l-89.148,13.431v36.624l10.08,1.437h-10.08v177.595h33.329V279.441 l55.819,7.952V512h41.146V287.392h158.98V512h41.137V259.523L450.953,0L243.216,23.156z M349.317,224.626H225.884l43.386-172.06 l122.188-11.116L349.317,224.626z"
            />
          </g>
        </g>
    </GlobalSvg>
  )
}

export { ChairIcon }
