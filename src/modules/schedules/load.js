import { hoursLoad } from "../form/hours-load.js";

// Select date input
const selectedDate = document.getElementById('date')

export function schedulesDay() {
  // Get date from input
  const date = selectedDate.value

  // Render available hours
  hoursLoad({date})
}