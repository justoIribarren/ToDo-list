import { useState, useEffect } from 'react'

export const useDate = () => {
  const [date, setDate] = useState(null)
  const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
  const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
  const now = new Date()

  useEffect(() => {
    setDate({
      month: months[now.getMonth()],
      day: days[now.getDay()],
      number: now.getDate(),
      hour: now.getHours(),
      minutes: now.getMinutes()
    })
  }, [])

  return date
}
