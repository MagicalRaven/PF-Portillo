# Tienda de Artículos de Computación

## Descripción

Esta es una aplicación de comercio electrónico desarrollada con **React** y **Firebase** para la venta de artículos de computación. Los usuarios pueden navegar por una lista de productos, filtrarlos por categorías, agregar productos a su carrito, y proceder a realizar la compra a través de un sistema de checkout.

La aplicación está diseñada para ser moderna y fácil de usar, con una interfaz minimalista y funcionalidades avanzadas, como control de stock, generación de PDF para recibos, y manejo del carrito de compras.

## Versión

**Versión actual**: 1.0.0

---

## Funcionalidades

1. **Visualización de Productos**
   - Los usuarios pueden ver una lista de artículos de computación, como CPU, GPU, Motherboard, RAM, Discos Duros, Enfriamientos y Cases.
   - Filtro por categorías para facilitar la búsqueda de productos específicos.
   
2. **Carrito de Compras**
   - Añadir productos al carrito desde la página de detalles del producto.
   - Control de cantidad para evitar que se agregue más de lo que hay en stock.
   - Visualización de los productos en el carrito, con opción para eliminar productos.
   - Cálculo automático del precio total en función de la cantidad de productos en el carrito.
   - El carrito se vacía automáticamente después de completar la compra.

3. **Proceso de Checkout**
   - Formulario para introducir los datos del cliente (nombre, dirección).
   - Confirmación de la compra y redirección al checkout.
   
4. **Control de Stock**
   - No se permite agregar productos al carrito si el stock es 0.
   - El botón "Agregar al carrito" se desactiva cuando se intenta agregar más productos de los disponibles.

5. **Generación de PDF para Recibo**
   - Al completar una compra, se puede generar un recibo en formato PDF con los detalles de los productos adquiridos.

## Tecnologías Utilizadas

- **React**: Framework de JavaScript para la construcción de interfaces de usuario.
- **Firebase**:
  - **Firestore**: Base de datos NoSQL para almacenar los productos.
  - **Firebase Authentication** (opcional): Para autenticación de usuarios.
- **React Router**: Para la navegación entre páginas.
- **jsPDF**: Librería para la generación de PDF.
- **Bootstrap**: Framework CSS para el diseño de la interfaz de usuario.

## Instalación y Configuración

### Requisitos Previos

- **Node.js** y **npm** instalados en tu sistema.

### Clonación del Repositorio

```bash
git clone https://github.com/usuario/nombre-del-repositorio.git
cd nombre-del-repositorio
Instalación de Dependencias
npm install

Funcionalidades Futuras
Autenticación de usuarios: Para permitir a los usuarios crear cuentas y acceder a sus compras anteriores.
Pasarela de Pago: Integrar un sistema de pagos en línea para que los usuarios puedan realizar transacciones seguras.
Mejora en la gestión de stock: Actualización automática del stock tras cada compra.
Contribuciones
¡Las contribuciones son bienvenidas! 


---

### Explicación del contenido:

1. **Descripción**: Una breve introducción sobre la aplicación y qué problema resuelve.
2. **Versión**: La versión actual de la aplicación.
3. **Funcionalidades**: Resumen detallado de las características implementadas.
4. **Tecnologías**: Lista de las tecnologías utilizadas para construir la aplicación.
5. **Instalación y Configuración**: Instrucciones paso a paso para clonar el repositorio, instalar las dependencias, configurar Firebase y ejecutar la aplicación.
6. **Futuras Funcionalidades**: Posibles mejoras y nuevas características que pueden ser agregadas en el futuro.
7. **Contribuciones**: Una invitación a otros desarrolladores a contribuir al proyecto.
8. **Licencia**: Tipo de licencia utilizada para el proyecto.