const periods = document.querySelectorAll('.period')

// Give each list (time period) a click event
periods.forEach((period) => {
  // Get the click event on the list
  period.addEventListener('click', (event) => {
    if(event.target.classList.contains('cancel-icon')) {
      // Get the parent li for the clicked element
      const item = event.target.closest('li')
      const {id} = item.dataset
      
      if (id) {
        const isConfirm = confirm('Tem certeza que deseja remover o agendamento?')
        if (isConfirm) {
          console.log('Excluido');
        }
      }
    }
  })
})