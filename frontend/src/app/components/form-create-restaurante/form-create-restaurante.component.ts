import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestauranteService } from '../../services/restaurante/restaurante.service';

@Component({
  selector: 'app-form-create-restaurante',
  templateUrl: './form-create-restaurante.component.html',
  styleUrls: ['./form-create-restaurante.component.css']
})
export class FormCreateRestauranteComponent implements OnInit {
  form = this.fb.group({
    namerestaurante: [''],
    nit: [''],
    local: [''],
    adress: [''],
    phone: [''],
    email: [''],
    password: [''],
    role: [''],

  });
  restauranteId = ""
  constructor(private fb: FormBuilder, public restauranteService: RestauranteService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.restauranteId = this.router.snapshot.paramMap.get('id') || '';
    // Llamado aqui
    if (this.restauranteId) {
      this.restauranteService.getRestauranteById(this.restauranteId).subscribe(res => {
        console.log(res)
        this.form.patchValue(res)
      })
    }

  }

  create() {
    this.restauranteService.createRestaurante(this.form.value).subscribe(res => {
      console.log(res)
      this.form.reset()
    })
  }

  edit() {
    const formValue = {
      _id: this.restauranteId,
      ...this.form.value
    }
    console.log(formValue)
    this.restauranteService.editRestaurante(formValue).subscribe(res =>{
    alert("editado correctamente")
    })

  }
}
