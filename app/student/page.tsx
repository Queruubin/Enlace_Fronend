import Link from "next/link"

export default function StudentPage() {
  return (
    <section>
      <h1>Student Page</h1>
      <Link href="/student/dashboard">
        <a>Dashboard</a>
      </Link>
    </section>
  )
}
