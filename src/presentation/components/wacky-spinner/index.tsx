import { Wacky } from "../wacky"

type WackySpinnerProps = {
  text?: string
}

export function WackySpinner({ text = 'Cargando' }: WackySpinnerProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {/* Contenedor blanco con sombra y bordes redondeados */}
      <div className="bg-gray-200 opacity-4 rounded-xl shadow-lg text-center py-8">
        
        {/* Spinner animado (CSS puro) */}
        <div
          className="mb-4">
          <Wacky height={60} />
        </div>
        
        {/* Texto personalizable */}
        <div className="flex space-x-1 mt-4 justify-center">
          {text.split('').map((letter, index) => (
            <span 
              key={index}
              className="inline-block animate-[bounce_0.9s_ease_infinite] text-primary font-bold text-xs"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
