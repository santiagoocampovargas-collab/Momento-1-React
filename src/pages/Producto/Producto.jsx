import { useEffect, useState } from "react";
import ProductoTarjeta from "../../components/catalogo/ProductoTarjeta/ProductoTarjeta";
import { productoServicio } from "../../services/productoServicio";

const Producto = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    productoServicio.listarTodos().then((datos) => {
      setProductos(datos);
      setCargando(false);
    });
  }, []);

  if (cargando) {
    return (
      <div className="contenedor">
        <p className="mensaje-estado">Cargando productos...</p>
      </div>
    );
  }

  return (
    <div className="contenedor">
      <section className="catalogo-vitrina">
        {productos.map((producto) => (
          <ProductoTarjeta key={producto.id} producto={producto} />
        ))}
      </section>
    </div>
  );
};

export default Producto;