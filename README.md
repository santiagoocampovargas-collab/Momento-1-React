🛒 Módulo: Vitrina y Ficha Detallada de Productos Nutresa

Este documento detalla la implementación y los criterios de aceptación correspondientes al desarrollo de la vitrina principal de productos del catálogo.

👨‍💻 Información del Desarrollador

Estudiante: Santiago Ocampo Vargas (Estudiante 3)

Módulo Asignado: Vitrina y Ficha Detallada de Productos Nutresa

Rama de Trabajo: feature/catalogo/G1-PRO-F01-vitrina

📋 Historia de Usuario 3.1: Vitrina Principal de Productos

Descripción del Entregable

Completar la semilla inicial de productos en el archivo de datos correspondiente y desarrollar la vista de la vitrina principal, encargada de renderizar dinámicamente las tarjetas de cada producto mostrando su respectiva imagen, nombre, marca y categoría.

✅ Criterios de Aceptación

Para dar por completada esta historia de usuario, el código cumple con los siguientes requerimientos técnicos:

Datos Semilla (productos.js):

Extensión del arreglo semilla de productos.

Conservación obligatoria de los IDs consecutivos del 1 al 5 (con posibilidad de agregar registros adicionales según se requiera).

Renderizado Dinámico:

Construcción dinámica de la vista consumiendo directamente el método productoServicio.listarTodos() del servicio de productos.

HTML Semántico y Accesibilidad:

Uso obligatorio de etiquetas semánticas: <article>, <figure>, e <img>.

Inclusión de atributos alt descriptivos en todas las imágenes de los productos.

Arquitectura de Estilos (sazon.css):

Aplicación de estilos utilizando clases con el prefijo .catalogo-producto-tarjeta.

Uso exclusivo de las variables CSS definidas en la hoja de estilos global sazon.css.

📂 Archivos Principales Involucrados

productos.js — Base de datos semilla con el catálogo inicial de productos Nutresa.

productoServicio.js — Servicio encargado de la gestión y consulta de datos (listarTodos()).

sazon.css — Sistema de diseño y variables globales de estilos.

Vista / Script de Vitrina — Estructura HTML semántica y lógica de renderizado de tarjetas.

🚀 Flujo de Trabajo (Git)

Para revisar o integrar los cambios de esta funcionalidad:

# Cambiar a la rama de la funcionalidad
git checkout feature/catalogo/G1-PRO-F01-vitrina

# Obtener los últimos cambios
git pull origin feature/catalogo/G1-PRO-F01-vitrina
