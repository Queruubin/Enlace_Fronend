import { Table } from "@mui/joy"

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

export default async function Page({
  params,
}: {
  params: Promise<{ teacher: string }>
}) {
  const { teacher } = await params
  console.log(teacher)

  return (
    <section className="flex flex-col h-full w-full bg-white py-4 px-4">
      <div className="flex flex-row flex-wrap w-full justify-between">
        <div>
          <h2 className="text-4xl font-bold text-black">Boris Pulido</h2>
          <p>boris.pulido@mail.esculaing.edu.co</p>
        </div>
        Fecha de creación: 2021-10-10
      </div>
      <Table
        hoverRow
        aria-label="table sizes"
        size="md"
        variant="plain"
        className="w-full"
      >
        <thead>
          <tr>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miercoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
            <th>Sabado</th>
          </tr>
        </thead>
        <tbody>
          {mockData.profesores.map((row) => (
            <tr
              key={row.correo}
              className="cursor-pointer"
              aria-label="Ver más..."
            >
              <td>{row.correo}</td>
              <td>{row.correo}</td>
              <td>{row.id}</td>
              <td>{row.nombre.split(" ")[0]}</td>
              <td>{row.nombre.split(" ")[1]}</td>
              <td>10</td>
              <td>10</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  )
}
