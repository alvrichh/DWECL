/*
Ejercicio 2 (STRING + ARRAY)
Haz un programa que reciba cadenas del tipo:

    “nombre:apellidos:telefono:email:codigopostal”
y que te muestre:

El código postal.
Los apellidos
El email.
Suponiendo un formato de email “direccion@servidor”, que te muestre el servidor asociado. 
La cadena se recibe mediante un prompt y el resultado se muestra en el html (utilizando document.write)

By: Álvaro Rodríguez Molina
*/

// Solicitar la cadena al usuario mediante prompt
let entrada = prompt("Introduce una cadena en el formato 'nombre:apellidos:telefono:email:codigopostal'");

if (entrada === null || entrada === ""){ // no me lo pide pero se podría hacer una especie de parseador para validar el formato
    alert("Formato incorrecto");
}
/*
 // Validar el formato de la cadena
        let patron = /^[^:]+:[^:]+:[^:]+:[^@]+@[^:]+:[0-9]{5}$/;
        if (!patron.test(entrada)) {
            alert("Formato incorrecto. Debe tener el formato 'nombre:apellidos:telefono:email:codigopostal'");
        } else {
            (*)
*/
// Función para extraer el código postal de la cadena
function obtenerCodigoPostal(cadena) {
    let partes = cadena.split(':');
    return partes[4];
}

// Función para extraer los apellidos de la cadena
function obtenerApellidos(cadena) {
    let partes = cadena.split(':');
    return partes[1];
}

// Función para extraer el servidor de correo de la cadena (*)
function obtenerServidorCorreo(cadena) {
    let partes = cadena.split(':');
    let email = partes[3];
    let servidor = email.split('@')[1];
    return servidor;
}


// Mostrar los resultados en el HTML
document.write(`<h2>Código Postal: ${codigoPostal}</h2>`);
document.write(`<h2>Apellidos: ${apellidos}</h2>`);
document.write(`<h2>Servidor de Correo: ${servidorCorreo}</h2>`);
