// Función para acceder y mostrar confeti y mensaje de bienvenida
function acceder() {
    const nombre = document.getElementById('nombre').value;
    const clave = document.getElementById('clave').value;

    // Validar campos obligatorios
    if (!nombre || !clave) {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
    }

    // Lanzar confeti al hacer clic en "Acceder"
    // Mostrar en la consola el JSON con los datos introducidos
    console.log('Datos introducidos:', JSON.stringify({ nombre, clave }));

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
            // Mostrar en la consola la respuesta obtenida
            console.log('Respuesta de la API:', data);

            // Mostrar mensaje de bienvenida con el nombre
            document.getElementById('resultado').innerHTML = `¡Bienvenido, ${nombre}! Se le ha asignado el ID: ${data.id}`;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('resultado').innerText = 'Ha ocurrido un error en la solicitud.';
        });
        confetti({
            particleCount: 100,
            startVelocity: 30,
            spread: 360,
            origin: {
              x: Math.random(),
              // since they fall down, start a bit higher than random
              y: Math.random() - 0.2
            }
          });
}

// Asociar el evento click al botón con el id "acceder"
document.getElementById("acceder").addEventListener("click", acceder);
