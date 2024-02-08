document.getElementById("enviarBtn").addEventListener("click", function () {
    var formulario = document.getElementById("formularioOrla");
    var formData = new FormData(formulario);

    console.log('Datos del formulario:', formData);

    fetch('procesar_formulario.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('respuesta').innerHTML = `
                <p>Nombre: ${data.nombre}</p>
                <p>Apellido: ${data.apellido}</p>
                <p>Ruta de la Imagen: ${data.ruta_imagen}</p>
            `;
            confetti({
                particleCount: 100,
                startVelocity: 30,
                spread: 360,
                origin: {
                    x: Math.random(),
                    y: Math.random() - 0.2
                }
            });
        })
        .catch(error => {
            var pineapple = confetti.shapeFromText({ text: '❌' });

            confetti({
                shapes: [pineapple],
                particleCount: 100,
                startVelocity: 30,
                spread: 360,
                scalar: 3,
                origin: {
                    x: Math.random(),
                    // since they fall down, start a bit higher than random
                    y: Math.random() - 0.2
                }
            });
            console.error('Error:', error);
            document.getElementById('respuesta').innerText = 'Ha ocurrido un error en la solicitud.';
        });
});