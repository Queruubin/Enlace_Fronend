import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import "./globals.css"

const poppins = Inter({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "800"],
})

export const metadata: Metadata = {
  title: "Enlace Academico",
  description: "Mejora de la plataforma enalace academico",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  )
}
