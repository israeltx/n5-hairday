import dayjs from 'dayjs';
import { openingHours } from '../../utils/opening-hours.js'

export function hoursLoad({date}) {
  const opening = openingHours.map((hour) => {
    // Get hours only
    const [scheduleHour] = hour.split(':')
    
    // Add hour to date and check if it's in the past
    const isHourPast = dayjs(date).add(scheduleHour, 'hour').isAfter(dayjs())
    return {
      hour,
      available: isHourPast
    }
  })
  console.log(opening);
}