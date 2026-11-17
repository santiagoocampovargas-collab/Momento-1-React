import productos from "../data/productos";

const API_URL = "https://6ada65967512f497b3ffea30.mockapi.io/api/v1/productos";

export const productoServicio = {
  async listarTodos() {
    try {
      const respuesta = await fetch(API_URL);
      if (!respuesta.ok) throw new Error("Error al consultar productos");
      return await respuesta.json();
    } catch (error) {
      console.warn("Usando semilla local:", error.message);
      return productos;
    }
  },
};