/*import { Injectable } from '@angular/core';
//RegistroCli de http
import { HttpClient, HttpHeaders } from '@angular/common/http';
//modelo de datos
import {RegistroCli} from 'src/app/models/RegistroCli';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class clienteService {

  selectedcliente: RegistroCli
  users: RegistroCli[] = [];
  readonly URL_API = "http://localhost:5000"

/*constructor(private http: HttpClient) {
    this.selectedMenu = new Menu
  }

  getAllMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>(`${this.URL_API}/menu/showAll`)
  }

  createMenu(menu: Menu) {
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTQ1MzcyMDY0Y2ZmNjRiNzcxZmFmNzciLCJlbWFpbCI6ImNvbWlkYUBob3RtYWlsLmNvbSIsInJvbGUiOjEsImlhdCI6MTYzMTkyNjQ3OH0.krSnmYtpC95keQ5cVI8kuQ3RIjewDdxrIAeYicvOk8w'
    });

    return this.http.post(`${this.URL_API}/menu/create`, menu, {headers: headers})
  }
  deleteMenu(id: string) {
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTQ1MzcyMDY0Y2ZmNjRiNzcxZmFmNzciLCJlbWFpbCI6ImNvbWlkYUBob3RtYWlsLmNvbSIsInJvbGUiOjEsImlhdCI6MTYzMTkyNjQ3OH0.krSnmYtpC95keQ5cVI8kuQ3RIjewDdxrIAeYicvOk8w'
    });

    return this.http.delete(`${this.URL_API}/menu/delete/${id}`,{headers: headers})
  }
  getMenuById(id:string): Observable<Menu> {
    return this.http.get<Menu>(`${this.URL_API}/menu/show/${id}`)
  }

  editMenu(menu: Menu) {
    console.log(menu);
    return this.http.post(`${this.URL_API}/menu/edit`, menu)
  }
}*/
