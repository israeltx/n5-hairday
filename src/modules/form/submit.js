import dayjs from "dayjs"

const form = document.querySelector('form')
const clientName = document.getElementById('client')
const selectedDate = document.getElementById('date')

// Current date 
const inputToday = dayjs(new Date()).format('YYYY-MM-DD')

// Load current date on the input
selectedDate.value = inputToday

// Set the minimum date to the current date
selectedDate.min = inputToday

form.onsubmit = (event) => {
  // Prevent the default loading behaviour from the form
  event.preventDefault()

  try {
    // Get client name
    const name = clientName.value.trim()
    
    if (!name) {
      return alert('Informe um nome, por favor')
    }

    // Get the selected hour
    const hourSelected = document.querySelector('.hour-selected')
    
    // Check if theirs a selected hour
    if (!hourSelected) {
      alert('Selecione um horário, por favor')
    }

    // Get the hour only
    const [hour] = hourSelected.innerText.split(':')

    // Insert the hour on date
    const when = dayjs(selectedDate.value).add(hour, 'hour')

    // Generate ID
    const id = new Date().getTime()

    console.log({id, name, when});
  } catch (error) {
    alert('Não foi possível realizar o agendamento')
    console.log(error);
  }
}