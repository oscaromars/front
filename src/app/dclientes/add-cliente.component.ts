import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Cliente } from '../models/cliente.model';
import { AlldataService } from '../alldata.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './add-cliente.component.html',
    styleUrls: ['./dclientes.component.scss']
})
export class AddClienteComponent {
  cliente: Cliente = new Cliente();

  constructor(private router: Router, private alldataService: AlldataService) {

  }

  createCliente(): void {
    this.alldataService.createCliente(this.cliente)
        .subscribe( data => {
        //  alert("Cliente creado exitosamente.");
          this.router.navigate(['/clientes']);
        });

  };

}
