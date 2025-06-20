import {schedulesDay} from '../schedules/load.js'
// Select the date input
const selectedDate = document.getElementById('date')

// Reload the hours list when date changes
selectedDate.onchange = () => schedulesDay()