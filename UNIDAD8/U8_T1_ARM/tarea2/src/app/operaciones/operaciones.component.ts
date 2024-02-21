import { Component } from '@angular/core';
import { InputNumerosComponent } from '../input-numeros/input-numeros.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-operaciones',
  standalone: true,
  imports: [FormsModule, CommonModule, InputNumerosComponent],
  templateUrl: './operaciones.component.html',
  styleUrl: './operaciones.component.css'
})
export class OperacionesComponent {
  resultado: number = 0;


  constructor(private inputNumeros: InputNumerosComponent) {}

  sumar() {
    this.resultado = this.inputNumeros.num1 + this.inputNumeros.num2;
  }

  restar() {
    this.resultado = this.inputNumeros.num1 - this.inputNumeros.num2;
  }

  multiplicar() {
    this.resultado = this.inputNumeros.num1 * this.inputNumeros.num2;
  }
}