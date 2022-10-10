import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Auto} from '../interfaces/Auto';

@Injectable({
  providedIn: 'root',
})
export class AutoService {
  constructor(private http: HttpClient) {}
  BASE_URL: string = 'http://localhost:3000'
  getCars(): Observable<Auto[]> {
    return this.http.get<Auto[]>(`${this.BASE_URL}/auto`)
  }
  getCarById(id: string): Observable<Auto> {
    return this.http.get<Auto>(`${this.BASE_URL}/auto/${id}`)
  }

  createCar(car: Auto): Observable<Auto> {
    console.log(car);
    
    return this.http.post<Auto>(`${this.BASE_URL}/auto`,car)
  }

  updateCar(id:string, car: Auto): Observable<Auto> {
    return this.http.put<Auto>(`${this.BASE_URL}/auto/${id}`,car)
  }

  deleteCar(id: string): Observable<Auto> {
    return this.http.delete<any>(`${this.BASE_URL}/auto/${id}`)
  }
}
