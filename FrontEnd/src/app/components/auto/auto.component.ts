import { Component, OnInit } from '@angular/core';
import { Auto } from 'src/app/interfaces/Auto';
import { AutoService } from 'src/app/services/auto.service';
declare var $:any;
@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css'],
})
export class AutoComponent implements OnInit {
  car: Auto = {
    id: "1",
    marca: 'Audi',
    modelo: 'nissan',
    color: 'Rojo',
    no_pasajeros: 2,
    no_puertas: 2,
    precio: 200,
    activo: true,
  };
  cars: Auto[] = [];
  edit: boolean = false;
  constructor(private autoService: AutoService) {}

  ngOnInit(): void { this.getCars() }
  
  openModal(edit:boolean){ $('#ModalNewCar').modal('show') , this.edit = edit; }
  
  getCars() {
    this.autoService.getCars().subscribe({
      next: (res) =>  this.cars = res,
      error: (res) =>  alert(res.error.message)
    });
  }
  
  AddNewCar(){
    $('#ModalNewCar').modal('hide');
    const {id, ...Newcar} = this.car;
    this.autoService.createCar(Newcar).subscribe({
      next: (res) =>  this.getCars(),
      error: (res) =>  alert(res.error.message)
    });
  }
  
  deleteCar(){
    $('#ModalDeleteCar').modal('hide');
    this.autoService.deleteCar(this.car.id).subscribe({
      next: (res) =>  this.getCars(),
      error: (res) =>  alert(res.error.message)
    });
  }

  updateCar() {
    $('#ModalNewCar').modal('hide');
    const {id, ...updateCar} = this.car;
    this.autoService.updateCar(id, updateCar).subscribe({
      next: (res) =>  this.getCars(),
      error: (res) =>  alert(res.error.message)
    });
  }

  openModalDelete(CarToDelet: Auto){
    this.car = {...CarToDelet};
    $('#ModalDeleteCar').modal('show');
  }

  openModalUpdate(CarToUpdate: Auto){
    this.car = {...CarToUpdate};
    this.openModal(true);
  }

}
