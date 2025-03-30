
const StepOne = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 border border-red-600">
      {/* Columna izquierda */}
      <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Columna Izquierda</h2>
        <p className="text-gray-700">Este es el contenido de la columna izquierda. Puedes agregar cualquier elemento aquí como texto, imágenes, formularios, etc.</p>
        <div className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Botón de ejemplo
          </button>
        </div>
      </div>
      
      {/* Columna derecha */}
      <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Columna Derecha</h2>
        <p className="text-gray-700">Este es el contenido de la columna derecha. En dispositivos móviles las columnas se apilarán verticalmente.</p>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            <span>Elemento de lista 1</span>
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            <span>Elemento de lista 2</span>
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            <span>Elemento de lista 3</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export { StepOne }
