
export default function AuthLayout({
  children
}: { children: React.ReactNode }) {
  return (
    <section>
      <div className="h-screen grid lg:grid-cols-5 md:grid-cols-5 grid-cols-1 grid-rows-1">
        <div className="
          lg:block
          md:block
          hidden
          lg:col-span-3
          md:col-span-2
          col-span-0
          bg-primary
        "></div>
        <div className="lg:col-span-2 md:col-span-3 col-span-1 bg-background">
          {children}
        </div>
      </div>
    </section>
  )
}
