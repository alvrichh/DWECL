/**
 * By: Álvaro Rodríguez Molina
 */

let ok = 1995;
let bien = true;
let intentos = 0;


while (bien) {
    let res = prompt("Intenta adivinar el año de creación de JavaScript: ");
    let parse = parseInt(res);
    intentos += 1;
    // Controles para ver si acierta o falla
    if (res === null) {
        alert("Programa cancelado. \nIntentos: " + intentos);
        break;
    }
    // he puesto !isNaN porque si escribías '1995e' también te lo daba como acertado
    if (!isNaN(res) && parse === ok) {
        alert("Felicidades! has acertado. \nIntentos: " + intentos);
        bien = false;
        break;
    }
    // Restrinciones y comprobacionesw
    else {
        if (isNaN(res)) {
            alert("No has introducido un valor numérico. \nIntentos: " + intentos);
        } else { // solo entra si es un n
            if (parse < ok) {
                alert("El numero introducido es menor. \nIntentos: " + intentos);
            }
            if (parse > ok) {
                alert("El numero introducido es mayor. \nIntentos: " + intentos);
            }
            if (res === "") {
                alert("Mensaje vacío. \nIntentos: " + intentos);
            }

        }
    }
}

