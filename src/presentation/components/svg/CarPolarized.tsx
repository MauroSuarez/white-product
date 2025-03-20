import React, { SVGAttributes } from "react"

const CarPolarizeIcon: React.FC<SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 512.00 512.00"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      stroke="#000000"
      strokeWidth={0.00512}
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#CCCCCC"
        strokeWidth={11.264}
      />
      <g id="SVGRepo_iconCarrier">
        <path
          fill="#000000"
          d="M149.6 41L42.88 254.4c23.8 24.3 53.54 58.8 78.42 97.4 24.5 38.1 44.1 79.7 47.1 119.2h270.3L423.3 41H149.6zM164 64h230l8 192H74l90-192zm86.8 17.99l-141 154.81L339.3 81.99h-88.5zM336 279h64v18h-64v-18z"
        />
      </g>
    </svg>
  );
};

export { CarPolarizeIcon }