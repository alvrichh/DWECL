/**
Realiza la siguiente aplicación web:
Se solicita mediante dos prompt que se introduzcan dos números.
Y después en otro prompt, que se introduzca una de las posibles operaciones:
1.- Suma
2.- Resta
3.- División
4.- Multiplicación.
Se mostrará el resultado de la operación en la propia página web. (leer indicaciones al final del documento).
CONSIDERACIONES:
Solo se deben permitir introducir valores numéricos. Si no se introduce un número, el programa debe dar un mensaje de error y terminar su ejecución.
Cada operación matemática se realizará mediante una llamada a una función propia que creéis.
En el caso de la división, no se permitirá que el segundo número sea 0.
Si se pulsa cancelar, en cualquiera de las ventanas, el programa debe mostrar un mensaje de despedida y terminar su ejecución.
Para escribir desde JavaScript en el HTML (de una forma rápida, pero no muy correcta.: ya aprenderemos otra), podemos utilizar el método del document: document.write(), 
que nos lleva al html, la cadena que le pasemos como argumento. 
Ejemplo:
let cadena="<p>Hola Mundo</p>"
document.write(cadena);
Crearía una etiqueta <p> en el html con el texto Hola Mundo.

By: Álvaro Rodríguez Molina
 */

// FUNCIONES
let suma = (a, b) => a + b;
let resta = (a, b) => a - b;
let division = (a, b) => a / b;
let multiplicacion = (a, b) => a * b;

let fin = "Ha pulsado en cancelar...";
let res = "Hola! ha ocurrido un error.";


let n1 = prompt("Introduzca un número:");
let u = n1*1;
if (n1 === null /* ||   isNaN(u) */) {
    alert(fin);

} else {
    let n2 = prompt("Introduzca otro número:");
    if (n1 === null) {
        alert(fin);
    } else {

        console.log(n1, n2);
        //CONSIDERACIONES

        if (n1 === null || n2 === null || isNaN(n1) || isNaN(n2)) {
            res = "ey ey, rebelde, ¿a donde ibas? recarga la página anda";
            alert("Por favor, introduzca un número");
        } else {
            let op = parseInt(prompt("Eige una opción:\n\t1.- Suma\n\t2.- Resta\n\t3.- División\n\t4.- Multiplicación."))
            //console.log(op);
            if (isNaN(op)) {
                alert(fin);
            } else {
                switch (op) {
                    case 1:
                        res = suma(n1 * 1, n2 * 1);
                        break;
                    case 2:
                        res = resta(n1 * 1, n2 * 1);
                        break;
                    case 3:
                        if (n2 * 1 === 0) {
                            alert("No se permite que el segundo número sea 0");
                            res = "ERROR MATEMÁTICO!!"
                        } else {
                            res = division(n1, n2);
                        } break;

                    case 4:
                        res = multiplicacion(n1, n2);
                        break;
                    default:
                        alert("Introduce una opción válida");
                        res = "ey ey, rebelde, ¿a donde ibas? recarga la página anda"
                        break;

                }
            }
        }
    }
}
// VISUALIZACIÓN EN HTML
let view =
    `<h1>Operaciones</h1>
    <p>Resultado: ${res} </p>
`

document.write(view);
