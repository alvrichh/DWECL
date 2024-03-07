import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfoPaisesComponent } from "./info-paises/info-paises.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, InfoPaisesComponent]
})
export class AppComponent {
  title = 'U8_T4_ARM';
}
