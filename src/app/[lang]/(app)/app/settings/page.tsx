import Link from "next/link";

export default function Settings() {
  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 md:gap-8 ">
      <div className="grid w-full gap-2">
        <h1 className="text-3xl font-semibold">Configuración</h1>
      </div>
      <div className="grid w-full items-start gap-2 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <nav
          className="grid gap-4 text-sm text-muted-foreground"
        >
          <Link href="#" className="font-semibold text-primary">
            General
          </Link>
          <Link href="#">Mi plan</Link>
          <Link href="#">Notificaciones</Link>
          <Link href="#">Soporte</Link>
          {/* <Link href="#">Organizations</Link>
          <Link href="#">Advanced</Link> */}
        </nav>
        <div className="grid gap-6 h-screen">
          <div className="w-full bg-background border border-neutral-200 dark:bg-background rounded-lg dark:border-neutral-600 h-40">

          </div>
        </div>
      </div>
    </main>
  );
}