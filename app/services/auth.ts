"use server"

import { redirect } from "next/navigation"

export const actionPostLogin = async (formData: FormData) => {
  // TODO: verify user's rol with a hook

  console.log({ formData })

  const response = await fetch("http://localhost:3003/auth/login", {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
  })

  if (!response.ok) throw new Error("An erro happend!")

  const dataUser = await response.json()

  redirect(`${dataUser === "admin" ? "/admin" : "/student"}`)
}
