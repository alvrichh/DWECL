function acceder() {
    const nombre = document.getElementById('nombre').value;
    const clave = document.getElementById('clave').value;


    console.log('Datos introducidos:', JSON.stringify({ nombre, clave }));
    // Validar campos obligatorios
    if (!nombre || !clave) {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
    }
    const usuario = {
        nombre: nombre,
        clave: clave
    };

    const opciones = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    };

    fetch('https://jsonplaceholder.typicode.com/posts', opciones)
        .then(response => response.json())
        .then(data => {
            document.getElementById('resultado').innerText = `Se le ha asignado el ID: ${data.id}`;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('resultado').innerText = 'Ha ocurrido un error en la solicitud.';
        });
}
document.getElementById("acceder").addEventListener("click", acceder);