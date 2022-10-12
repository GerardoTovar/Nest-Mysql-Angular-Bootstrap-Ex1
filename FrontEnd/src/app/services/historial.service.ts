import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Historial} from '../interfaces/Historial';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  constructor(private http: HttpClient) {}
  BASE_URL: string = 'http://localhost:3000'
  getHistorial(): Observable<Historial[]> {
    return this.http.get<Historial[]>(`${this.BASE_URL}/cliente-auto/historial`)
  }
}
