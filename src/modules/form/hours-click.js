export function hoursClick() {
    const hours = document.querySelectorAll('.hour-available')
    
    hours.forEach((available) => {
      available.addEventListener('click', (selected) => {
        // Remove the hour-selected class from all for good measure
        hours.forEach((hour) => {
          hour.classList.remove('hour-selected')
        })
        // Add class on the selected li
        selected.target.classList.add('hour-selected')
      })
    })
}