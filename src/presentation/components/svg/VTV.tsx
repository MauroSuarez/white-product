import React, { SVGAttributes } from "react"
import { GlobalSvg } from "."

const VTVIcon: React.FC<SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <GlobalSvg
      width={props.width}
      height={props.height}
      viewBox="50 10 100 100"
      {...props}
    >
      <rect x="10" y="10" width="180" height="95" rx="20" ry="20" fill="none" stroke="currentColor" stroke-width="5"/>
      <text x="100" y="80" font-family="Arial" font-size="60" font-weight="bold" text-anchor="middle" fill="currentColor">VTV</text>
    </GlobalSvg>
  )
}

export { VTVIcon }
