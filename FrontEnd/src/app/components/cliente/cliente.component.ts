import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';
declare var $:any;
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})

export class ClienteComponent implements OnInit {
  cliente: Cliente = {
    nombre: "",
    apellido: "",
    edad: 18,
    sexo: "M",
    direccion: "",
    activo: true,
  };
  
  clientes: Cliente[] = [];
  edit: boolean = false;
  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void { this.getClientes() }
  
  openModal(edit:boolean){ $('#ModalNewCliente').modal('show') , this.edit = edit; }
  
  getClientes() {
    this.clienteService.getClientes().subscribe({
      next: (res) =>  this.clientes = res,
      error: (res) =>  alert(res.error.message)
    });
  }
  
  AddNewCliente(){
    $('#ModalNewCliente').modal('hide');
    const {id, ...Newcliente} = this.cliente;
    this.clienteService.createCliente(Newcliente).subscribe({
      next: (res) =>  this.getClientes(),
      error: (res) =>  alert(res.error.message)
    });
  }
  
  deleteCliente(){
    $('#ModalDeleteCliente').modal('hide');
    this.clienteService.deleteCliente(this.cliente.id).subscribe({
      next: (res) =>  this.getClientes(),
      error: (res) =>  alert(res.error.message)
    });
  }

  updateCliente() {
    $('#ModalNewCliente').modal('hide');
    const {id, ...updateCliente} = this.cliente;
    this.clienteService.updateCliente(id, updateCliente).subscribe({
      next: (res) =>  this.getClientes(),
      error: (res) =>  alert(res.error.message)
    });
  }

  openModalDelete(ClienteToDelet: Cliente){
    this.cliente = {...ClienteToDelet};
    $('#ModalDeleteCliente').modal('show');
  }

  openModalUpdate(ClienteToUpdate: Cliente){
    this.cliente = {...ClienteToUpdate};
    this.openModal(true);
  }
}
