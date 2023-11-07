/**
 * 
 * 
 * By: Álvaro Rodríguez Molina
 */

// Arrays iniciales
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

function cambiaArray(array1, array2) {
    let arrayResultado = [];
    array1.forEach(num => {
        arrayResultado.push(num * 2);
    });

    array2.forEach(num => {
        arrayResultado.push(num * 2);
    });

    return arrayResultado;
}

let arrayBidimensional = [[1, 1, 1], [2, 2, 2], [3, 3, 3]];

function aplanaArray(arrayBidimensional) {
    let arrayAplanado = [];

    for (let i = 0; i < arrayBidimensional.length; i++) {
        for (let j = 0; j < arrayBidimensional[i].length; j++) {
            arrayAplanado.push(arrayBidimensional[i][j]);
        }
    }

    return arrayAplanado;

}

let arrayResultado = cambiaArray(array1, array2);
console.log(arrayResultado);


let arrayAplanado = aplanaArray(arrayBidimensional);
console.log(arrayAplanado);
