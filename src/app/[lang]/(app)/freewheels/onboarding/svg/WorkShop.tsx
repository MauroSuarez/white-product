import React, { SVGAttributes } from "react"
import { GlobalSvg } from "@/presentation/components/svg"


const WorkShopIcon: React.FC<SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <GlobalSvg
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      fill="currentColor"
      {...props}
    >
      <g strokeWidth={0} />
      <g
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g>
        <rect
          x={27.167}
          y={176.849}
          style={{
            fill: "#B3D8F4",
          }}
          width={457.665}
          height={264.359}
        />
        <rect
          x={67.918}
          y={176.849}
          style={{
            fill: "#FFFFFF",
          }}
          width={376.163}
          height={264.359}
        />
        <polygon
          style={{
            fill: "#B3D8F4",
          }}
          points="444.082,387.657 444.082,441.208 67.918,441.208 67.918,387.657 114.416,342.079 397.594,342.079 "
        />
        <rect
          x={7.837}
          y={93.257}
          style={{
            fill: "#B3D8F4",
          }}
          width={496.327}
          height={83.592}
        />
        <path d="M512,85.42H0v99.265h19.331v264.359h473.339V184.686H512V85.42z M35.004,184.686h25.078v248.686H35.004V184.686z M75.755,349.91h19.473L75.755,369V349.91z M75.755,334.237v-17.371h36.049v-15.673H75.755V283.82h360.49v17.371H169.273v15.673 h266.971v17.371H75.755z M436.245,349.91V369l-19.473-19.09H436.245z M436.245,268.147H75.755v-17.371h300.408v-15.673H75.755 v-17.371h360.49V268.147z M75.755,390.949l41.862-41.038h276.766l41.862,41.038v42.423H75.755V390.949z M436.245,202.057H75.755 v-17.371h360.49V202.057z M476.996,433.371h-25.078V184.686h25.078V433.371z M496.327,169.012H15.673v-67.918h480.653V169.012z" />
        <rect x={47.02} y={62.955} width={417.959} height={15.673} />
        <rect x={132.702} y={301.192} width={15.673} height={15.673} />
        <rect x={397.061} y={235.102} width={15.673} height={15.673} />
        <g>
          <rect
            x={211.592}
            y={127.216}
            style={{
              fill: "#FFFFFF",
            }}
            width={15.673}
            height={15.673}
          />
          <rect
            x={284.735}
            y={127.216}
            style={{
              fill: "#FFFFFF",
            }}
            width={15.673}
            height={15.673}
          />
          <rect
            x={248.163}
            y={127.216}
            style={{
              fill: "#FFFFFF",
            }}
            width={15.673}
            height={15.673}
          />
        </g>
      </g>
    </GlobalSvg>
  )
}

export { WorkShopIcon }
