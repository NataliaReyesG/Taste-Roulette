import { Component, OnInit } from '@angular/core';
import { Check } from 'src/app/models/check';
import { NgForm } from '@angular/forms';
import { CheckService } from 'src/app/services/tokeninterceptor/check.service';
import Swal from 'sweetalert2';
import { NgModuleCompiler } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public checkService: CheckService,private router: Router) { }

  ngOnInit(): void {
    
  }

  signup(registroCliCreated: NgForm){
    this.checkService.signup(registroCliCreated.value).subscribe(
      (res) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usuario creado',
          showConfirmButton: false,
          timer: 1000
        })
        this.clean(registroCliCreated)
       
      },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'El usuario ya existe',
          showConfirmButton: false,
          timer: 1000
        })
        this.clean(registroCliCreated)
     
      }
     
    )
  }

  clean(form?: NgForm){
    if(form) {
      form.reset()
      this.checkService.selectedCheck = new Check()
     
    }
  }
  
    
  }



