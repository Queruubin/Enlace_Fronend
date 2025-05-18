import { Table } from "@mui/joy"
import { CertificatesFilter } from "./components/CertificatesFilter"

export default function PeticionesPage() {
  return (
    <section className="w-full h-full bg-white">
      <CertificatesFilter />
      <Table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Correo</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Icetex</td>
            <td>samuelcf0123@gmail.com</td>
            <td>Samuel</td>
          </tr>
          <tr>
            <td>Icetex</td>
            <td>samuelcf0123@gmail.com</td>
            <td>Samuel</td>
          </tr>
          {/* Agrega más filas según sea necesario */}
        </tbody>
      </Table>
    </section>
  )
}
