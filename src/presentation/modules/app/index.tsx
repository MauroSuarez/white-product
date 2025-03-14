import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/presentation/ds/card"
import { Icon } from "@/presentation/ds/icon"

export default function AppModule() {
  return (
    <section className="w-full py-8 px-10 h-screen">
      <div className="grid grid-cols-4 gap-6">
        {[...new Array(7)].map((column, index) => (
          <Card className="overflow-hidden rounded-lg border-0">
            <div className="relative">
              <img
                src="/images/workshop.jpg"
                alt="Taller mecánico"
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
                <Icon name='HeartIcon' className="w-4 h-4" />
              </div>
            </div>
            
            <CardContent className="px-0">
              <CardHeader className="py-6 px-0">
                <CardTitle className="text-xl font-semibold">Taller Mecánico XYZ</CardTitle>
                <CardDescription className="text-gray-600">
                  Servicios de mecánica general, electricidad y mantenimiento.
                </CardDescription>
              </CardHeader>
              
              <CardFooter className="flex items-center space-x-1 py-2 px-0">
                <Icon name='StarIcon' className="h-5 w-5 text-yellow-400" />
                <span className="text-sm font-medium">4.8</span>
                <span className="text-sm text-gray-500">(128 reseñas)</span>
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}