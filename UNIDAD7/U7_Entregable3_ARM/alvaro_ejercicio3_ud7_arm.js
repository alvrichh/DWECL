let tablaProductos = document.getElementById('tablaProductos');
let mensajeElement = document.getElementById('mensaje');

function cargarProductos() {
    // Limpiar mensajes anteriores
    mensajeElement.textContent = '';

    // Realizar la petición GET al servidor
    fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener productos.');
            }
            return response.json();
        })
        .then(data => {
            // Limpiar la tabla antes de agregar nuevos productos
            tablaProductos.innerHTML = '';

            // Mostrar los productos en la tabla
            data.forEach(producto => {
                let fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${producto.id}</td>
                    <td>${producto.title}</td>
                    <td>${producto.description}</td>
                    <td>${producto.price}</td>
                    <td>${producto.category_name}</td>
                    <td><img src="${producto.images[0]}" alt="Imagen del producto" style="max-width: 50px;"></td>`;
                tablaProductos.appendChild(fila);
            });

            mensajeElement.className = 'alert alert-success';
            mensajeElement.textContent = 'Productos cargados correctamente.';
        })
        .catch(error => {
            console.error('Error al cargar productos:', error);
            mensajeElement.className = 'alert alert-danger';
            mensajeElement.textContent = 'Error al cargar productos.';
        });
}

function limpiarTabla() {
    // Limpiar la tabla
    tablaProductos.innerHTML = '';
    // Limpiar mensajes anteriores
    mensajeElement.textContent = '';

    mensajeElement.className = 'alert alert-info';
    mensajeElement.textContent = 'Tabla de productos limpiada.';
}

document.getElementById('cargarProductosBtn').addEventListener('click', cargarProductos);
document.getElementById('limpiarTablaBtn').addEventListener('click', limpiarTabla);