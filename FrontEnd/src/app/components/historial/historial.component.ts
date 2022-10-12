import { Component, OnInit } from '@angular/core';
import { Historial } from 'src/app/interfaces/Historial';
import { HistorialService } from 'src/app/services/historial.service';
declare var $: any;
@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css'],
})
export class HistorialComponent implements OnInit {
  historales: Historial[] = [];
  backuphistoriales: Historial[] = [];
  searchText = '';
  constructor(private historialService: HistorialService) {}

  ngOnInit(): void {
    this.getHistorial();
  }

  getHistorial() {
    this.historialService.getHistorial().subscribe({
      next: (res) => {
        this.historales = res;
        this.backuphistoriales = res;
      },
      error: (res) => alert(res.error.message),
    });
  }
  Search() {
    if(this.searchText === '') {
      this.historales = this.backuphistoriales;
      return
    }
    var hist: any = [];
    const search = this.searchText.toLocaleLowerCase();
    this.historales.filter((row: any) => {
      var found = false;
      Object.keys(row).forEach(function (key) {
        if (String(row[key]).toLocaleLowerCase().includes(search) && !found) {
          found = true;
          return hist.push(row);
        }
      });
    });
    this.historales = hist
  }
}
