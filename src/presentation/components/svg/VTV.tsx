import React, { SVGAttributes } from "react"
import { GlobalSvg } from "."

const VTVIcon: React.FC<SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <GlobalSvg
      width={props.width}
      height={props.height}
      {...props}
    >
      <rect x="5" y="5" width="90" height={props.width} fill="none" stroke="currentColor" stroke-width="2"/>
      <text x="50%" y="50%" font-family="Arial" font-size="10" fill="currentColor" text-anchor="middle" dominant-baseline="middle">vtv</text>
    </GlobalSvg>
  )
}

export { VTVIcon }
