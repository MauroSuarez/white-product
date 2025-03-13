
export default function AuthLayout({
  children
}: { children: React.ReactNode }) {
  return (
    <section>
      <div className="h-screen grid lg:grid-cols-5 md:grid-cols-5 grid-cols-1 grid-rows-1">
        <div
          style={{ backgroundImage: "url('/images/auth-background.jpg')" }}
          className="
            bg-cover
            bg-center
            h-screen
            lg:block
            md:block
            hidden
            lg:col-span-3
            md:col-span-2
            col-span-0
            bg-neutral-900
            dark:bg-neutral-800
        "></div>
        <div className="lg:col-span-2 md:col-span-3 col-span-1 bg-background">
          {children}
        </div>
      </div>
    </section>
  )
}
