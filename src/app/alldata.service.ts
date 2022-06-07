import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Cliente } from './models/cliente.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AlldataService {
  cliente:Cliente = {

      id: '',
      cedula: '',
      name: '',
      email: '' }

  constructor(private http:HttpClient) {}

  private dataUrl = 'http://localhost:3000/clientes';

  public getClientes() {
    return this.http.get<Cliente[]>(this.dataUrl);
  }

  public createCliente(cliente: Cliente) {
    return this.http.post<Cliente>(this.dataUrl, cliente);
  }

}
