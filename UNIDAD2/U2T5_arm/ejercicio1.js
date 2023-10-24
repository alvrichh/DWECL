/*
Ejercicio 1:


Realiza una web en la que se solicite mediante una ventana (prompt)
el nº de alumnos que hay en un módulo y que a continuación y para ese nº de alumnos 
solicite introducir su nota final. Por último se debe mostrar la nota media de todo el módulo. 

Comenta el ejercicio convenientemente, incluido tu nombre y apellidos.

By: Álvaro Rodríguez Molina
*/
let numAlumnos = parseInt(prompt("Introduce el número de alumnos en el módulo: "));
// Convertir a número y validar que sea un número válido

if (isNaN(numAlumnos) || numAlumnos <= 0) {
    alert("Número de alumnos no válido. Recargue la página.");
} else {
    //Inicializar la suma de las notas
    let sumaNotas = 0;
    //Pedir las notas de cada alumno
    for (let i = 1; i <= numAlumnos; i++) {
        // Preguntar la nota de cada alumno y convertir a float
        let nota = parseFloat(prompt("Introduce la nota del alumno " + i + ":"));
        // Validar que las notas sean de valor positivo y no superen el 10

        if (!isNaN(nota) && nota >= 0 && nota <= 10) {
            sumaNotas += nota;
        } else {
            alert("La nota introducida para el alumno " + i + " no es válida. Introduce una nota válida (0-10).");
            // Reducimos el contador para volver a pedir la nota para el mismo alumno
            i--;
        }
    }
    // Calcular la nota media
    let notaMedia = sumaNotas / numAlumnos;
    alert("La media de las notas de los alumnos es: " + notaMedia)

}

