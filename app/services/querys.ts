"use server"

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
  estudaintes: [
    {
      id: 1,
      nombre: "Juan Pérez estudiente",
      correo: "juan@universidad.edu",
    },
    {
      id: 2,
      nombre: "Ana Gómez estudiante",
      correo: "ana@universidad.edu",
    },
    {
      id: 3,
      nombre: "Samuel Felipe Castelblanco",
      correo: "samuel@universidad.edu",
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

export const getUsersTable = async (filter: {
  subject?: string
  name?: string
  type_user: string
}) => {
  /* const response = await fetch("http://localhost:3003/auth/login", {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
  })

  if (!response.ok) throw new Error("An erro happend!")

  const dataUser = await response.json() */

  // TODO: verify user's rol with a hook

  return filter.type_user === "teachers"
    ? mockData.profesores
    : mockData.estudaintes
}
