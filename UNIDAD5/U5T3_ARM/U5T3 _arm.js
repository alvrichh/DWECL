/**
 * Deben funcionar todos los botones siendo la funcionalidad la siguiente:

Guardar: Guardar la información de clave y valor según el área de almacenamiento elegida. Si no hay valores debe indicar que se rellenen y si los hay debe mostrar el contenido en el textarea correspondiente.

Eliminar: Borra del área de almacenamiento la clave y valor de la clave que está introducida. Se refrescará el textarea correspondiente. Si no se ha introducido ninguno, indica que se introduzca una clave, si no se encuentra no hace nada.

Refrescar: Actualiza los textarea.

Comprobar compatibilidad del navegador: comprueba si el navegador acepta el almacenamiento local o por sesión (se muestra mediante un alert).

By: Álvaro Rodríguez Molina
*/
let tipoAlmacenamiento = document.getElementById('tipoAlmacenamiento');
let claveInput = document.getElementById('clave');
let valorInput = document.getElementById('valor');

let localStorageArea = document.getElementById('localStorageData');
let sessionStorageArea = document.getElementById('sessionStorageData');

// voy a recorrer todos los botones de la web e ir agragando eventos

let buttons = document.querySelectorAll('button');

// función para obtener el área de almacenamiento seleccionada
function obtenerAreaAlmacenamiento() {
    return tipoAlmacenamiento.value === 'localStorage' ? localStorage : sessionStorage;
}

// los eventos se registran según el contenido del button
for (let button of buttons) {
    button.addEventListener('click', function (event) {
        let buttonType = event.target.textContent.trim();

        switch (buttonType) {
            case 'Guardar':
                guardarInfo();
                break;
            case 'Eliminar':
                eliminarInfo();
                break;
            case 'Refrescar':
                refrescarInfo();
                break;
            case 'Comprobar compatibilidad del navegador':
                comprobar();
                break;
            default:
                break;
        }
    });
}

// función para guardar información
function guardarInfo() {
    let clave = claveInput.value.trim();
    let valor = valorInput.value.trim();

    if (clave && valor) {
        // guardar información en el área de almacenamiento seleccionada
        const almacenamiento = obtenerAreaAlmacenamiento();
        almacenamiento.setItem(clave, valor);

        // actualizar el textarea correspondiente
        const textarea = tipoAlmacenamiento.value === 'localStorage' ? localStorageArea : sessionStorageArea;
        textarea.value = `${clave}: ${valor}`;
        console.log(`Información guardada con éxito! Clave: ${clave}, Valor: ${valor}`);

    } else {
        alert('Por favor, completa tanto la clave como el valor.');
    }
}

// función para eliminar información
function eliminarInfo() {
    let clave = claveInput.value.trim();

    if (clave) {
        // eliminar la información del área de almacenamiento seleccionada
        const almacenamiento = obtenerAreaAlmacenamiento();
        almacenamiento.removeItem(clave);

        // actualizar el textarea correspondiente
        const textarea = tipoAlmacenamiento.value === 'localStorage' ? localStorageArea : sessionStorageArea;
        textarea.value = '';
    } else {
        alert('Por favor, introduce una clave para poder eliminar.');
    }
}

// función para refrescar información
function refrescarInfo() {
    // actualizar los textarea con la información actual del área de almacenamiento
    localStorageArea.value = '';
    sessionStorageArea.value = '';

    const localStorageKeys = Object.keys(localStorage);
    const sessionStorageKeys = Object.keys(sessionStorage);

    localStorageKeys.forEach(function (key) {
        localStorageArea.value += `${key}: ${localStorage.getItem(key)}\n`;
    });

    sessionStorageKeys.forEach(function (key) {
        sessionStorageArea.value += `${key}: ${sessionStorage.getItem(key)}\n`;
    });
}

// función para comprobar compatibilidad del navegador
function comprobar() {
    if (typeof Storage !== 'undefined') {
        alert('¡Este navegador soporta almacenamiento local y de sesión!');
        console.log('¡Compatibilidad verificada con éxito!');
    } else {
        alert('¡Este navegador no soporta almacenamiento local y de sesión!');
        console.error('¡Incompatibilidad detectada! vaya pasté');
    }
};