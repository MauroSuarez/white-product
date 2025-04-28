import React from 'react'

import { CraneIcon } from '../svg/Crane'
import { DeliveryHouseIcon } from '../svg/DeliveryHouse'
import { Hours24Icon } from '../svg/Hours24'
import { ServiceHouseIcon } from '../svg/ServiceHouse'

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>

type IconDictionary = {
  [key: string]: IconComponent
}

const icons: IconDictionary = {
  'crane': CraneIcon,
  'deliveryHouse': DeliveryHouseIcon,
  'hours24': Hours24Icon,
  'serviceHouse': ServiceHouseIcon
}

type AmenitiesIconProps = {
  iconName: string
  width?: number
  height?: number
  className?: string
}

export const BasicServiceIcon: React.FC<AmenitiesIconProps> = ({
  iconName,
  width = 30,
  height = 30,
  className
}) => {
  const ComponentIcon = icons[iconName]

  if (!ComponentIcon) {
    return null
  }

  return <ComponentIcon width={width} height={height} className={className}  />
}
