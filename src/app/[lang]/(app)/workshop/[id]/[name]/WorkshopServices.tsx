import { Settings } from "lucide-react"

export function WorkshopServices() {
  const items = [
    "Preferencias de cuenta",
    "Configuración de privacidad",
    "Ajustes de notificaciones",
    "Personalización de tema",
    "Configuración de seguridad",
    "Preferencias de idioma",
    "Opciones de accesibilidad",
    "Configuración de correo",  
    "Gestión de dispositivos",
    "Preferencias de pago"
  ]
  return (
    <div className='flex flex-col gap-4 py-4 items-center'>
        <h2 className="text-2xl font-bold text-gray-800 w-full">
          Servicios
        </h2>
        <div className='flex flex-col gap-2 w-full'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mapeamos el array dividiéndolo en dos columnas */}
            {items.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3"
              >
                <Settings className="w-5 h-5 text-gray-600 flex-shrink-0" />
                <div className='flex flex-col gap-1'>
                  <span className="text-gray-700 w-full">{item}</span>
                  <span className="text-gray-700 w-full">descripción</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}
