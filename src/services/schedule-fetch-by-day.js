import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function scheduleFetchByDay({date}) {
  try {
    // Perform request 
    const response = await fetch(`${apiConfig.baseURL}/schedules`)

    // Convert to JSON
    const data = await response.json()

    // Filter the schedules by selected day
    const dailySchedules = data.filter((schedule) => 
      dayjs(date).isSame(schedule.when, 'day')
    )

    return dailySchedules

  } catch (error) {
    alert('Não foi possível buscar os agendamentos do dia selecionado')
    console.log(error);
  }
  
}