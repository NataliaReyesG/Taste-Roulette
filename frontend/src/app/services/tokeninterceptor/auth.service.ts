import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from 'src/app/models/auth';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  selectedauth: Auth
  auth:Auth[] = []
  readonly URL_API = "http://localhost:5000"

  constructor(private http: HttpClient, private router: Router) {
    this.selectedauth = new Auth()
  }

  //Signup
  /*signup(clientesCreated:Auth){
    console.log(`${this.URL_API}/auth/signup`)
    return this.http.post(`${this.URL_API}/auth/signup`, clientesCreated)
  }

  signin(clientesLogged:Auth){
    console.log(clientesLogged);

    console.log(`${this.URL_API}/auth/signin`)
    return this.http.post<any>(`${this.URL_API}/auth/signin`, clientesLogged)
  }

  loggedIn(){
    //return !!localStorage.getItem('token')
    if(localStorage.getItem('token')){
      return localStorage.getItem('token')
    } else {
      return false
    }
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/signin'])
  }

  getToken(){
    return localStorage.getItem('token')
  }*/
}
