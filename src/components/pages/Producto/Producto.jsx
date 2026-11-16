import React from 'react'

import "../../../../src/assets/estilos.css"

const Producto = () => {
  return (
    <main className="contenedor pagina-modulo">
      <section className="bloque-modulo">
        <h1>Módulo Catálogo</h1>
        <p>Base lista para desarrollar historias de usuario del catálogo.</p>
        <div id="catalogo-estado" className="mensaje-estado" role="status"></div>
      </section>
    </main>
  )
}

export default Producto