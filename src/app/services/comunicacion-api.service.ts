import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionAPIService {

  private apiUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) { }

  obtenerClientes() {
    return this.http.get(`${this.apiUrl}/clientes`);
  }
  obtenerCliente() {
    return this.http.get(`${this.apiUrl}/1`);
  }
  guardarCliente(cliente: any) {
    // Realiza la solicitud POST al servidor Spring
    return this.http.post(`${this.apiUrl}/crear`, cliente);
  }
}
