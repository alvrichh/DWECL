import { Component, EventEmitter, Output } from '@angular/core';
import { MostrarAlumnosComponent } from '../mostrar-alumnos/mostrar-alumnos.component';

@Component({
  selector: 'app-botones-colores',
  standalone: true,
  imports: [MostrarAlumnosComponent],
  templateUrl: './botones-colores.component.html',
  styleUrl: './botones-colores.component.css'
})
export class BotonesColoresComponent {

  @Output() colorSeleccionado : EventEmitter<string> = new EventEmitter<string>();

  Rojo() { 
    this.colorSeleccionado.emit("red");
  }
  Verde() {
    this.colorSeleccionado.emit("green");
  }
  Azul() { 
    this.colorSeleccionado.emit("blue");
   }
}