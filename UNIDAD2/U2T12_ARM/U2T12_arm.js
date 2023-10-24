/**
 * EXCLUSIVAMENTE CON LO QUE SE HA EXPLICADO EN CLASE, realiza una aplicación web en la que mediante prompt se pida que se introduzca un dato, y con un alert se diga de qué tipo de dato se trataba:
carácter
número menor que 100
número mayor que 100
número igual a 0
cadena vacía
Cualquier cadena que contenga una letra, se considera caracter.

El programa debe ejecutarse en bucle, hasta que se pulse cancelar. En ese caso, la aplicación termina y muestra un mensaje con el texto: "Programa terminado".

By: Álvaro Rodríguez Molina
*/

let continuar = true;

while (continuar) {
    let input = prompt("Introduce un dato:");

    if (input === null) {
        continuar = false;
        alert("Programa terminado.");
    } else if (input === "") {
        alert("Cadena vacía");
    } else if (!isNaN(input)) {
        if (parseInt(input) === 0) {
            alert("Número igual a 0");
        } else if (parseInt(input) < 100) {
            alert("Número menor que 100");
        } else {
            alert("Número mayor que 100");
        }
    } else {
        alert("Carácter");
    }
}