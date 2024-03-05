export class Alumno{
    nombre:string ='';
    edad:number =0;
    curso:string = '';
    //color: string ='';


    constructor(nombre: string, edad: number, curso: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
       // this.color = color;

      }
}
// Ejemplo de uso
//const nuevoAlumno = new Alumno("Juan Pérez", 20, "Matemáticas");
//console.log(nuevoAlumno);