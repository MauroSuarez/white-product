import { useEffect, useState } from "react"

export function StickyCard() {
  const [state, setState] = useState<"normal" | "fixed" | "bottom">("normal")
  const [columnCardWidth, setColumnCardWidth] = useState(300)

  useEffect(() => {
    const handleScroll = () => {
      const columns = document.getElementById("columns")
      const prefooter = document.getElementById("prefooter")
      const card = document.getElementById("card")
      const columnSticky = document.getElementById("columnSticky")

      if (!columns || !prefooter || !card) return

      const columnsTop = columns.offsetTop
      const columnsHeight = columns.offsetHeight
      const scrollY = window.scrollY
      const headerOffset = 90 // altura de tu header fixed (ajusta si necesitas)
      const columnStickyWidth = columnSticky?.offsetWidth
      
      if(columnStickyWidth)
        setColumnCardWidth(columnStickyWidth)

      const cardHeight = card.offsetHeight
      const stopScrollAt = columnsTop + columnsHeight - cardHeight

      if (scrollY + headerOffset >= stopScrollAt) {
        setState("bottom")
      } else if (scrollY + headerOffset >= columnsTop) {
        setState("fixed")
      } else {
        setState("normal")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      id="card"
      className={`transition-all duration-300 ${
        state === "fixed"
          ? "fixed top-20"
          : state === "bottom"
          ? "absolute bottom-0"
          : ""
      }`}
      style={{
        ...(state === "normal" && { position: "static" }),
        width: columnCardWidth
      }}
    >
      <div className="p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">Formulario</h2>
        <form>
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full mb-4 p-2 border rounded"
          />
          <button className="w-full bg-blue-500 text-white p-2 rounded">
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}