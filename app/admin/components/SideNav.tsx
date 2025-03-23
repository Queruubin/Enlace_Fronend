"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { PiChalkboardTeacher, PiStudent } from "react-icons/pi"
import { RiContractLine } from "react-icons/ri"

const links = [
  { href: "/admin", label: "Profesores", icon: PiChalkboardTeacher },
  { href: "/admin/estudiantes", label: "Estudiantes", icon: PiStudent },
  { href: "/admin/peticiones", label: "Peticiones", icon: RiContractLine },
]

export function SideNav() {
  const pathName = usePathname()

  return (
    <aside className="w-full h-full bg-gray-950 py-5">
      <div className="text-white text-center flex flex-col gap-y-2 mb-5">
        <h3 className="font-bold text-lg">Admin Panel</h3>
        <p>Samuel Castelblanco</p>
      </div>
      <nav className="flex flex-col items-center text-white text-md gap-y-3">
        {links.map(({ href, label, icon }) => {
          const LinkIcon = icon
          return (
            <Link
              key={href}
              href={href}
              className={`w-full h-10
                ${pathName.startsWith(href) ? "bg-gray-600" : ""}
                text-center 
                rounded-2xl
                flex flex-row items-center justify-start
                gap-x-2
                px-5 py-1
                hover:bg-gray-700
              `}
            >
              {LinkIcon && <LinkIcon color="white" />}
              <p>{label}</p>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
