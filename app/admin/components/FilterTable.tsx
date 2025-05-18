"use client"

import { Button, FormControl, Input, Option, Select } from "@mui/joy"
import { useRouter, useSearchParams } from "next/navigation"
import { useState, useTransition } from "react"

const materiasIngenieria = [
  // Materias comunes en ingeniería
  "Matemáticas Aplicadas",
  "Álgebra Lineal",
  "Cálculo Diferencial e Integral",
  "Ecuaciones Diferenciales",
  "Probabilidad y Estadística",
  "Física General",
  "Química General",
  "Programación y Algoritmos",
  "Métodos Numéricos",
  "Economía y Gestión de Proyectos",

  // Ingeniería Civil
  "Mecánica de Materiales",
  "Geotecnia y Suelos",
  "Estructuras de Concreto y Acero",
  "Hidráulica y Mecánica de Fluidos",
  "Topografía",
  "Diseño de Infraestructuras",

  // Ingeniería de Software / Sistemas
  "Arquitectura de Software",
  "Bases de Datos",
  "Redes y Seguridad Informática",
  "Inteligencia Artificial",
  "Desarrollo Web y Móvil",
  "Computación en la Nube",
  "DevOps y CI/CD",

  // Ingeniería Electrónica
  "Circuitos Eléctricos",
  "Microcontroladores y Sistemas Embebidos",
  "Electrónica Digital y Analógica",
  "Telecomunicaciones",
  "Señales y Sistemas",

  // Ingeniería Mecánica
  "Termodinámica",
  "Dinámica de Fluidos",
  "Diseño Mecánico",
  "Manufactura y Procesos Industriales",
  "Transferencia de Calor",

  // Ingeniería Eléctrica
  "Máquinas Eléctricas",
  "Sistemas de Potencia",
  "Electrónica de Potencia",
  "Energías Renovables",

  // Ingeniería Industrial
  "Logística y Gestión de la Producción",
  "Optimización de Procesos",
  "Lean Manufacturing",
]

export function FilterTable() {
  const [subjectSelect, setSubjectSelect] = useState<string | null>(null)
  const [teacher, setTeacher] = useState<string>("")
  const [typeUser, setTypeUser] = useState<string | null>("teachers")
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const params = new URLSearchParams(searchParams)
    if (subjectSelect) params.set("subject", subjectSelect)
    else params.delete("subject")

    if (teacher) params.set("name", teacher)
    else params.delete("name")

    if (typeUser) params.set("type_user", typeUser)

    startTransition(() => {
      router.push(`?${params.toString()}`)
    })
  }

  return (
    <form
      className="flex flex-row flex-wrap w-full px-5 items-center justify-between"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-row flex-wrap items-center gap-x-5">
        <FormControl orientation="vertical" className="gap-x-10">
          <Select
            size="md"
            value={subjectSelect}
            className="w-56"
            placeholder="Materia..."
            onChange={(_, newValue) => setSubjectSelect(newValue)}
          >
            {materiasIngenieria.map((axis) => (
              <Option key={axis} value={axis}>
                {axis}
              </Option>
            ))}
          </Select>
        </FormControl>
        <FormControl orientation="vertical" className=" py-3 w-auto gap-x-10">
          <Input
            value={teacher}
            onChange={(value) => setTeacher(value.target.value)}
            placeholder={
              typeUser === "teachers"
                ? "Nombre del profesor"
                : "Nombre del estudiante"
            }
          />
        </FormControl>
        <FormControl orientation="vertical" className="gap-x-10">
          <Select
            size="md"
            value={typeUser}
            defaultValue="teachers"
            className="w-56"
            placeholder="Tipo de usuario"
            onChange={(_, newValue) => setTypeUser(newValue)}
          >
            <Option value="teachers">Profesores</Option>
            <Option value="students">Estudiantes</Option>
          </Select>
        </FormControl>
        <Button type="submit" className="h-fit w-22">
          Filtrar
        </Button>
      </div>
      <div>
        <Button
          variant="solid"
          color="success"
          type="button"
          disabled={isPending}
          onClick={() => router.push("/admin/formTeacher")}
        >
          Crear nuevo profesor
        </Button>
      </div>
    </form>
  )
}
