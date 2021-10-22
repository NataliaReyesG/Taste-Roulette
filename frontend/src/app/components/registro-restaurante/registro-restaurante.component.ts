import { Component, OnInit } from '@angular/core';
import { registroResService } from 'src/app/services/registroRes/registroRes.service';
import { NgForm } from '@angular/forms';
import { RegistroRes } from 'src/app/models/registroRes';
import Swal from 'sweetalert2';
import { NgModuleCompiler } from '@angular/compiler';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registro-restaurante',
  templateUrl: './registro-restaurante.component.html',
  styleUrls: ['./registro-restaurante.component.css'],
  providers: [registroResService]
})

export class RegistroRestauranteComponent implements OnInit {

  constructor(public registroResService: registroResService ) { }


  ngOnInit(): void { }

  signup(registroResCreated: NgForm){
    console.log(registroResCreated)
    registroResCreated.value.file =this.registroResService.selectedRegistroRes.file
      this.registroResService.signup(registroResCreated.value).subscribe(
        (res) => {


          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuario creado',
            showConfirmButton: false,
            timer: 1000
          })


          this.clean(registroResCreated)
        },
        (err) => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'El usuario ya existe',
            showConfirmButton: false,
            timer: 1000
          })
          this.clean(registroResCreated)
        }
      )
    }

    clean(form?: NgForm){
      if(form) {
        form.reset();
        this.registroResService.selectedRegistroRes = new RegistroRes();
      }
    }

  loadImage(event:any){
    console.log(event)
    this.registroResService.selectedRegistroRes.file = event[0].base64
    alert("imagen cargada")
    console.log(this.registroResService.selectedRegistroRes.file)
  }
  }
