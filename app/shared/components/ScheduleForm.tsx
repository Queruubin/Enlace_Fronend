"use client"

import React from "react"
import "@schedule-x/theme-default/dist/index.css"
import { Table } from "@mui/joy"

interface Clase {
  clase: string
  aula: string
  hora: string
}

enum DiasSemana {
  lunes = "lunes",
  martes = "martes",
  miércoles = "miércoles",
  jueves = "jueves",
  viernes = "viernes",
  sábado = "sábado",
}

interface Horario {
  lunes: Clase[]
  martes: Clase[]
  miércoles: Clase[]
  jueves: Clase[]
  viernes: Clase[]
  sábado: Clase[]
  domingo: Clase[]
}

export const HorarioSemanal = ({ horario }: { horario: Horario }) => {
  // Generamos las horas del día (de 7:00 a 20:00)
  const horas = Array.from({ length: 14 }, (_, i) => 7 + i)

  // Días de la semana que queremos mostrar
  const diasSemana = [
    DiasSemana.lunes,
    DiasSemana.martes,
    DiasSemana.miércoles,
    DiasSemana.jueves,
    DiasSemana.viernes,
    DiasSemana.sábado,
  ]

  // Función para encontrar clases en un día y hora específicos
  const encontrarClase = (dia: DiasSemana, hora: number) => {
    return horario[dia]?.filter((clase) => {
      const [horaInicio, horaFin] = clase.hora
        .split(" - ")
        .map((h) => parseInt(h.split(":")[0]))
      return hora >= horaInicio && hora < horaFin
    })
  }

  return (
    <div className="overflow-x-auto p-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        Horario de Clases
      </h2>
      <Table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-gray-700">
              Hora
            </th>
            {diasSemana.map((dia) => (
              <th
                key={dia}
                className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-gray-700 capitalize"
              >
                {dia}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {horas.map((hora) => (
            <tr key={hora} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b border-gray-200 font-medium text-gray-700">
                {hora}:00 - {hora + 1}:00
              </td>
              {diasSemana.map((dia) => {
                const clases = encontrarClase(dia, hora)
                return (
                  <td
                    key={`${dia}-${hora}`}
                    className="py-2 px-4 border-b border-gray-200"
                  >
                    {clases?.length > 0 ? (
                      <div className="space-y-1">
                        {clases.map((clase, index) => (
                          <div
                            key={index}
                            className="p-2 bg-blue-50 rounded border border-blue-100 text-sm text-blue-800"
                          >
                            <p className="font-medium">{clase.clase}</p>
                            <p className="text-xs">Aula: {clase.aula}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <span className="text-gray-400 text-sm">-</span>
                    )}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
