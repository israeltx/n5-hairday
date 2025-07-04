import dayjs from 'dayjs';
import { openingHours } from '../../utils/opening-hours.js'
import { hoursClick } from './hours-click.js'

// Select the hours list
const hours = document.getElementById('hours')

export function hoursLoad({date, dailySchedules}) {
  // Clear the hours list
  hours.innerHTML = ''

  // Get all unaviable hours
  const unavailableHours = dailySchedules.map((schedule) =>
    dayjs(schedule.when).format('HH:mm')
  )

  const opening = openingHours.map((hour) => {
    // Get hours only
    const [scheduleHour] = hour.split(':')
    
    // Add hour to date and check if it's in the past
    const isHourPast = dayjs(date).add(scheduleHour, 'hour').isBefore(dayjs())

    const available = !unavailableHours.includes(hour) && !isHourPast

    return {
      hour,
      available
    }
  })

  // Render the hours
  opening.forEach(({hour, available}) => {
    const li = document.createElement('li')
    li.classList.add('hour')
    li.classList.add(available ? 'hour-available' : 'hour-unavailable')

    li.textContent = hour

    if (hour === '9:00') {
      hourHeaderAdd('Manhã')
    } else if (hour === '13:00') {
      hourHeaderAdd('Tarde')
    } else if (hour === '18:00') {
      hourHeaderAdd('Noite')
    }

    hours.append(li)
  })

  // Add the hour-selected class to available hours
  hoursClick()
}

function hourHeaderAdd(title) {
  const header = document.createElement('li')
  header.classList.add('hour-period')
  header.textContent = title

  hours.append(header)
}