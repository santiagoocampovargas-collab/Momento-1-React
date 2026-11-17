import "./ProductoTarjeta.css";

const ProductoTarjeta = ({ producto }) => {
  const { id, nombre, marca, categoria, imagen } = producto;

  const imagenAleatoria = `https://picsum.photos/seed/sazon-${id}/400/400`;

  const alFallarImagen = (evento) => {
    evento.currentTarget.onerror = null;
    evento.currentTarget.src = imagenAleatoria;
  };

  return (
    <article className="catalogo-producto-tarjeta">
      <figure className="catalogo-producto-tarjeta-figura">
        <img
          className="catalogo-producto-tarjeta-imagen"
          src={imagen || imagenAleatoria}
          onError={alFallarImagen}
          alt={`${nombre} de la marca ${marca}`}
        />
        <figcaption className="catalogo-producto-tarjeta-categoria">
          {categoria}
        </figcaption>
      </figure>
      <div className="catalogo-producto-tarjeta-cuerpo">
        <h3 className="catalogo-producto-tarjeta-nombre">{nombre}</h3>
        <p className="catalogo-producto-tarjeta-marca">{marca}</p>
      </div>
    </article>
  );
};

export default ProductoTarjeta;