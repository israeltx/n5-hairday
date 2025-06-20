import dayjs from 'dayjs';
import { openingHours } from '../../utils/opening-hours.js'

// Select the hours list
const hours = document.getElementById('hours')

export function hoursLoad({date}) {
  const opening = openingHours.map((hour) => {
    // Get hours only
    const [scheduleHour] = hour.split(':')
    
    // Add hour to date and check if it's in the past
    const isHourPast = dayjs(date).add(scheduleHour, 'hour').isAfter(dayjs())
    return {
      hour,
      available: isHourPast,
    }
  })

  // Render the hours
  opening.forEach(({hour, available}) => {
    const li = document.createElement('li')
    li.classList.add('hour')
    li.classList.add(available ? 'hour-available' : 'hour-unavailable')

    li.textContent = hour
    hours.append(li)
  })
}