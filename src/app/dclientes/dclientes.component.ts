import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cliente } from '../models/cliente.model';
import { AlldataService } from '../alldata.service';
//import { AddClienteComponent } from './add-cliente.component';
@Component({
  selector: 'app-dclientes',
  templateUrl: './dclientes.component.html',
  styleUrls: ['./dclientes.component.scss']
})
export class DclientesComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private router: Router, private alldataService: AlldataService) {

  }

  ngOnInit() {
    this.alldataService.getClientes()
      .subscribe( data => {
        this.clientes = data;
        console.log(this.clientes);
      });
  };


}
