import "./ProductoTarjeta.css";

const ProductoTarjeta = ({ producto }) => {
  const { nombre, marca, categoria, imagen } = producto;

  return (
    <article className="catalogo-producto-tarjeta">
      <figure className="catalogo-producto-tarjeta-figura">
        <img
          className="catalogo-producto-tarjeta-imagen"
          src={imagen}
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