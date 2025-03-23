import { Table } from "@mui/joy"
import { FilterTable } from "./components/FilterTable"
import Link from "next/link"

const mockData = {
  profesores: [
    {
      id: 1,
      nombre: "Juan Pérez",
      correo: "juan@universidad.edu",
    },
    {
      id: 2,
      nombre: "Ana Gómez",
      correo: "ana@universidad.edu",
    },
  ],
  materias: [
    {
      id: 1,
      nombre: "Álgebra",
      codigo: "MAT101",
    },
    {
      id: 2,
      nombre: "Programación",
      codigo: "INF102",
    },
    {
      id: 3,
      nombre: "Física",
      codigo: "FIS103",
    },
  ],
  carreras: [
    {
      id: 1,
      nombre: "Ingeniería Civil",
      facultad: "Ingeniería",
    },
    {
      id: 2,
      nombre: "Ingeniería de Software",
      facultad: "Ingeniería",
    },
    {
      id: 3,
      nombre: "Física Teórica",
      facultad: "Ciencias Exactas",
    },
  ],
  profesores_materias_carreras: [
    {
      id: 1,
      profesor_id: 1,
      materia_id: 1,
      carrera_id: 1,
      descripcion: "Juan enseña Álgebra en Ingeniería Civil",
    },
    {
      id: 2,
      profesor_id: 1,
      materia_id: 2,
      carrera_id: 2,
      descripcion: "Juan enseña Programación en Ingeniería de Software",
    },
    {
      id: 3,
      profesor_id: 2,
      materia_id: 3,
      carrera_id: 3,
      descripcion: "Ana enseña Física en Física Teórica",
    },
    {
      id: 4,
      profesor_id: 2,
      materia_id: 1,
      carrera_id: 1,
      descripcion: "Ana también enseña Álgebra en Ingeniería Civil",
    },
  ],
}

export default function Page() {
  return (
    <section className="flex flex-col items-start h-full w-full bg-white px-2">
      <FilterTable />
      <Table
        hoverRow
        aria-label="table sizes"
        size="md"
        variant="plain"
        className="w-full"
      >
        <thead>
          <tr>
            <th style={{ width: "40%" }}>Correo</th>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Protein&nbsp;(g)</th>
          </tr>
        </thead>
        <tbody>
          {mockData.profesores.map((row) => (
            <tr className="cursor-pointer" aria-label="Ver más..." key={row.id}>
              <td>
                <Link href={`/admin/${row.id}`}>{row.correo}</Link>
              </td>
              <td>
                <Link href={`/admin/${row.id}`}>{row.id}</Link>
              </td>
              <td>
                <Link href={`/admin/${row.id}`}>
                  {row.nombre.split(" ")[0]}
                </Link>
              </td>
              <td>
                <Link href={`/admin/${row.id}`}>
                  {row.nombre.split(" ")[1]}
                </Link>
              </td>
              <td>
                <Link href={`/admin/${row.id}`}>10</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  )
}
