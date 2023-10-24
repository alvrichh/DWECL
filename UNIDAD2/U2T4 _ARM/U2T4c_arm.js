/*
EJERCICIO 2:
Realizar un script que pregunte: ¿Está seguro de que quiere hacer esto?
*/
// Preguntar al usuario
let radio = prompt("Introduce el radio de la circunferencia de la base en cm");
let altura = prompt("Introduce la altura en cm");
// Declarar fórmula
let volumen = Math.PI * radio * radio * altura;

if (radio === null || altura === null  || radio === 0 || altura === 0) {
    alert("Por favor introduzca los valores");
} else{
    alert("El volumen es:  " + volumen);
}
/*
ÁLvaro Rodríguez Molina
*/

