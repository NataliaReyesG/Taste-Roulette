import { Component, OnInit } from '@angular/core';
import { Check } from 'src/app/models/check';
import { CheckService } from 'src/app/services/tokeninterceptor/check.service';
import { NgForm } from '@angular/forms';
import { registroResService } from 'src/app/services/registroRes/registroRes.service';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  constructor(public checkService: CheckService, public registroResService: registroResService, 
              public router: Router) {}

  ngOnInit(): void {}

  signin(registroCliLogged: NgForm) {
    this.checkService.signin(registroCliLogged.value).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        if (registroCliLogged.value.role == 0) {
        this.router.navigate(['/home-res']) // homede registroRes 
        } else {
         this.router.navigate(['/home'])
        }
        
      },
      (err) => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: err.error.message,
          showConfirmButton: false,
          timer: 2000,
        });
      
      }
     
    );
    
  }
  alert(){
    const swalWithBootstrapButtons = Swal.mixin({
      
      
      customClass: {
        confirmButton: 'btn btn-dark ml-3',
        cancelButton: 'btn btn-dark'
        },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
     
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      stopKeydownPropagation:false,
      //showCloseButton:true,
     
      //closeButtonAriaLabel: 'cerrar alerta',
     
     
      title: '¿Como deseas Registrarte?',
      //text: "You won't be able to revert this!",
      icon: 'question', 
      showCancelButton: true,
      confirmButtonText: 'Cliente',
      padding: '2rem', 
      cancelButtonText: 'Restaurante',
      showConfirmButton: true,
      reverseButtons: true
    }).then((result) => {
      
      this.router.navigate(['/registro-cliente'])
       if (result.isConfirmed) {
        
       
      } else if (
        /* Read more about handling dismissals below */
        
        result.dismiss === Swal.DismissReason.cancel
      ) {
        this.router.navigate(['/registro-restaurante'])
       
      }
    })
  }
    
}







