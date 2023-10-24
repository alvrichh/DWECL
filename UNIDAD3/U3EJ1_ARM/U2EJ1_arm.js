/**
 * Crea una web, con su correspondiente código externo en js, 
 * que pida al usuario mediante ventana tipo promt un número entero
 * y en un alert muestre:

 -Su valor exponencial.

- El número con 4 decimales.

- El número en binario.

- El número en octal.

- El número en hexadecimal.

Utiliza para ello los métodos del objeto Number.

Como datos de muestra, si metes 50, deberías obtener:

    5e1 / 50.0000 / 00110010 / 62 / 0x32

Si en el prompt se pulsa cancelar, el programa termina. Por simplicidad, NO HAY QUE CONTROLAR, que el valor introducido sea válido.

By: Álvaro Rodríguez Molina
*/

let input = prompt("Introduce un número: ");

// console.log(input);

if (input === null || input === "") {
  alert("Programa terminado");

} else {
  num = new Number(input);
  alert("Exponencial: " + num.toExponential());

  alert("Cuatro decimales: " + num.toFixed(4));

  alert("Binario: " + num.toString(2));

  alert("Octal: " + num.toString(8));

  alert("Hexadecimal: " + num.toString(16));
}
