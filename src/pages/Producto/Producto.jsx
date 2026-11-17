import { useState } from "react";
import ProductoTarjeta from "../../components/catalogo/ProductoTarjeta/ProductoTarjeta";
import { productoServicio } from "../../services/productoServicio";

const Producto = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [cargado, setCargado] = useState(false);

  const cargarProductos = async () => {
    setCargando(true);
    const datos = await productoServicio.listarTodos();
    setProductos(datos);
    setCargando(false);
    setCargado(true);
  };

  return (
    <div className="contenedor">
      {!cargado && (
        <div className="catalogo-vitrina-acciones">
          <button
            type="button"
            className="btn btn-primario"
            onClick={cargarProductos}
            disabled={cargando}
          >
            {cargando ? "Cargando..." : "Cargar productos"}
          </button>
        </div>
      )}

      {cargado && (
        <section className="catalogo-vitrina">
          {productos.map((producto) => (
            <ProductoTarjeta key={producto.id} producto={producto} />
          ))}
        </section>
      )}
    </div>
  );
};

export default Producto;