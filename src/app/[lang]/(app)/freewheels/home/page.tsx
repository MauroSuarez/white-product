import { Typography } from "@/presentation/ds/typography";


export default function Home() {
  return (
    <section className="w-full py-8 px-10 h-screen">
      <div className="h-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 grid-rows-1">
        <div className="lg:col-span-1 md:col-span-1 col-span-1">
          <div className="flex h-full w-full justify-center items-start pt-24">
            <div className="flex flex-wrap justify-center space-y-8">
              <Typography variant='h1' className="text-primary">Poné tu FreeWheel</Typography>
              <Typography variant='h2' className="border-none">Hacete visible</Typography>
              <Typography variant='p' className="">Cientos de usuarios buscando servicios para vehículos</Typography>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 md:col-span-1 col-span-1 bg-red-100">
          afadsfsad
        </div>
      </div>
    </section>
  )
}
