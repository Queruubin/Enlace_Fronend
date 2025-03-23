import type { Metadata } from "next"
import { SideNav } from "./components/SideNav"

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin page",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-56">
        <SideNav />
      </div>
      <div className="flex-grow p-1 rounded-3xl md:overflow-y-auto">
        {children}
      </div>
    </div>
  )
}
