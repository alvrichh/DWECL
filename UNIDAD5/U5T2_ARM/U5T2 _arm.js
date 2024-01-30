document.forms["myForm"].addEventListener("submit", function (event) {
    event.preventDefault(); // Evita la acción por defecto de envío del formulario

    if (validateForm()) {
        document.forms["myForm"].submit(); // Si la validación pasa, puedes enviar el formulario programáticamente
    }
});

function validateForm() {  // debo considerar que en formularios grandes es mas óptimo utilizar un bucle
    let titulo = document.forms["myForm"]["titulo"].value;
    let tipo = document.forms["myForm"]["tipo"].value;
    let codigo = document.forms["myForm"]["codigo"].value;
    let password = document.forms["myForm"]["password"].value;

    let errorDiv = document.getElementById("errorDiv");
    errorDiv.innerHTML = "";

    if (titulo == "" || tipo == "" || codigo == "" || password == "") {
        errorDiv.innerHTML += "<p>Todos los campos son obligatorios.</p>";
    }

    let passwordRegex = /^[A-Za-z]@[\w]{6,12}-[^A-Za-z0-9%]$/;
    if (!passwordRegex.test(password)) {
        errorDiv.innerHTML += "<p>El password no cumple los requisitos.</p>";
    }

    if (errorDiv.innerHTML != "") {
        errorDiv.className = "error";
        return false;
    } else {
        errorDiv.className = "success";
        errorDiv.innerHTML = "OK";
        return true;
    }
}

// comprobar si el navegador es compatible
if (typeof Storage !== "undefined") {
    console.log("funciona")
} else {
    console.log("esto no va")
}
// Guardar
localStorage.setItem("Alixar", "DAW2");

localStorage.getItem("Alixar");

// Obtener el valor actual de la cookie "intentos" al cargar la página
let intentos = parseInt(getCookie("intentos")) || 0;
updateIntentosField(intentos);

// Evento de envío del formulario
document.forms["myForm"].addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateForm()) {
        document.forms["myForm"].submit();
    } else {
        // Incrementar el contador de intentos y actualizar el campo de texto
        intentos++;
        updateIntentosField(intentos);

        // Almacenar el nuevo valor en la cookie con fecha de caducidad
        let expirationDate = new Date("2024-12-31T20:00:00");
        document.cookie = `intentos=${intentos}; expires=${expirationDate.toUTCString()}`;
    }
});

// Evento para reiniciar el contador de intentos al hacer clic en el botón
document.getElementById("resetIntentos").addEventListener("click", function () {
    intentos = 0;
    updateIntentosField(intentos);

    // Reiniciar la cookie con fecha de caducidad
    let expirationDate = new Date("2024-12-31T20:00:00");
    document.cookie = `intentos=${intentos}; expires=${expirationDate.toUTCString()}`;
});
function updateIntentosField(value) {
    document.getElementById("intentos").value = value;
}

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}