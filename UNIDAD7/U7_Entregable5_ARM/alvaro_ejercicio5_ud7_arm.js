document.getElementById('cargarImagenBtn').addEventListener('click', cargarImagen);

function cargarImagen() {
    // Hacer la petición a la API con Fetch
    fetch('https://picsum.photos/600/600', {
        method: 'GET',
        headers: {
            'Content-Type': 'image/jpeg' // Indicar el tipo de contenido que esperamos
        }
    })
    .then(response => {
        // Verificar si la respuesta es exitosa (código de estado 200)
        if (!response.ok) {
            throw new Error('Error al cargar la imagen.');
        }

        // Convertir la respuesta a un blob
        return response.blob();
    })
    .then(blob => {
        // Crear una URL para el blob y asignarla a la fuente de la imagen
        const url = URL.createObjectURL(blob);
        document.getElementById('imagenCargada').src = url;
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al cargar la imagen. Por favor, inténtalo de nuevo.');
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
