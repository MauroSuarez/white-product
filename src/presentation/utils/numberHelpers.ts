export const getRandomNumber = (num: number) => {
  return Math.floor(Math.random() * num) + 1
}


interface Coordinate {
  lat: number
  lng: number
}

interface DistanceBetweenProps {
  startPoint: Coordinate
  endPoint: Coordinate
  unit?: 'km' | 'm' 
}

export function getDistanceBetweenCoordinates({
  startPoint,
  endPoint,
  unit = 'm'
}: DistanceBetweenProps): number {
  const EARTH_RADIUS_KILOMETERS = 6371
  const KILOMETER_TO_METER = 1000
  
  const degreesToRadians = (angle: number) => angle * (Math.PI / 180)
  
  const latitudeDifference = degreesToRadians(endPoint.lat - startPoint.lat)
  const longitudeDifference = degreesToRadians(endPoint.lng - startPoint.lng)
  
  const a =
    Math.pow(Math.sin(latitudeDifference / 2), 2) +
    Math.cos(degreesToRadians(startPoint.lat)) *
    Math.cos(degreesToRadians(endPoint.lat)) *
    Math.pow(Math.sin(longitudeDifference / 2), 2)
  
  const angularDistance = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distanceKilometers = EARTH_RADIUS_KILOMETERS * angularDistance
  
  return unit === 'km'
    ? parseFloat(distanceKilometers.toFixed(2))
    : parseFloat((distanceKilometers * KILOMETER_TO_METER).toFixed(2))
}
