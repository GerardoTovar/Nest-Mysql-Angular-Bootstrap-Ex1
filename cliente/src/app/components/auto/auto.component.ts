import { Component, OnInit } from '@angular/core';
import { Auto } from 'src/app/interfaces/Auto';
import { AutoService } from 'src/app/services/auto.service';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {
  car: any = {
    marca: 'Audi',
    modelo: "nissan",
    color: "rojo",
    no_pasajeros: 4,
    no_puertas: 2,
    precio: 200,
    activo: true
  };
  cars: Auto[] = [];
  edit: boolean = false;
  constructor(private autoService: AutoService) { }

  ngOnInit(): void {
    this.getCars()
  }
  
  getCars(){
    this.autoService.getCars().subscribe(
      res => this.cars = res,
      err => console.log(err)
    )
  }

  submitProduct() {
    this.autoService.createCar(this.car)
      .subscribe(
        res => {
          this.getCars();
        },
        err => console.log(err)
      )
  }

  updateProduct() {

  }

  

}
