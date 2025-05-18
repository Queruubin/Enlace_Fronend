import { FormControl, Select, Input, Button, Option } from "@mui/joy"

export function CertificatesFilter() {
  return (
    <section className="flex flex-col items-start w-full bg-white px-2">
      <div className="flex flex-row flex-wrap items-center gap-x-5">
        <FormControl orientation="vertical" className=" py-3 w-auto gap-x-10">
          <Input placeholder="Filtrar por correo" />
        </FormControl>
        <FormControl orientation="vertical" className="gap-x-10">
          <Select
            size="md"
            defaultValue="teachers"
            className="w-56"
            placeholder="Tipo de usuario"
          >
            <Option value="teachers">Profesores</Option>
            <Option value="students">Estudiantes</Option>
          </Select>
        </FormControl>
        <Button type="submit" className="h-fit w-22">
          Filtrar
        </Button>
      </div>
    </section>
  )
}
