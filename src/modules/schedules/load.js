import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { scheduleShow } from '../schedules/show.js'
import { hoursLoad } from "../form/hours-load.js";


// Select date input
const selectedDate = document.getElementById('date')

export async function schedulesDay() {
  // Get date from input
  const date = selectedDate.value

  // Search the schedule on the API
  const dailySchedules = await scheduleFetchByDay({date})
  
  // Render schudules
  scheduleShow({dailySchedules})

  // Render available hours
  hoursLoad({date, dailySchedules})
}