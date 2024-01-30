function verificarCiudad() {
    let ciudadInput = document.getElementById('localidad');
    let resultadoElement = document.getElementById('resultado');

    let ciudad = ciudadInput.value.trim();

    if (ciudad !== "") {
        let url = 'localidad.php?localidad=' + encodeURIComponent(ciudad);

        // Realizar la petición GET al servidor
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la petición al servidor.');
                }
                return response.text();
            })
            .then(data => {
                // Manejar la respuesta del servidor
                if (data === 'SI') {
                    resultadoElement.className = 'success';
                    resultadoElement.textContent = '¡La ciudad está incluida en la lista!';
                } else if (data === 'NO') {
                    resultadoElement.className = 'error';
                    resultadoElement.textContent = 'La ciudad no está incluida en la lista.';
                } else {
                    resultadoElement.className = 'error';
                    resultadoElement.textContent = 'Error en la respuesta del servidor.';
                }
            })
            .catch(error => {
                console.error('Error al realizar la petición:', error);
                resultadoElement.className = 'error';
                resultadoElement.textContent = 'Error al verificar la ciudad.';
            });
    } else {
        resultadoElement.className = 'error';
        resultadoElement.textContent = 'Por favor, introduce el nombre de una ciudad.';
    }
}
