import { Star } from "lucide-react";
import Link from "next/link";

export function WorkshopDescription() {
  return (
    <div className="flex flex-col gap-1 w-full">
      {/* Título */}
      <h2 className="text-2xl font-bold text-gray-800">
        Producto Ejemplo
      </h2>
      
      {/* Descripción */}
      <p className="text-gray-600">
        Este es un producto de alta calidad con excelentes características y durabilidad comprobada.
      </p>
      
      {/* Rating con estrella y link */}
      <div className="flex items-center gap-2 mt-2">
        <div className="flex items-center">
          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          <span className="ml-1 font-medium text-gray-800">4.8</span>
        </div>
        
        <Link 
          href="#reviews" 
          className="text-sm text-blue-600 hover:text-blue-800 hover:underline ml-2"
        >
          114 evaluaciones
        </Link>
      </div>
    </div>
  )
}
