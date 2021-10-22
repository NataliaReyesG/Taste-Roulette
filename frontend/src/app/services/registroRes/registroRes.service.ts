import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistroRes } from 'src/app/models/registroRes';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class registroResService {

  selectedRegistroRes: RegistroRes
  registrosRes:RegistroRes[] = [];
  readonly URL_API = "http://localhost:5000"

  constructor(private http: HttpClient, private router: Router) {
    this.selectedRegistroRes = new RegistroRes()
  }

  //Signup
  signup(registroResCreated:RegistroRes){
    console.log(`${this.URL_API}/registroRes/signup`)
    return this.http.post(`${this.URL_API}/registroRes/signup`, registroResCreated)
  }
 

  signin(registroResLogged:RegistroRes){
    console.log(`${this.URL_API}/registroRes/signin`)
    return this.http.post<any>(`${this.URL_API}/registroRes/signin`, registroResLogged)
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
  }
}
