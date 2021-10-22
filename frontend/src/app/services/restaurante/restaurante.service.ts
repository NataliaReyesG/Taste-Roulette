import { Injectable } from '@angular/core';
//cliente de http
import { HttpClient, HttpHeaders } from '@angular/common/http';
//modelo de datos
import { Restaurante } from 'src/app/models/restaurante';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  selectedrestaurante: Restaurante
  users: Restaurante[] = [];
  readonly URL_API = "http://localhost:5000"

  constructor(private http: HttpClient) {
    this.selectedrestaurante = new Restaurante
  }

  getAllRestaurante(): Observable<Restaurante[]> {
    return this.http.get<Restaurante[]>(`${this.URL_API}/restaurante/showAll`)
  }

  createRestaurante(restaurante: Restaurante) {
        return this.http.post(`${this.URL_API}/restaurante/create`, restaurante,)
  }
  deleteRestaurante(id: string) {
    return this.http.delete(`${this.URL_API}/restaurante/delete/${id}`,)
  }
  getRestauranteById(id:string): Observable<Restaurante> {
    return this.http.get<Restaurante>(`${this.URL_API}/restaurante/show/${id}`)
  }

  editRestaurante(restaurante: Restaurante) {
    console.log(restaurante);
    return this.http.post(`${this.URL_API}/restaurante/edit`, restaurante)
  }
}
