import productos from "../data/productos";

export const productoServicio = {
  async listarTodos() {
    return productos;
  },
};