function validateForm() {
    // Obtener valores de los campos del formulario
    const nombrePaciente = document.getElementById('nombrePaciente').value;
    const dni = document.getElementById('dni').value;
    const fabricante = document.getElementById('fabricante').value;
    const password = document.getElementById('password').value;

    // Limpiar mensajes de error anteriores
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = '';

    // Limpiar estilos anteriores
    resetStyles();

    // Validar campos
    let isValid = true;

    if (nombrePaciente.trim() === '') {
        displayError('Nombre del paciente es obligatorio.', 'nombrePaciente');
        isValid = false;
    } else {
        // Resaltar campo con borde verde si es válido
        highlightField('nombrePaciente', true);
    }

    if (!validateDNI(dni)) {
        displayError('Formato de DNI incorrecto. Debe ser 99.999.999-X.', 'dni');
        isValid = false;
    } else {
        // Resaltar campo con borde verde si es válido
        highlightField('dni', true);
    }

    if (fabricante === '') {
        displayError('Selecciona un fabricante de vacuna.', 'fabricante');
        isValid = false;
    } else {
        // Resaltar campo con borde verde si es válido
        highlightField('fabricante', true);
    }

    if (!validatePassword(password)) {
        displayError('Formato de contraseña incorrecto.', 'password');
        isValid = false;
    } else {
        // Resaltar campo con borde verde si es válido
        highlightField('password', true);
    }

    // Realizar acciones según la validez del formulario
    if (isValid) {
        displaySuccess('Formulario válido. Enviando datos a vacuna.php...');
        // Aquí puedes agregar la lógica para enviar los datos al servidor (vacuna.php)
    } else {
        displayError('Corrige los errores antes de enviar.');
    }
}

function resetStyles() {
    const formElements = document.querySelectorAll('input, select');
    formElements.forEach(element => {
        element.style.border = '';
    });
}

function validateDNI(dni) {
    const regex = /^\d{2}\.\d{3}\.\d{3}-[a-zA-Z]$/;
    return regex.test(dni);
}

function validatePassword(password) {
    const regex = /^[A-Z]{2}[^a-zA-Z0-9:]*\w{6,}#[0-9]{2}$/;
    return regex.test(password);
}


function displayError(message, fieldId) {
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML += `<p class="error">${message}</p>`;

    // Resaltar campo con borde rojo
    highlightField(fieldId, false);

    // Poner foco en el campo
    document.getElementById(fieldId).focus();
}

function displaySuccess(message) {
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML += `<p class="success">${message}</p>`;
}

function highlightField(fieldId, isValid) {
    const color = isValid ? 'green' : 'red';
    document.getElementById(fieldId).style.border = `2px solid ${color}`;
}
