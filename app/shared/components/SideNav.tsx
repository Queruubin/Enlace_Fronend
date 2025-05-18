"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BiBook } from "react-icons/bi"
import { PiChalkboardTeacher } from "react-icons/pi"
import { RiContractLine } from "react-icons/ri"

const roleBasedLinks = {
  admin: [
    { href: "/admin", label: "Home", icon: PiChalkboardTeacher },
    {
      href: "/admin/peticiones",
      label: "Peticiones",
      icon: RiContractLine,
    },
    {
      href: "/admin/plan_estudios",
      label: "Plan de Estudios",
      icon: BiBook,
    },
  ],
  teacher: [
    { href: "/teacher/courses", label: "My Courses" },
    { href: "/teacher/assignments", label: "Assignments" },
  ],
  student: [
    { href: "/student/courses", label: "My Learning" },
    { href: "/student/grades", label: "Grades" },
  ],
}

export function SideNav() {
  const pathName = usePathname()
  const links = roleBasedLinks["admin"]

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
                ${
                  pathName.includes(href) && href !== "/admin"
                    ? "bg-gray-700 text-white font-bold"
                    : pathName === href
                    ? "bg-gray-700 text-white font-bold"
                    : ""
                }
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
