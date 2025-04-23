
/**
 * @example getDescriptionBetweenDates(new Date('2025-03-26 13:18:45.656426+00').getTime())
 * @return 'hace 45 minutos'
 * @param givenTime 
 * @returns 
 */
export function getDescriptionBetweenDates(givenTime: string | number): string {
  if (givenTime === '') {
    return givenTime
  }
  
  const date = new Date(+givenTime)
  const milliseconds = new Date().getTime() - date.getTime()
  
  const numberEnding = (number: number) => number > 1 ? 's' : ''
  const number = (num: number) => num > 9 ? '' + num : '0' + num
  
  const getTime = (): string => {
    let temp = Math.floor(milliseconds / 1000)
    
    const years = Math.floor(temp / 31536000)
    if (years) {
      const month = number(date.getUTCMonth() + 1)
      const day = number(date.getUTCDate())
      const year = date.getUTCFullYear() % 100
      return `${day}-${month}-${year}`
    }
    
    const days = Math.floor((temp %= 31536000) / 86400)
    if (days) {
      if (days < 28) {
        return `${days} dia${numberEnding(days)}`
      } else {
        const months = [
          'Ene',
          'Feb',
          'Mar',
          'Abr',
          'May',
          'Jun',
          'Jul',
          'Ago',
          'Sep',
          'Oct',
          'Nov',
          'Dic'
        ]
        const month = months[date.getUTCMonth()]
        const day = number(date.getUTCDate())
        return `${day} ${month}`
      }
    }
    
    const hours = Math.floor((temp %= 86400) / 3600)
    if (hours) {
      return `hace ${hours} hora${numberEnding(hours)}`
    }
    
    const minutes = Math.floor((temp %= 3600) / 60)
    if (minutes) {
      return `hace ${minutes} minuto${numberEnding(minutes)}`
    }
    
    return 'hace unos segundos'
  }
  
  return getTime()
}