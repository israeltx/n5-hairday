import dayjs from "dayjs"

const form = document.querySelector('form')
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
}