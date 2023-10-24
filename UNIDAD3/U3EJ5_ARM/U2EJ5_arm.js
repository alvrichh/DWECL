/**
 * 
Crea una web, con su correspondiente código externo en js,  para cada uno de los ejercicios que se plantean:

Ejercicio 1
Crea un programa que muestre el número de días que quedan desde hoy hasta el fin de curso (29 de marzo).

Recuerda que los meses empiezan desde el número 0.

Ejercicio 2
Crea un programa que pida por parámetro tu cumpleaños (no hace falta el año) y saque todos los años en que tu cumpleaños va a caer en Sábado desde este año hasta el año 2080.

Recuerda que los meses empiezan desde el número 0.

By: Álvaro Rodríguez Molina
 */

// EJERCICIO 1

let fechaHoy = new Date();

let fechaFinDeCurso = new Date(fechaHoy.getFullYear(), 2, 29); // Marzo es el tercer mes (0-indexed)

const diferencia = fechaFinDeCurso - fechaHoy;


console.log("Quedan" + diferencia / 1000 * 60 * 60 * 24)