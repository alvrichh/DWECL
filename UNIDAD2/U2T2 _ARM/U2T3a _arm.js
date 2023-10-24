/*
Las operaciones a realizar son:
10 == 10
10 === 10
10 === 10.0
“Laura” == “laura”
“Laura” > “laura”
“Laura” < “laura”
“123” == 123
“123” === 123
parseInt(“123”) === 123
*/
// DECLARACIÓN DE VARIABLES

let op1 = 10 == 10;
let op2 = 10 === 10;
let op3 = 10 === 10.0;
let op4 = "Laura" > "laura";
let op5 = "Laura" < "laura";
let op6 = "123" == 123;
let op7 = "123" === 123;
let op8 = parseInt("123") === 123;

// MOSTRAR LOS VALORES EN ALERT

alert("La operación 10 == 10 es: " + op1);
alert("La operación 10 === 10 es: " + op2);
alert("La operación 10 === 10.0 es: " + op3);
alert('La operación "Laura" > "laura" es: ' + op4);
alert('La operación "Laura" < "laura" es: ' + op5);
alert('La operación "123" == 123 es: ' + op6);
alert('La operación "123" === 123 es: ' + op7);
alert('La operación parseInt("123") === 123 es: ' + op8);

/*
ÁLvaro Rodríguez Molina
[La conclusión es que las comparaciones en JavaScript se distingue al igual
que en otros lenguajes en lo extricta que sea dicha restrincción, "==="
nos devuelve true si es exactamente igual, tomando mayor lógica al aplicarloe
sentido común a los valores se hizo para facilitar la programación y la comversión de tipado
se hace antes de realizar las comparaciones, luego tenemos métodos que indican el tipo
de variable que se declara. JavaScript está pensado para facilitar el código
y que se haga más facil su comprensión.]
*/

