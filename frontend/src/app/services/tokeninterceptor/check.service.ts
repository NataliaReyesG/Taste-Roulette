import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Check } from 'src/app/models/check';
import { Router } from '@angular/router'
import { RegistroCli } from 'src/app/models/registroCli';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  selectedCheck: Check
  check:Check[] = []
  readonly URL_API = "http://localhost:5000"

  constructor(private http: HttpClient, private router: Router) {
    this.selectedCheck = new Check()
  }

  //Signup
  signup(registroCliCreated:Check){
    console.log(`${this.URL_API}/check/signup`)
    return this.http.post(`${this.URL_API}/check/signup`, registroCliCreated)
  }

  signin(registroCliLogged:any){

    
    if (registroCliLogged.role === 0 ) {
      console.log(`${this.URL_API}/registroRes/signin`)
      return this.http.post<any>(`${this.URL_API}/registroRes/signin`, registroCliLogged)  
      
    } else {
      console.log(`${this.URL_API}/check/signin`)
     return this.http.post<any>(`${this.URL_API}/check/signin`, registroCliLogged)
      
    }



    
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
