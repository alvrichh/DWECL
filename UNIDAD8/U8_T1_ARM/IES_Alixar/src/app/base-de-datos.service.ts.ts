import { Alumno } from './alumno.model';

export class BaseDeDatos {
  alumnos: Alumno[] = [
    new Alumno("Juan Pérez", 20, "Matemáticas"),
    new Alumno("María García", 22, "Historia"),
    new Alumno("Carlos Rodríguez", 19, "Ciencias"),
    new Alumno("Ana López", 21, "Literatura")];

  constructor() {

    // Agregar datos para 4 objetos de la clase Alumno

  }

}
/* Ejemplo de uso
const baseDeDatos = new BaseDeDatos();
const listaDeAlumnos = baseDeDatos.obtenerAlumnos();
console.log(listaDeAlumnos);
*/