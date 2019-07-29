import { ClienteService } from './../services/cliente/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/model/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  columnsToDisplay = ['id'];
  clientes: Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.getClientes().subscribe(resposta => this.clientes = resposta);
  }

}
