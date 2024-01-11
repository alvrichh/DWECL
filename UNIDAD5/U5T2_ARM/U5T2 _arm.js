document.forms["myForm"].addEventListener("submit", function (event) {
    if (!validateForm()) {
        event.preventDefault(); // Evita la acción por defecto de envío del formulario si la validación falla
    }
});
function validateForm() {
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
        incrementCounter();
        return false;
    } else {
        errorDiv.className = "success";
        errorDiv.innerHTML = "OK";
        return true;
    }
}

function incrementCounter() {
    let counter = getCounter();
    counter++;
    setCounter(counter);
    document.getElementById("intentos").value = counter;
}

function getCounter() {
    let counter = parseInt(document.cookie.replace(/(?:(?:^|.*;\s*)counter\s*\=\s*([^;]*).*$)|^.*$/, "$1")) || 0;
    return counter;
}

function setCounter(counter) {
    let expiryDate = new Date("2024-12-31T20:00:00");
    document.cookie = "counter=" + counter + "; expires=" + expiryDate.toUTCString() + "; path=/";
}

document.getElementById("resetButton").addEventListener("click", function () {
    setCounter(0);
    document.getElementById("intentos").value = 0;
});

window.onload = function () {
    document.getElementById("intentos").value = getCounter();
};
