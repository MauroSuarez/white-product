import React, { SVGAttributes } from "react"
import { GlobalSvg } from "."

const CarElectricIcon: React.FC<SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <GlobalSvg
      width={props.width}
      height={props.height}
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={3.58012}
      {...props}
    >
      <g strokeWidth={0} />
      <g
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g>
        <g>
          <path
            fill="currentColor"
            className="st0"
            d="M452.01,113.752V64.893H294.666v48.859H217.33V64.893H59.988v48.859H0v333.356h512V154.807v-41.055H452.01z M470.942,406.049H41.055V154.807h59.99v-48.856h75.227v48.856h159.453v-48.856h75.226v48.856h59.99V406.049z"
          />
          <polygon
            fill="currentColor"
            className="st0"
            points="178.248,207.041 133.234,207.041 133.234,252.055 88.221,252.055 88.221,297.068 133.234,297.068 133.234,342.082 178.248,342.082 178.248,297.068 223.262,297.068 223.262,252.055 178.248,252.055 "
          />
          <polygon
            fill="currentColor"
            className="st0"
            points="333.75,252.055 288.736,252.055 288.736,297.068 333.75,297.068 378.764,297.068 423.777,297.068 423.777,252.055 378.764,252.055 "
          />
        </g>
      </g>
    </GlobalSvg>
  )
}

export { CarElectricIcon }