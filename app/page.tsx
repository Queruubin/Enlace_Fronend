"use client"

import { useState } from "react"
import { actionPostLogin } from "./services/auth"

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false)
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    const formData = new FormData(event.currentTarget)
    try {
      await actionPostLogin(formData)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <section className="w-screen h-screen m-auto flex justify-center items-center">
      <div className="w-[400px] h-[80%] flex flex-col justify-center items-center shadow-2xl py-7 bg-white">
        <h2 className="font-bold text-2xl flex-1">Enlace Academico</h2>
        <form
          onSubmit={handleSubmit}
          className="gap-y-5 flex flex-col flex-2 w-full px-10"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              placeholder="Ingrese su email..."
              id="email"
              name="email"
              className="mt-1 block w-full 
              px-3 py-2 
              border border-gray-300 
              rounded-md shadow-sm 
              focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 
              sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              type="password"
              placeholder="Ingrese su contraseña..."
              id="password"
              name="password"
              className="mt-1 block w-full 
              px-3 py-2 
              border border-gray-300 
              rounded-md shadow-sm 
              focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 
              sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-sky-900 text-center rounded-lg cursor-pointer"
            disabled={loading}
          >
            {loading ? "Cargando..." : "Iniciar Sesión"}
          </button>
        </form>
      </div>
    </section>
  )
}
