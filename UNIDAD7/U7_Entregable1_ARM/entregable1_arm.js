
document.getElementById("obtenerDatos").addEventListener("click", () => {
    // Mostrar indicador de carga
    document.getElementById("cargando").style.display = "block";

    // Obtener datos usando fetch después de 1 segundo
    setTimeout(() => {
        fetch('robots.txt')
            .then(response => {
                if (!response.ok) {
                    throw new Error("La respuesta ha fallado");
                }
                return response.text();
            })
            .then(data => {
                // Ocultar indicador de carga
                document.getElementById("cargando").style.display = "none";

                // Mostrar datos en una tabla
                mostrarDatosEnTabla(data);
            })
            .catch(error => {
                // Mostrar mensaje de error en un alert
                alert(error.message);
            });
    }, 1000);
});

function mostrarDatosEnTabla(data) {
    let filas = data.split('\n');

    let tablaExistente = document.getElementById("tablaResultados");
    if (tablaExistente) tablaExistente.remove();

    let nuevaTabla = document.createElement("table");
    nuevaTabla.id = "tablaResultados";

    let titulos = ["Grupo", "Asignatura", "Semanas Restantes"];

    nuevaTabla.innerHTML = `<tr>${titulos.map(titulo => `<th>${titulo}</th>`).join('')}</tr>`;

    filas.forEach(fila => {
        let datos = fila.split(';').map(par => par.split(':').map(el => el.trim()));
        if (datos.length === 3) nuevaTabla.innerHTML += `<tr>${datos.map(([key, value]) => `<td>${value}</td>`).join('')}</tr>`;
    });

    document.querySelector(".contenedor").appendChild(nuevaTabla);
}
/**
 * function mostrarDatosEnTabla(data) {
    const filas = data.split('\n');

    const tablaExistente = document.getElementById("tablaResultados");
    if (tablaExistente) {
        tablaExistente.remove();
    }

    const nuevaTabla = document.createElement("table");
    nuevaTabla.id = "tablaResultados";

    const encabezado = document.createElement("tr");
    const titulos = ["Grupo", "Asignatura", "Semanas Restantes"];

    titulos.forEach(titulo => {
        const th = document.createElement("th");
        th.appendChild(document.createTextNode(titulo));
        encabezado.appendChild(th);
    });

    nuevaTabla.appendChild(encabezado);

    filas.forEach(filaDatos => {
        const datos = filaDatos.split(';').map(item => item.split(':').map(el => el.trim()));

        if (datos.length === 3) {
            const fila = document.createElement("tr");

            datos.forEach(par => {
                const [key, value] = par;
                const td = document.createElement("td");
                const texto = document.createTextNode(value);
                td.appendChild(texto);
                fila.appendChild(td);
            });

            nuevaTabla.appendChild(fila);
        }
    });

    document.querySelector(".contenedor").appendChild(nuevaTabla);
}

 */
