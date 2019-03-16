import { Component } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kata1-componentes';
  public usuario: Usuario = {
    nombre: 'Carlos',
    apellido: 'Díaz',
    direccion: 'C/ Vinateros 9',
    telefono: 626262626,
  };

}
