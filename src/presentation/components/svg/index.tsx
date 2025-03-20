import React, { ReactNode } from "react"

interface GlobalSvgProps {
  size?: number // Tamaño del SVG (ancho y alto)
  color?: string // Color del SVG
  children: ReactNode // Contenido del SVG
}

const GlobalSvg: React.FC<GlobalSvgProps> = ({ size = 24, color = "currentColor", children }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24" // Ajusta el viewBox según el SVG
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  )
}

export { GlobalSvg }
