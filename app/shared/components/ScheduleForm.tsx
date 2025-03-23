"use client"

import React, { useState } from "react"
import { CgClose } from "react-icons/cg"
import { FormControlP } from "./FormContorl"
import { Input } from "@mui/joy"

const days = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
]
const hours = Array.from({ length: 13 }, (_, i) => `${7 + i}:00`)

function ScheduleForm({
  day,
  hour,
  onClose,
}: {
  day: string
  hour: string
  onClose: () => void
}) {
  return (
    <section
      className="w-full h-full 
    top-0 left-0 
    flex items-center justify-center
    p-4 
    rounded-lg shadow-xl 
    fixed bg-gray-300/50"
    >
      <div className="w-[300px] h-auto bg-white p-4 rounded-lg shadow-xl">
        <div className="flex justify-between items-center">
          <h3>Agregar horario</h3>
          <CgClose color="black" size={23} onClick={onClose} />
        </div>

        <p className="text-sm text-gray-500">
          Día: {day} - Hora: {hour}
        </p>

        <FormControlP>
          <Input type="text" placeholder="Escoja la materia a agregar" />
        </FormControlP>

        <FormControlP>
          <Input type="datetime-local" />
        </FormControlP>

        <div>
          <FormControlP>
            <Input placeholder="" type="time" />
          </FormControlP>
          <FormControlP>
            <Input placeholder="" type="time" />
          </FormControlP>
        </div>
      </div>
    </section>
  )
}

export function ScheduleGrid() {
  const [selectedCell, setSelectedCell] = useState<{
    day: string
    hour: string
  } | null>(null)
  return (
    <div className="w-full max-w-full mx-auto mt-8">
      <div className="grid grid-cols-8 ">
        {/* Encabezados de los días */}
        <div className=" p-2 font-bold text-center bg-gray-100">Hora</div>
        {days.map((day) => (
          <div key={day} className=" p-2 font-bold text-center bg-gray-100">
            {day}
          </div>
        ))}

        {/* Filas de horario */}
        {hours.map((hour) => (
          <React.Fragment key={hour}>
            <div className="p-2 text-center font-semibold bg-gray-50 ">
              {hour}
            </div>
            {days.map((day) => (
              <div
                key={day + hour}
                className="border border-gray-200 p-2 h-20 hover:bg-blue-100 cursor-pointer"
                onClick={() => setSelectedCell({ day, hour })}
              ></div>
            ))}
          </React.Fragment>
        ))}
      </div>
      {selectedCell && (
        <ScheduleForm
          day={selectedCell.day}
          hour={selectedCell.hour}
          onClose={() => setSelectedCell(null)}
        />
      )}
    </div>
  )
}
