import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OperacionesComponent } from "../operaciones/operaciones.component";
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-input-numeros',
    standalone: true,
    templateUrl: './input-numeros.component.html',
    styleUrl: './input-numeros.component.css',
    imports: [FormsModule, CommonModule, OperacionesComponent, MatCardModule]
})
export class InputNumerosComponent {
  num1: number = 0;
  num2: number = 0;
resultado: any;
}
