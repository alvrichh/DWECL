/*
Ejercicio 3 (OBJETOS)
Crea un objeto “Runner” con los siguientes atributos:

Nombre -> String

Apellidos -> String

Evento -> String

Fecha -> Date

Dorsal -> Number

Hora de Inicio -> Date

Hora de finalización ->Date

Además debe tener los siguientes métodos:

Calcular marca: Devolver en formato tiempo (hh:mm:ss) la Hora de Finalización - Hora de Inicio. 
Teniendo en cuenta que Hora de Finalización y/o Hora de Inicio pueden ser nulos.
En caso de que ocurra esto último debe devolver 00:00:00.

By: Álvaro Rodríguez Molina
*/

// Definición del objeto Runner
class Runner {
    constructor(nombre, apellidos, evento, fecha, dorsal, horaIni, horaFin) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.evento = evento;
        this.fecha = fecha;
        this.dorsal = dorsal;
        this.horaIni = horaIni;
        this.horaFin = horaFin;
    }
    calcularMarca() {
        if (this.horaIni && this.horaFin) {
            let tiempoTranscurrido = this.horaFin - this.horaIni;
            let segundos = Math.floor(tiempoTranscurrido / 1000);
            let minutos = Math.floor(segundos / 60);
            segundos = segundos % 60;
            let horas = Math.floor(minutos / 60);
            minutos = minutos % 60;
            // lo que hace padStart es rellenar a la izquierda con un 0 en el caso de que la longutud no sea 2
            return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
        } else {
            return "00:00:00";
        }
    };
}
let corredor = new Runner("Juan", "Pérez", "Maratón", new Date("2023-11-06"), 123, new Date("2023-11-06T09:00:00"), new Date("2023-11-06T10:30:15"));
let marca = corredor.calcularMarca();
console.log(`Marca de ${corredor.nombre} ${corredor.apellidos} en el evento ${corredor.evento}: ${marca}`);
