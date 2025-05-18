"use client"
import { Option, Select } from "@mui/joy"
import { useState } from "react"

const mockDataPlanEstudios = [
  {
    semestres: [
      {
        numero: 1,
        asignaturas: [
          {
            codigo: "MAT101",
            nombre: "Cálculo I",
            creditos: 4,
            horas_teoria: 4,
            horas_practica: 2,
            obligatoria: true,
            prerrequisitos: [],
          },
          {
            codigo: "PRO101",
            nombre: "Programación I",
            creditos: 4,
            horas_teoria: 3,
            horas_practica: 3,
            obligatoria: true,
            prerrequisitos: [],
          },
        ],
      },
      {
        numero: 2,
        asignaturas: [
          {
            codigo: "MAT102",
            nombre: "Cálculo II",
            creditos: 4,
            horas_teoria: 4,
            horas_practica: 2,
            obligatoria: true,
            prerrequisitos: [{ tipo: "materia", codigo: "MAT101" }],
          },
          {
            codigo: "PRO102",
            nombre: "Programación II",
            creditos: 4,
            horas_teoria: 3,
            horas_practica: 3,
            obligatoria: true,
            prerrequisitos: [
              { tipo: "materia", codigo: "PRO101" },
              { tipo: "semestre", minimo: 2 },
            ],
          },
        ],
      },
    ],
  },
]

const carreras = {
  "Ingeniería de Sistemas": {
    id: "Ingeniería de Sistemas",
    nombre: "Ingeniería de Sistemas",
    duracion: 10,
    plan_estudio: mockDataPlanEstudios,
  },
  "Ingeniería Electrónica": {
    id: "Ingeniería Electrónica",
    nombre: "Ingeniería Electrónica",
    duracion: 10,
    plan_estudio: mockDataPlanEstudios,
  },
  "Ingeniería de Software": {
    id: "Ingeniería de Software",
    nombre: "Ingeniería de Software",
    duracion: 10,
    plan_estudio: mockDataPlanEstudios,
  },
  "Ingeniería Civil": {
    id: "Ingeniería Civil",
    nombre: "Ingeniería Civil",
    duracion: 10,
    plan_estudio: mockDataPlanEstudios,
  },
  "Ingeniería Mecánica": {
    id: "Ingeniería Mecánica",
    nombre: "Ingeniería Mecánica",
    duracion: 10,
    plan_estudio: mockDataPlanEstudios,
  },
}

export default function StudyPlanPage() {
  const [plan, setPlan] = useState(carreras["Ingeniería de Sistemas"])

  const handleCarreraChange = (
    _event: React.SyntheticEvent | null,
    newValue: string | null
  ) => {
    if (!newValue) return

    const carreraSeleccionada = Object.values(carreras).find(
      (carrera) => carrera.id === newValue
    )

    if (carreraSeleccionada) {
      setPlan(carreraSeleccionada)
    }
  }

  if (!plan) {
    return (
      <section className="w-full min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Cargando información...
          </h2>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 p-4 text-white">
          <h1 className="text-2xl font-bold">Plan de Estudios</h1>
        </div>

        {/* Contenido principal */}
        <div className="p-6">
          {/* Selector de carrera */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div className="w-full md:w-1/2">
              <Select
                defaultValue={plan.id}
                placeholder="Seleccione una carrera"
                onChange={handleCarreraChange}
                sx={{ width: "100%" }}
              >
                {Object.values(carreras).map((carrera) => (
                  <Option key={carrera.id} value={carrera.id}>
                    {carrera.nombre}
                  </Option>
                ))}
              </Select>
            </div>

            <div className="text-right">
              <h2 className="text-xl font-bold text-gray-800">{plan.nombre}</h2>
              <p className="text-gray-600">
                Duración: {plan.duracion} semestres
              </p>
            </div>
          </div>

          {/* Plan de estudios */}
          <div className="space-y-8">
            {plan.plan_estudio.map((planEstudio, index) => (
              <div key={index} className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">
                  Plan de Estudios
                </h3>

                {planEstudio.semestres.map((semestre) => (
                  <div
                    key={semestre.numero}
                    className="bg-gray-50 rounded-lg p-4 shadow-sm"
                  >
                    <h4 className="text-lg font-semibold text-blue-700 mb-3">
                      Semestre {semestre.numero}
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {semestre.asignaturas.map((asignatura) => (
                        <div
                          key={asignatura.codigo}
                          className="bg-white p-4 rounded-md border border-gray-200 hover:shadow-md transition-shadow"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h5 className="font-medium text-gray-900">
                                {asignatura.nombre}
                              </h5>
                              <p className="text-sm text-gray-600">
                                {asignatura.codigo}
                              </p>
                            </div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                              {asignatura.creditos} créditos
                            </span>
                          </div>

                          <div className="mt-2 text-sm text-gray-500">
                            <p>Horas teoría: {asignatura.horas_teoria}</p>
                            <p>Horas práctica: {asignatura.horas_practica}</p>
                            <p className="mt-1">
                              {asignatura.obligatoria ? (
                                <span className="text-green-600">
                                  Obligatoria
                                </span>
                              ) : (
                                <span className="text-purple-600">
                                  Electiva
                                </span>
                              )}
                            </p>
                          </div>

                          {asignatura.prerrequisitos.length > 0 && (
                            <div className="mt-2">
                              <p className="text-xs font-medium text-gray-500">
                                Prerrequisitos:
                              </p>
                              <ul className="text-xs text-gray-600 space-y-1 mt-1">
                                {asignatura.prerrequisitos.map((prereq, i) => (
                                  <li key={i}>
                                    {prereq.tipo === "materia"
                                      ? `Materia: ${prereq.codigo}`
                                      : `Semestre mínimo: ${prereq.minimo}`}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
