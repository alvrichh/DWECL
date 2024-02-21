import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-numeros',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './input-numeros.component.html',
  styleUrl: './input-numeros.component.css'
})
export class InputNumerosComponent {
  num1: number = 0;
  num2: number = 0;
}
