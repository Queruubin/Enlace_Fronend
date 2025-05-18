"use client"

import { HorarioSemanal } from "@/app/shared/components/ScheduleForm"
import { Button } from "@mui/joy"
import { useState } from "react"
const mockData = {
  nombre: "Juan",
  apellido: "Pérez",
  email: "juan.perez@example.com",
  direccion: "Calle Falsa 123, Ciudad Ejemplo",
  fecha_creacion: "2023-05-15T10:30:00Z",
  telefono: "+34 123 456 789",
  fecha_nacimiento: "2000-01-01",
  estado_civil: "Soltero",
  nacionalidad: "Española",
  genero: "Masculino",
  ocupacion: "Estudiante",
  estudios: "Ingeniería Informática",

  horario: {
    lunes: [
      {
        clase: "Matemáticas",
        aula: "A201",
        hora: "08:00 - 10:00",
      },
      {
        clase: "Física",
        aula: "B105",
        hora: "14:00 - 16:00",
      },
    ],
    martes: [
      {
        clase: "Programación",
        aula: "Lab3",
        hora: "10:00 - 12:00",
      },
    ],
    miércoles: [
      {
        clase: "Historia",
        aula: "A102",
        hora: "09:00 - 11:00",
      },
      {
        clase: "Inglés",
        aula: "C304",
        hora: "16:00 - 18:00",
      },
    ],
    jueves: [
      {
        clase: "Química",
        aula: "Lab1",
        hora: "08:00 - 11:00",
      },
    ],
    viernes: [
      {
        clase: "Literatura",
        aula: "B202",
        hora: "11:00 - 13:00",
      },
    ],
    sábado: [
      {
        clase: "Educación Física",
        aula: "Gimnasio",
        hora: "07:00 - 09:00",
      },
    ],
    domingo: [],
  },
}

export default function GetSchedule() {
  const [schedule, setSchedule] = useState<string[] | null>(null)

  return (
    <div className="flex flex-col items-start w-full h-full bg-white px-2">
      <h2 className="text-2xl font-bold mb-4">Horario</h2>
      <p className="text-gray-600 mb-4">Aquí puedes ver el horario.</p>
      {schedule ? (
        <HorarioSemanal horario={mockData.horario} />
      ) : (
        <Button variant="solid">Ver horario</Button>
      )}
    </div>
  )
}
