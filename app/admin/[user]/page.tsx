import { HorarioSemanal } from "@/app/shared/components/ScheduleForm"
import { headers } from "next/headers"
import Link from "next/link"
import { RiArrowGoBackFill } from "react-icons/ri"
import PaymentsHistory from "./components/PaymentsHistory"
import GetSchedule from "./components/GetSchedule"

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

export default async function Page({
  params,
}: {
  params: Promise<{ user: string }>
}) {
  const { user } = await params
  const previousPage = (await headers()).get("referer") || "/"

  return (
    <section className="flex flex-col h-full w-full bg-white py-6 px-8 overflow-y-auto">
      <Link href={previousPage}>
        <RiArrowGoBackFill />
      </Link>
      <div className="flex flex-row justify-between items-center mb-6">
        <div>
          <h2 className="text-4xl font-bold text-gray-800">
            {mockData.nombre} {mockData.apellido}
          </h2>
          <p className="text-gray-600">{mockData.email}</p>
        </div>
        <p className="text-gray-500 text-sm">
          Fecha de creación:{" "}
          {new Date(mockData.fecha_creacion).toLocaleDateString()}
        </p>
      </div>
      {/* Información personal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-2">
          <p>
            <span className="font-semibold text-gray-700">Teléfono:</span>{" "}
            {mockData.telefono}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Dirección:</span>{" "}
            {mockData.direccion}
          </p>
          <p>
            <span className="font-semibold text-gray-700">
              Fecha de nacimiento:
            </span>{" "}
            {new Date(mockData.fecha_nacimiento).toLocaleDateString()}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Estado civil:</span>{" "}
            {mockData.estado_civil}
          </p>
        </div>
        <div className="space-y-2">
          <p>
            <span className="font-semibold text-gray-700">Nacionalidad:</span>{" "}
            {mockData.nacionalidad}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Género:</span>{" "}
            {mockData.genero}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Ocupación:</span>{" "}
            {mockData.ocupacion}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Estudios:</span>{" "}
            {mockData.estudios}
          </p>
        </div>
      </div>
      {/* Historial de pagos */}
      <div className="mb-8">
        <PaymentsHistory />
      </div>
      {/* Horario */}
      <div>
        <GetSchedule />
      </div>
    </section>
  )
}
