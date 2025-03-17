import AppLayout from "@/presentation/layouts/app"
import AppModule from '@/presentation/modules/app'

export default function Root() {
  return (
    <AppLayout>
      <AppModule />
    </AppLayout>
  )
}
