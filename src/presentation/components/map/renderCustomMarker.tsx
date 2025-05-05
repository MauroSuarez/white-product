import ReactDOMServer from 'react-dom/server'

// Envuelve cualquier componente en un globo flotante
const renderCustomMarker = (
  IconComponent: React.ReactNode,
  size: number = 32
): string => {
  const html = ReactDOMServer.renderToStaticMarkup(
    <div
      style={{
        display: 'inline-block',
        background: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
        padding: '6px',
        position: 'relative',
      }}
    >
      {IconComponent}
      <div
        style={{
          position: 'absolute',
          bottom: -6,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 0,
          height: 0,
          borderLeft: '6px solid transparent',
          borderRight: '6px solid transparent',
          borderTop: '6px solid white',
        }}
      ></div>
    </div>
  )

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(html)}`
}

export { renderCustomMarker }