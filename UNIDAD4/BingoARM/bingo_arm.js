/**
    BINGO!!! 
    S
    By: Álvaro Rodríguez Molina
 **///
//

// He añadido algunas cosas comentadas para hacer el juego más divertido.
let carton = [];
let drawnNumbers = [];
let maxDrawnNumbers = 99;

//Antes de comenzar el juego ponemos el botón de sacar nuemero nuevo en gris
document.getElementById('drawNumberButton').style.backgroundColor = "grey";

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
    document.getElementById('startButton').style.backgroundColor = "grey";
    document.getElementById('drawNumberButton').style.backgroundColor = ""; //le quitamos el color del estilo para que se aplique el css
    document.getElementById('text').innerHTML = "Números que han salido:";
    sacaNumeroNuevo();
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
function marcarCelda(numero) {
    let table = document.getElementById('cartonInfo');
    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            if (table.rows[i].cells[j].innerHTML === numero.toString()) {
                table.rows[i].cells[j].classList.add('drawn');
            }
        }
    }
}

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
            document.getElementById('drawnNumbersInfo').innerHTML +='<div class= bolitas>' + newNumber + '</div>';
        } while (drawnNumbers.includes(newNumber));

      //  drawnNumbers.push('<div class= bolitas>' + newNumber + '</div>');
        maxDrawnNumbers--;

        marcarCelda(newNumber);

        let lineInfo = compruebaLinea(carton, drawnNumbers);
        let bingoInfo = compruebaBingo(carton, drawnNumbers);

        document.getElementById('gameInfo').innerHTML = "Inicio de la partida";
        //document.getElementById('drawnNumbersInfo').innerHTML = drawnNumbers;

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
