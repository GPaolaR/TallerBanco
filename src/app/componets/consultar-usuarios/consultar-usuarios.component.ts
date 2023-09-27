import { Component, OnInit } from '@angular/core';
import { ComunicacionAPIService } from 'src/app/services/comunicacion-api.service';

@Component({
  selector: 'app-consultar-usuarios',
  templateUrl: './consultar-usuarios.component.html',
  styleUrls: ['./consultar-usuarios.component.css']
})
export class ConsultarUsuariosComponent{
  clientes:  any[] = [];

  constructor(private comunicacionAPIService: ComunicacionAPIService) { }

  consultarTotal(){
    this.comunicacionAPIService.obtenerClientes().subscribe((data: any) => {
      this.clientes = data;
      console.log("entra: longitud " + this.clientes.length);
    });
  }

  consultarIndividual() {
    this.clientes = [];
    this.comunicacionAPIService.obtenerCliente().subscribe((data: any) => {
      this.clientes.push(data);
    });  
  }
}
