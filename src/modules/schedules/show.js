import dayjs from "dayjs";

// Select the time periods
const periodMorning = document.getElementById('period-morning')
const periodAfternoon = document.getElementById('period-afternoon')
const periodNight = document.getElementById('period-night')

export function scheduleShow({dailySchedules}) {
  try {
    // Clear the ul for good measure
    periodMorning.innerHTML = ''
    periodAfternoon.innerHTML = ''
    periodNight.innerHTML = ''

    // Render schedules by time period
    dailySchedules.forEach((schedule) => {
      const item = document.createElement('li')
      const time = document.createElement('strong')
      const name = document.createElement('span')

      // Add schedule ID
      item.setAttribute('data-id', schedule.id)

      time.textContent = dayjs(schedule.when).format('HH:mm')
      name.textContent = schedule.name

      // Create cancel icon
      const cancelIcon = document.createElement('img')
      cancelIcon.classList.add('cancel-icon')
      cancelIcon.setAttribute('src', './src/assets/cancel.svg')
      cancelIcon.setAttribute('alt', 'Cancelar')

      // Add the icon on the item
      item.append(time, name, cancelIcon)

      // Get the hour only
      const hour = dayjs(schedule.when).hour()

      // Render the time period
      if (hour <= 12) {
        periodMorning.appendChild(item)
      } else if (hour > 12) {
        periodAfternoon.appendChild(item)
      } else {
        periodNight.appendChild(item)
      }
    })
  } catch (error) {
    alert('Não foi possível exibir os agendamentos')
    console.log(error);
  }
}