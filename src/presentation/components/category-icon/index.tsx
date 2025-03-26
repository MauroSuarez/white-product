import React from 'react'
import { CarWashIcon } from '../svg/CarWash';
import { CarKeyIcon } from '../svg/CarKey';
import { GarageIcon } from '../svg/Garage';
import { CarElectricIcon } from '../svg/CarElectric';
import { CarOilIcon } from '../svg/CarOil';
import { BicycleIcon } from '../svg/Bicycle';
import { CarRepairIcon } from '../svg/CarRepair';
import { CarTiredIcon } from '../svg/CarTired';
import { CarPaintIcon } from '../svg/CarPaint';
import { CarRardioIcon } from '../svg/CarRadio';
import { CarPolarizeIcon } from '../svg/CarPolarized';
import { CarAccesoriesIcon } from '../svg/CarAccessories';
import { MotorCycleIcon } from '../svg/MotorCycle';
import { TruckBoxIcon } from '../svg/TruckBox';
import { RoadSafetyIcon } from '../svg/RoadSafety';
import { CarAirColdIcon } from '../svg/CarAirCold';
import { CarSeatIcon } from '../svg/CarSeat';
import { VTVIcon } from '../svg/VTV';

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>

type IconDictionary = {
  [key: string]: IconComponent
}

const icons: IconDictionary = {
  'carwash': CarWashIcon,
  'carKey': CarKeyIcon,
  'garage': GarageIcon,
  'carElectric': CarElectricIcon,
  'carOil': CarOilIcon,
  'carRepair': CarRepairIcon,
  'bicycle': BicycleIcon,
  'carTired': CarTiredIcon,
  'carPaint': CarPaintIcon,
  'carRadio': CarRardioIcon,
  'carPolarized': CarPolarizeIcon,
  'carAccessories': CarAccesoriesIcon,
  'motorCycle': MotorCycleIcon,
  'truckBox': TruckBoxIcon,
  'roadSafety': RoadSafetyIcon,
  'carAirCold': CarAirColdIcon,
  'carSeat': CarSeatIcon,
  'vtv': VTVIcon,
}

export const CategoryIcon: React.FC<{ iconName: string }> = ({ iconName }) => {
  const ComponentIcon = icons[iconName]

  if (!ComponentIcon) {
    return null
  }

  return <ComponentIcon width={30} height={30}  />
}
