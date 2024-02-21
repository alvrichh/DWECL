import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputNumerosComponent } from './input-numeros/input-numeros.component';
import { OperacionesComponent } from './operaciones/operaciones.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputNumerosComponent, OperacionesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tarea2';
}
