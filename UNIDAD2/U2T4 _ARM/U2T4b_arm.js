/*
EJERCICIO 2:
Realizar un script que pregunte: ¿Está seguro de que quiere hacer esto?
*/
// Preguntar al usuario
let prueba = prompt("¿Que densidad tiene el material elegido (g/cm3)?");

if (prueba === null) {
    alert("ha pulsado en cancelar");
}
else if (prueba < 1) {
    alert("Se hunde en el agua")
} else{
    alert("Flota en el agua")

}
/*
ÁLvaro Rodríguez Molina
*/

