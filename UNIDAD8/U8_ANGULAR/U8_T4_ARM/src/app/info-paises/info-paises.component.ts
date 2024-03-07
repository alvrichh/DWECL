import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConsultapaisesService } from '../consultapaises.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-info-paises',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './info-paises.component.html',
  styleUrl: './info-paises.component.css'
})
export class InfoPaisesComponent {

  
  continenteSeleccionado: string ="europe";

  paises: any[] = [];

  constructor(private consultapaisesService: ConsultapaisesService) {
    this.continenteSeleccionado
  }
  mostrarinfo(){
    this.consultapaisesService.fetchData(this.continenteSeleccionado)
    .subscribe({
      next:(data) =>{
      this.paises = data;
    },
    error:(error) =>{
      Swal.fire({
        title: "Error en la petición",
        text:"No hemos podido conectar",
        icon: "error"
      });
    },
    complete:()=>{}
  });

  }
  /*
    obtenerPaisesPorContinente(){
      this.consultapaisesService
        .getPaisesPorContinente(this.continenteSeleccionado)
        .subscribe(
          (data) => {
            this.paises = data;
          },
          (error) => {
            console.error('Error al obtener datos de países:', error);
          });

    }*/
  }

