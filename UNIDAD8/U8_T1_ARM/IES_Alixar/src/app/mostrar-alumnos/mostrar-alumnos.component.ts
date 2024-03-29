import { Component } from '@angular/core';
import { Alumno } from '../alumno.model';
import { BaseDeDatos } from '../base-de-datos.service.ts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BotonesColoresComponent } from '../botones-colores/botones-colores.component';

@Component({
  selector: 'app-mostrar-alumnos',
  standalone: true,
  providers: [BaseDeDatos],
  imports: [FormsModule, CommonModule, BotonesColoresComponent],
  templateUrl: './mostrar-alumnos.component.html',
  styleUrl: './mostrar-alumnos.component.css'
})

export class MostrarAlumnosComponent {
  listaDeAlumnos: Alumno[];

  color:string ="red";

  constructor(public baseDeDatos: BaseDeDatos) {
    this.listaDeAlumnos = baseDeDatos.alumnos;


  }

}
