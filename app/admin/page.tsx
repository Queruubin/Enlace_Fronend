import { Table } from "@mui/joy"
import { FilterTable } from "./components/FilterTable"
import Link from "next/link"
import { getUsersTable } from "../services/querys"
import { Suspense } from "react"
import TableSkeleton from "../shared/components/skeletons/tableSkeleton"

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ subject?: string; name?: string; type_user?: string }>
}) {
  const { subject, name, type_user } = (await searchParams) || {}
  const data = await getUsersTable({
    subject: subject || "",
    name: name || "",
    type_user: type_user || "teachers",
  })
  return (
    <section className="flex flex-col items-start h-full w-full bg-white px-2">
      <FilterTable />
      <div className="flex flex-col">
        <Suspense fallback={<TableSkeleton />}>
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
              {data.map((user) => (
                <Link
                  href={`/admin/${user.id}`}
                  key={user.id}
                  passHref
                  legacyBehavior
                >
                  <tr
                    className="cursor-pointer"
                    aria-label="Ver más..."
                    key={user.id}
                  >
                    <td>{user.correo}</td>
                    <td>{user.id}</td>
                    <td>{user.nombre.split(" ")[0]}</td>
                    <td>{user.nombre.split(" ")[1]}</td>
                    <td>10</td>
                  </tr>
                </Link>
              ))}
            </tbody>
          </Table>
        </Suspense>
      </div>
    </section>
  )
}
