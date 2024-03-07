import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  constructor(private authService: AuthService) {} // Inyecta el servicio AuthService
  username: string = '';
  password: string = '';
  token: string = '';

  login() {
    this.authService.login(this.username, this.password)
      .subscribe({
        next: (response: any) => {
          this.token = response.token; // Almacena el token en la propiedad token
          localStorage.setItem('token', this.token); // También puedes seguir almacenándolo en el localStorage
        },
        error: (error: any) => {
          console.error('Error al iniciar sesión:', error);
          // Maneja el error (por ejemplo, muestra un mensaje de error al usuario)
        }
      });
  }
}
