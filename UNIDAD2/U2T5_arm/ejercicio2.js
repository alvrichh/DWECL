/*
Ejercicio 2:

Desarrolla una página web para calcular la nota obtenida por un alumno en un cuestionario. 
Para ello se solicita el nº de preguntas acertadas, el nº de preguntas
falladas y el nº de preguntas no contestadas. 
Se considera que por cada respuesta fallada,se anula una acertada.

Comenta el ejercicio convenientemente, incluido tu nombre y apellidos. 

By: Álvaro Rodríguez Molina
*/
let acertadas = parseInt(prompt("Número de preguntas acertadas: "));
let falladas = parseInt(prompt("Número de preguntas falladas: "));
let nc = parseInt(prompt("Número de preguntas no contestadas: "));
// Declaro el número de preguntas
let preguntas = acertadas + falladas + nc;
let nota = parseFloat((acertadas - falladas) / preguntas * 10).toFixed(2);
// Si la nota es negativa por que tiene mas falladas que acertadas, la nota es 0
nota < 0 ? nota = 0 : nota = nota;

isNaN(acertadas) || isNaN(falladas) || isNaN(nc) ? alert("Por favor, rellene todos los campos con números.") : alert("Tu nota es: " + nota);




