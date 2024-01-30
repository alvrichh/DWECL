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
