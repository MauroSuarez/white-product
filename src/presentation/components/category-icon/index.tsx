import React from 'react'
import { CarWhashIcon } from '../svg/CarWhash';
import { CarKeyIcon } from '../svg/CarKey';
import { GarageIcon } from '../svg/Garage';
import { CarElectricIcon } from '../svg/CarElectric';

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>


type IconDictionary = {
  [key: string]: IconComponent;
}

const icons: IconDictionary = {
  'carwhash': CarWhashIcon,
  'carKey': CarKeyIcon,
  'garage': GarageIcon,
  'carElectric': CarElectricIcon,
}

export const CategoryIcon: React.FC<{ iconName: string }> = ({ iconName }) => {
  const ComponentIcon = icons[iconName]

  if (!ComponentIcon) {
    return null
  }

  return <ComponentIcon width={30} height={30}  />
}
