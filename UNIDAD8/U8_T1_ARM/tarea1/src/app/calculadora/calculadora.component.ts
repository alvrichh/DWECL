import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule, CommonModule , MatCardModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  num1: number = 0;
  num2: number = 0;
  res: number = 0;

  suma() {
    this.res = this.num1 + this.num2;
  }

  resta() {
    this.res = this.num1 - this.num2;
  }

  multiplica() {
    this.res = this.num1 * this.num2;
  }
}
