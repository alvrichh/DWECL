/*
En un archivo js que vas a guardar con el nombre ejercicio1_ud7_tusiniciales, debes crear una promesa que vas a guardar con el nombre promesa1. La promesa, mediante un setTimeout espera 2 segundos y después genera un numero aleatorio entre 0 y 1.  Debes mostrar ese número por consola.
Si se obtiene un 1, se considera que la promesa finaliza con éxito y debe retornar el mensaje: "Promesa finalizada con éxito". 
Si se obtiene un 0, se considera que la promesa es rechazada y debe retornar el mensaje: "Promesa rechazada".
En ambos casos debe después (al consumir la promesa), mostrar los mensajes por consola.
Además, cuando la promesa se resuelve, debe mostrar el mensaje: "Promesa finalizada".

By: Álvaro Rodríguez Molina
*/
const promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let aleatorio = Math.round(Math.random());
        console.log('Numero aleatorio:', aleatorio);
        if (aleatorio === 1) {
            resolve('Promesa finalizada con éxito');
        } else {
            reject('Promesa rechazada');
        }
    }, 2000);
})
promesa1
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(()=>{
    console.log('Promesa finalizada');
  });