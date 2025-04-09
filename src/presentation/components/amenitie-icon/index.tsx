import React from 'react'

import { CoffeIcon } from '../svg/Coffe'
import { TVIcon } from '../svg/TV'
import { NewspaperIcon } from '../svg/Newspaper'
import { AirConditionerIcon } from '../svg/AirConditioner'
import { FoodIcon } from '../svg/Food'
import { WifiIcon } from '../svg/Wifi'
import { SodaIcon } from '../svg/Soda'
import { ChairIcon } from '../svg/Chair'

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>

type IconDictionary = {
  [key: string]: IconComponent
}

const icons: IconDictionary = {
  'coffe': CoffeIcon,
  'tv': TVIcon,
  'newspaper': NewspaperIcon,
  'airConditioner': AirConditionerIcon,
  'food': FoodIcon,
  'wifi': WifiIcon,
  'soda': SodaIcon,
  'chair': ChairIcon
}

export const AmenitieIcon: React.FC<{ iconName: string }> = ({ iconName }) => {
  const ComponentIcon = icons[iconName]

  if (!ComponentIcon) {
    return null
  }

  return <ComponentIcon width={30} height={30}  />
}
