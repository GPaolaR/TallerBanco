import { Component } from '@angular/core';
import { ComunicacionAPIService } from 'src/app/services/comunicacion-api.service';

@Component({
  selector: 'app-agregar-usuarios',
  templateUrl: './agregar-usuarios.component.html',
  styleUrls: ['./agregar-usuarios.component.css']
})
export class AgregarUsuariosComponent {
  cliente: any = { 
    tipoDocumento: 'CC', // Valor por defecto
    documento: '',
    direccion: '',
    correo: '',
    celular: ''   
  };
  
  constructor(private comunicacionAPIService: ComunicacionAPIService) {}

  guardar() {
    // Llama al servicio para enviar la información del cliente
    this.comunicacionAPIService.guardarCliente(this.cliente).subscribe((response: any) => {
      // Maneja la respuesta del servidor aquí
      console.log('Cliente guardado:', response);
      // Puedes realizar otras acciones después de guardar
    });
  }
}
