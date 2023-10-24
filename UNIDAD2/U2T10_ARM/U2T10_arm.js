/**
 * 
Crea una aplicación web que simule las tiradas de unos dados.

Se deben tener en cuenta los siguientes aspectos:

Lo primero que debe preguntar es cuántos dados desea tirar y obtener el resultado mediante una ventana tipo prompt.
La respuesta debe ser un número comprendido entre el 1 y el 4. En cualquier otro caso, debe volver a pedirle que introduzca un número válido.
Si le da a cancelar, el programa termina.
Para el número de dados elegido, se debe generar el número aleatorio correspondiente (recuerda que es un dado).
Todos los valores de las tiradas se deben mostrar en un mismo alert, indicado de la siguiente forma:
      Dado 1: 5   -  Dado 2: 6    y así para todos los dados.

Finalmente tiene que volver a pedirle que introduzca el número de dados que quiere tirar y todo comienza de nuevo.
    By: Álvaro Rodríguez Molina
*/

let continuar = true;

while (continuar) {
    let numDados = prompt("¿Cuántos dados quieres tirar? (1-4)");

    if (numDados === null) {
        continuar = false;
        alert("Programa terminado.");
    } else {
        numDados = parseInt(numDados);

        if (isNaN(numDados) || numDados < 1 || numDados > 4 || numDados.length != 1) {
            alert("Introduce un número válido (1-4).");
            //he puesto lo de numDados.length por si el usuario pone un numero seguido de un carácter ej: '2a'
        } else {
            let resultados = "";

            for (let i = 1; i <= numDados; i++) {
                let resultadoDado = Math.floor(Math.random() * 6) + 1; // Números del 1 al 6 para simular el dado
                resultados += 'Dado '+ i + ': ' + resultadoDado;
                if (i < numDados) {
                    resultados += " - ";
                }
            }

            alert(resultados);
        }
    }
}
