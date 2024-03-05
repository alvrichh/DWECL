import { Component } from '@angular/core';
import { MostrarAlumnosComponent } from '../mostrar-alumnos/mostrar-alumnos.component';

@Component({
  selector: 'app-botones-colores',
  standalone: true,
  imports: [MostrarAlumnosComponent],
  templateUrl: './botones-colores.component.html',
  styleUrl: './botones-colores.component.css'
})
export class BotonesColoresComponent {

}
