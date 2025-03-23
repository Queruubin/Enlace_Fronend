export function SideNav() {
  return (
    <aside className="w-full h-full bg-gray-800 py-5">
      <div className="text-white text-center flex flex-col gap-y-2 mb-10">
        <h3 className="font-bold text-lg">Admin Panel</h3>
        <p>Samuel Castelblanco</p>
      </div>
      <nav className="flex flex-col items-center text-white text-md">
        <a href="/admin" className=" font-bold py-5">
          Dashboard
        </a>
        <a href="/admin/students" className=" font-bold py-5">
          Students
        </a>
        <a href="/admin/teachers" className=" font-bold py-5">
          Teachers
        </a>
        <a href="/admin/courses" className=" font-bold py-5">
          Courses
        </a>
      </nav>
    </aside>
  )
}
