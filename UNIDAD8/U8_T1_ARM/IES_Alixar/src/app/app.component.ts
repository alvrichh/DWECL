import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MostrarAlumnosComponent } from './mostrar-alumnos/mostrar-alumnos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MostrarAlumnosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'IES_Alixar';
}
