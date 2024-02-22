import { Component } from '@angular/core';
import { InputNumerosComponent } from '../input-numeros/input-numeros.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Input} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-operaciones',
  standalone: true,
  imports: [FormsModule, CommonModule, InputNumerosComponent, MatButtonModule],
  templateUrl: './operaciones.component.html',
  styleUrl: './operaciones.component.css'
})
export class OperacionesComponent {
  resultado: number = 0;
  @Input()numero1:InputNumerosComponent | any;
  @Input()numero2:InputNumerosComponent | any;


  //constructor(private inputNumeros: InputNumerosComponent) {}

  sumar() {
   this.resultado = this.numero1 + this.numero2;

  }

  restar() {
    this.resultado = this.numero1 - this.numero2;
    
  }

  multiplicar() {
    this.resultado = this.numero1 * this.numero2;
  }
}