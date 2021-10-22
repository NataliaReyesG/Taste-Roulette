import { Injectable } from '@angular/core';
//cliente de http
import { HttpClient, HttpHeaders } from '@angular/common/http';
//modelo de datos
import { Menu } from 'src/app/models/menu';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  selectedMenu: Menu
  users: Menu[] = [];
  readonly URL_API = "http://localhost:5000"

  constructor(private http: HttpClient) {
    this.selectedMenu = new Menu
  }

  getAllMenus(paramId: any): Observable<Menu[]> {
    return this.http.get<Menu[]>(`${this.URL_API}/menu/showRestaurantMenus/${paramId}`)
  }

  createMenu(menu: Menu) {
    return this.http.post(`${this.URL_API}/menu/create`, menu)
  }

  deleteMenu(id: string) {
       return this.http.delete(`${this.URL_API}/menu/delete/${id}`)
  }

  getMenuById(id:string): Observable<Menu> {
    return this.http.get<Menu>(`${this.URL_API}/menu/show/${id}`)
  }

  editMenu(menu: Menu) {
    console.log(menu);
    return this.http.post(`${this.URL_API}/menu/edit`, menu)
  }
}
