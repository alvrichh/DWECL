/**
 * Ejercicio 1:
Realiza una función que dado un array y un valor, devuelva si el valor está o no está en el array. Debes realizarlo sin recorrer el array. 
 Ejercicio 2 Realiza una función que dado un array, desordene sus elementos de forma aleatoria. Debe devolver el array desordenado.
 Ejemplo: miarray=[1,2,3,4,5,6,7,8]; miarraydesor=[5,2,8,6,1,4,7,3];
-------
Intercambiar dos valores de un array se hace de la siguiente forma:
[miarray[0], miarray[1]]=[miarray[1], miarray[0]] // Intercambia las posiciones 0 y 1 del array.
---------
Pista: Utiliza la generación de números aleatorios que vimos en ejercicios anteriores.
*
* By: Álvaro Rodríguez Molina
 */


function valorEnArray(array, valor) {
    return array.includes(valor);
}
function desordenar(array) {
    for (let i = 0; i < array.length; i++) {
        let random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]];
    }
    return array;
}

// Ejemplo de uso:
let miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let valorBuscado = 3;

console.log(miArray);
desordenar(miArray);
// ahoa me muestra el array desordenado
console.log(miArray);

if (valorEnArray(miArray, valorBuscado)) {
    console.log(`El valor ${valorBuscado} está en el array.`);
} else {
    console.log(`El valor ${valorBuscado} no está en el array.`);
}
