document.getElementById("enviarBtn").addEventListener("click", function () {
    var formulario = document.getElementById("formularioOrla");
    var formData = new FormData(formulario);

    fetch('procesar_formulario.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error de red: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            mostrarRespuesta(data);
        } else {
            alert("Error al procesar el formulario.");
        }
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
                y: Math.random() - 0.2
            }
        });

        console.error('Error en la respuesta del servidor:', error.message);
        document.getElementById('respuesta').innerHTML = 'Ha ocurrido un error en la solicitud.';
    });
});

function mostrarRespuesta(data) {
    var respuestaDiv = document.getElementById('respuesta');
    
    var jsonResponse = JSON.stringify(data, null, 2);
    
    respuestaDiv.innerHTML = `<pre>${jsonResponse}</pre>`;
    
    confetti({
        particleCount: 100,
        startVelocity: 30,
        spread: 360,
        origin: {
            x: Math.random(),
            y: Math.random() - 0.2
        }
    });
}
