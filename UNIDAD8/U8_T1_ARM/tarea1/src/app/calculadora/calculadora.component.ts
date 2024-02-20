import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  num1:number=0;
  num2:number=0;
  res:number= 0;
  suma(){
    this.res = this.num1+this.num2;
    this.num1 = 0;
    this.num2 = 0;
  }
}