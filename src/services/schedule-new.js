import { schedulesDay } from "../modules/schedules/load";
import { apiConfig } from "./api-config.js";

export async function schedulesNew({id, name, when}) {
  try {
    // Perform request to send schudulling data
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id, name, when})
    })
    // Exit success message
    alert('Agendamento realizado com sucesso')
  } catch (error) {
    alert('Não foi possível agendar')
    console.log(error);
  }
}