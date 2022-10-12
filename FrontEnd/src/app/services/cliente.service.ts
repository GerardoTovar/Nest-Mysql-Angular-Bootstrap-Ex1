import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {}
  BASE_URL: string = 'http://localhost:3000'
  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.BASE_URL}/cliente`)
  }
  getClienteById(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.BASE_URL}/cliente/${id}`)
  }

  createCliente(cliente: Cliente): Observable<Cliente> {
    console.log(cliente);
    return this.http.post<Cliente>(`${this.BASE_URL}/cliente`,cliente)
  }

  updateCliente(id:any, cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.BASE_URL}/cliente/${id}`,cliente)
  }

  deleteCliente(id: any): Observable<Cliente> {
    return this.http.delete<any>(`${this.BASE_URL}/cliente/${id}`)
  }
}
