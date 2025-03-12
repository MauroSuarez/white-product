import Link from "next/link"

const Navbar = () => {
  return (
    <nav
      className="grid gap-4 text-sm text-muted-foreground border border-white"
    >
      <Link href="/app/settings" className="font-semibold text-primary">
        General
      </Link>
      <Link href="/app/settings/plan">Mi plan</Link>
      <Link href="#">Notificaciones</Link>
      <Link href="#">Soporte</Link>
    </nav>
  )
}

export { Navbar }
