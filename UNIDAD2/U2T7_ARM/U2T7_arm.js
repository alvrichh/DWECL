/*
Queremos realizar una aplicación web que pida al usuario un nombre y una contraseña. Pediremos ambos datos con cuadros de entrada de texto de tipo prompt (aunque no sea el mejor método, pero de momento no podemos utilizar otro sistema).

Suponemos que el usuario está introduciendo esta información para darse de alta en algún servicio. La contraseña será visible (no es lo ideal, lógicamente, pero estamos aún empezando a trabajar con JavaScript).

El nombre de usuario no puede estar vacío, en ese caso, indicaremos el error y pediremos de nuevo el nombre.
La contraseña será : "MeGustaProgramar". Respetando las mayúsculas y minúsculas. 
Si la contraseña no es correcta, pediremos que la introduzca de nuevo. Cuando lo cumpla, indicaremos con un mensaje que se ha almacenado correctamente la información.
Ante cualquier cancelación en los cuadros, la aplicación termina y lo indicaremos con un mensaje de alerta.

By: Álvaro Rodríguez Molina
*/
// Pedir al usuario que ingrese su nombre de usuario
let nombreUsuario = "";
while (nombreUsuario === "") {
    nombreUsuario = prompt("Introduce tu nombre de usuario:");
    if (nombreUsuario === null) {
        alert("Registro cancelado.");
        break;  // Terminar la ejecución si el usuario cancela
    }
}
console.log(nombreUsuario);

// Pedir al usuario que ingrese la contraseña
let contrasena = "";
while (contrasena !== "MeGustaProgramar") {
    contrasena = prompt("Introduce tu contraseña:");
    if (contrasena === null) {
        alert("Registro cancelado.");
        break;  // Terminar la ejecución si el usuario cancela
    }
}
// Mostrar mensaje cuando la contraseña sea correcta
if (contrasena === "MeGustaProgramar") {
    alert("¡Información almacenada correctamente!");
}

