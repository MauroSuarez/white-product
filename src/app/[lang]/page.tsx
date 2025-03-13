// import LandingLayout from "@/presentation/layouts/landing"
import AppLayout from "@/presentation/layouts/app"
// import LandingModule from "@/presentation/modules/landing"
import AppModule from '@/presentation/modules/app'
export default function Root() {
  return (
    <AppLayout>
      <AppModule />
    </AppLayout>
  )
}
