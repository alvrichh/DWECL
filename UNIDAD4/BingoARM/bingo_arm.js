/**
 * Ejercicio 1 (FUNCIONES DE USUARIO)
El bingo es un juego que consiste en comprobar números que van saliendo aleatorios de un cartón (que podemos representar como un array bidimensional). Cuando todos los números de una fila han salido, se puede cantar línea. Cuando todos los números de un cartón han salido, se puede cantar bingo. Los cartones de bingo disponen de 15 números, repartidos en 3 líneas de 5 números cada una.

Realiza las siguientes funciones:

Función comenzar, que rellena el cartón con el que se juega, inicia la partida, y se llama por primera vez a la función sacaNumeroNuevo.
Función rellenarCarton, que rellena un array bidimensional con números aleatorios del 1 al 99 (ambos inclusive), que será con el se juega.
Función compruebaLinea, que recibe un cartón de bingo (representado por un array bidimensional) y un array unidimensional desordenado, con los números que han ido saliendo. Devuelve el número de línea si se canta línea, -1 en caso contrario.
Función compruebaBingo, que recibe un cartón de bingo (representado por un array bidimensional) y un array unidimensional desordenado, con los números que han ido saliendo. Devuelve true si se canta bingo, false en caso contrario.
Función sacaNumeroNuevo, que recibe un array unidimensional con los números que han ido saliendo. Esta función irá “sacando” nuevos números mientras haya disponibles (sacaremos un máximo de 99 números). Sacará números aleatorios que no esté presente en el array unidimensional recibido (los números que han salido ya), y una vez sacado el nuevo número, llamará a las funciones compruebaLinea y compruebaBingo.
Genera un HTML que contenga dos botones, uno para comenzar la partida, y otro para ir sacando números nuevos. Adicionalmente, se insertará utilizando document.write lo siguiente:

Inicio y fin de la partida
El cartón con el que se juega (separado por cada una de las líneas que lo componen)
Los números que van saliendo
El resultado de la línea que se ha cantado por última vez, o bien, si se ha cantado bingo, o bien, nada si no ha obtenido ningún resultado aún.
    
    By: Álvaro Rodríguez Molina
 **///
//

// He añadido algunas cosas comentadas para hacer el juego más divertido.
let carton = [];
let drawnNumbers = [];
let maxDrawnNumbers = 99;

// Función para obtener un número aleatorio entre 1 y 99
function getRandomNumber() {
    return Math.floor(Math.random() * 99) + 1;
}

// Función para comenzar la partida
function comenzar() {
    /*    carton = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15]
    ]; */
    carton = rellenarCarton();
    crearTablaCarton(carton);
    // Se podrían pone las variables a 0 en el botón comenzar por si queremos jugar de nuevo
    document.getElementById('drawNumberButton').disabled = false;
    document.getElementById('startButton').disabled = true;
    sacaNumeroNuevo();
    // document.getElementById('cartonInfo').addEventListener('click', marcarCelda); // cuando pulsas en una celda se pondrá en naranja
    // Los numeros saldrán cada 2 segundos de manera automática
     intervalId = setInterval(sacaNumeroNuevo, 2000);

}

// Función para rellenar un cartón de bingo con números aleatorios
function rellenarCarton() {
    let newCarton = [];
    for (let i = 0; i < 3; i++) {
        let linea = [];
        while (linea.length < 5) {
            let randomNumber = getRandomNumber();
            if (!linea.includes(randomNumber)) {
                linea.push(randomNumber);
            }
        }
        newCarton.push(linea);
    }
    return newCarton;
}

// Función para crear una tabla HTML a partir del cartón (esto es opcional pero me ha parecido interesante)
function crearTablaCarton(carton) {
    let table = document.getElementById('cartonInfo');
    table.innerHTML = ""; // Esto sirve para dejar la tabla vacía

    for (let i = 0; i < carton.length; i++) {
        let row = table.insertRow(i); //inserta <tr>
        for (let j = 0; j < carton[i].length; j++) {
            let cell = row.insertCell(j); // inserta <td>
            cell.innerHTML = carton[i][j];
        }
    }
}

// Función para marcar la celda en verde cuando el número sale
function marcarCeldaEnGris(numero) {
    let table = document.getElementById('cartonInfo');
    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            if (table.rows[i].cells[j].innerHTML === numero.toString()) {
                table.rows[i].cells[j].classList.add('drawn');
            }
        }
    }
}
// Función para marcar la celda al hacer clic en ella
/*
El event.target es una propiedad del objeto de evento (event) en JavaScript que hace 
referencia al elemento HTML en el que ocurrió el evento. Es decir, event.target apunta 
al elemento que fue el objetivo del evento, en este caso, el elemento en el que se hizo clic.
*/
/*
function marcarCelda(event) {
    if (event.target.tagName === 'TD') {
        const cell = event.target;
        const numero = cell.textContent;
        if (numero && !cell.classList.contains('drawn')) {
            cell.classList.toggle('marked'); // Agregar o quitar clase para resaltar o desresaltar
            if (compruebaBingo(carton, drawnNumbers)) {
                document.getElementById('lineInfo').innerHTML = "<h1>BINGO!</h1>";
                finalizarPartida();
            }
        }
    }
} */

// Función para comprobar si se ha cantado línea
function compruebaLinea(carton, drawnNumbers) {
    for (let i = 0; i < carton.length; i++) {
        if (carton[i].every(num => drawnNumbers.includes(num))) {
            return i + 1;
        }
    }
    return -1;
}

// Función para comprobar si se ha cantado bingo
function compruebaBingo(carton, drawnNumbers) {
    const isBingo = carton.every(linea => linea.every(num => drawnNumbers.includes(num))); //every devuelve true si todos los elementos del array cumplen la condición de que se encuentra el numero

    // Agrega un console.log para verificar si se canta "bingo"
    if (isBingo) {
        console.log("¡BINGO!");
    }

    return isBingo;
}

// Función para sacar un número nuevo
function sacaNumeroNuevo() {
    if (maxDrawnNumbers > 0) {
        let newNumber;
        do {
            newNumber = getRandomNumber();
        } while (drawnNumbers.includes(newNumber));

        drawnNumbers.push(newNumber);
        maxDrawnNumbers--;

        marcarCeldaEnGris(newNumber);

        let lineInfo = compruebaLinea(carton, drawnNumbers);
        let bingoInfo = compruebaBingo(carton, drawnNumbers);

        document.getElementById('gameInfo').innerHTML = "Inicio de la partida";
        document.getElementById('drawnNumbersInfo').innerHTML = "Números que han salido:<br>" + JSON.stringify(drawnNumbers, null, 4);

        console.log("Números que han salido:", drawnNumbers);
        console.log("Es bingo?", bingoInfo);
        console.log(lineInfo);

        if (bingoInfo) {
            document.getElementById('lineInfo').innerHTML = "<h1>BINGO!</h1>";
        }
        else if (lineInfo !== -1) {
            document.getElementById('lineInfo').innerHTML = "Se canta línea en la línea " + lineInfo;

        } else {
            document.getElementById('lineInfo').innerHTML = "";
        }
    } else {
        document.getElementById('drawNumberButton').disabled = true;
        document.getElementById('lineInfo').innerHTML = "Fin de la partida";
    }
}

// Event listeners para los botones
document.getElementById('startButton').addEventListener('click', comenzar);
document.getElementById('drawNumberButton').addEventListener('click', sacaNumeroNuevo);
