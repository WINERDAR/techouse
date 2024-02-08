// script.js

// Array de productos de ejemplo
const productos = [
    { id: 1, categoria: 'tecnologia', nombre: 'Smartphone', precio: 500 },
    { id: 2, categoria: 'tecnologia', nombre: 'Laptop', precio: 1000 },
    { id: 3, categoria: 'organizadores', nombre: 'Organizador de escritorio', precio: 20 },
    { id: 4, categoria: 'organizadores', nombre: 'Caja de almacenamiento', precio: 15 },
    { id: 5, categoria: 'prendas', nombre: 'Camiseta', precio: 25 },
    { id: 6, categoria: 'prendas', nombre: 'Sudadera', precio: 40 }
];

// Función para mostrar productos en la página
function mostrarProductos(categoria) {
    const container = document.querySelector(`#${categoria}`);
    container.innerHTML = '';

    productos
        .filter(producto => producto.categoria === categoria)
        .forEach(producto => {
            const divProducto = document.createElement('div');
            divProducto.classList.add('producto');
            divProducto.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio}</p>
                <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
            `;
            container.appendChild(divProducto);
        });
}

// Función para agregar productos al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        carrito.push(producto);
        actualizarCarrito();
    }
}

// Función para actualizar el carrito
function actualizarCarrito() {
    const carritoContainer = document.querySelector('#carrito');
    carritoContainer.innerHTML = '';

    carrito.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
        `;
        carritoContainer.appendChild(divProducto);
    });
}

// Array para almacenar los productos en el carrito
let carrito = [];

// Mostrar productos al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    mostrarProductos('tecnologia');
    mostrarProductos('organizadores');
    mostrarProductos('prendas');
});

// Filtrar productos al hacer clic en los enlaces de categoría
document.querySelectorAll('nav a').forEach(enlace => {
    enlace.addEventListener('click', function(evento) {
        evento.preventDefault();
        const categoria = this.getAttribute('href').substring(1);
        mostrarProductos(categoria);
    });
});
