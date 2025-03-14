const Filters = () => {
  return (
    <section className="sticky top-[5.5rem] bg-background">
      <div className="min-h-20 border-b border-grey-50 px-10 flex items-center w-full">
        <div className="w-full">
          {/* Grid de 3 columnas con proporciones personalizadas */}
          <div className="grid grid-cols-[3fr_1fr_1fr] gap-6">
            {/* Columna 1 (más ancha) */}
            <div className="p-6 bg-blue-100 rounded-lg">
              <h2 className="text-xl font-bold">Columna 1</h2>
              <p>Esta columna es más ancha que las otras dos.</p>
            </div>

            {/* Columna 2 */}
            <div className="p-6 bg-green-100 rounded-lg">
              <h2 className="text-xl font-bold">Columna 2</h2>
              <p>Contenido de la columna 2.</p>
            </div>

            {/* Columna 3 */}
            <div className="p-6 bg-yellow-100 rounded-lg">
              <h2 className="text-xl font-bold">Columna 3</h2>
              <p>Contenido de la columna 3.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Filters }