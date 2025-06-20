import {schedulesDay} from './load.js'
import {scheduleCancel} from '../../services/schedule-cancel.js'

const periods = document.querySelectorAll('.period')

// Give each list (time period) a click event
periods.forEach((period) => {
  // Get the click event on the list
  period.addEventListener('click', async (event) => {
    if(event.target.classList.contains('cancel-icon')) {
      // Get the parent li for the clicked element
      const item = event.target.closest('li')
      // Get the id for removal
      const {id} = item.dataset
      
      // Confirm the selected id
      if (id) {
        // Confirm is the user wants to cancel
        const isConfirm = confirm('Tem certeza que deseja remover o agendamento?')
        if (isConfirm) {
          // Require cancelation from the API
          await scheduleCancel({id})
          // Reload schedules
          schedulesDay()
        }
      }
    }
  })
})