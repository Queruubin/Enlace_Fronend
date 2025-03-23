"use client"

import { FormControlP } from "@/app/shared/components/FormContorl"
import { ScheduleGrid } from "@/app/shared/components/ScheduleForm"
import { FormLabel, Input } from "@mui/joy"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { GoArrowLeft } from "react-icons/go"

export default function CreateNewTeacher() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    schedule: [{ day: "", className: "" }],
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index?: number
  ) => {
    const { name, value } = e.target

    if (name === "day" || name === "className") {
      const updatedSchedule = [...formData.schedule]
      if (index !== undefined) {
        updatedSchedule[index] = { ...updatedSchedule[index], [name]: value }
      }
      setFormData({ ...formData, schedule: updatedSchedule })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const addScheduleRow = () => {
    setFormData({
      ...formData,
      schedule: [...formData.schedule, { day: "", className: "" }],
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form Data:", formData)
    // Add logic to send formData to the backend
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="create-teacher-form bg-white p-6 rounded-lg shadow-md space-y-6 h-full overflow-y-auto relative"
    >
      <div className="flex items-center gap-x-5">
        <GoArrowLeft
          size={25}
          className="cursor-pointer"
          onClick={() => router.back()}
        />
        <h2 className="text-2xl font-bold text-gray-800">
          Crear nuevo profesor
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        <FormControlP className="space-y-2">
          <FormLabel>Nombre</FormLabel>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Ingrese el nombre"
            onChange={handleInputChange}
            required
            className="focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </FormControlP>

        <FormControlP className="space-y-2">
          <FormLabel>Apellido</FormLabel>
          <Input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Ingrese el apellido"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </FormControlP>

        <FormControlP className="space-y-2">
          <FormLabel>Celular</FormLabel>
          <Input
            type="number"
            id="phone"
            name="phone"
            placeholder="Ingrese el número de celular"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </FormControlP>
        <FormControlP className="space-y-2">
          <FormLabel>Dirección</FormLabel>
          <Input
            type="text"
            id="direction"
            name="direction"
            placeholder="Ingrese la dirección"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </FormControlP>
        <FormControlP className="space-y-2">
          <FormLabel>Email</FormLabel>
          <Input
            type="text"
            id="email"
            name="email"
            placeholder="Ingrese el email"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </FormControlP>
      </div>

      <h3 className="text-xl font-semibold text-gray-800">
        Horario <span className="text-red-500">*</span>
      </h3>

      <ScheduleGrid />

      <button
        type="button"
        onClick={addScheduleRow}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Add Schedule
      </button>

      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
      >
        Create Teacher
      </button>
    </form>
  )
}
