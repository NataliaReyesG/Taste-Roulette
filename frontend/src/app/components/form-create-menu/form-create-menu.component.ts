import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../../services/menu/menu.service';
import { CheckService } from 'src/app/services/tokeninterceptor/check.service';
import { registroResService } from '../../services/registroRes/registroRes.service';


@Component({
  selector: 'app-form-create-menu',
  templateUrl: './form-create-menu.component.html',
  styleUrls: ['./form-create-menu.component.css']
})
export class FormCreateMenuComponent implements OnInit {
  form = this.fb.group({
    name: [''],
    price: [''],
    description: [''],
    availability : [''],
    type: [''],
    restaurantId: [''],
    file:['']
  });
  menuId = ""
  constructor(private fb: FormBuilder, public menuService: MenuService, private router: ActivatedRoute,public checkService:CheckService,public registroResService: registroResService) { }

  ngOnInit(): void {
    this.menuId = this.router.snapshot.paramMap.get('id') || '';
    // Llamado aqui
    if (this.menuId) {
      this.menuService.getMenuById(this.menuId).subscribe(res => {
        console.log(res)
        this.form.patchValue(res)
      })
    }

  }

  create() {
    const formValue = {...this.form.value, restaurantId: this.menuId}
    formValue.file =this.menuService.selectedMenu.file
    console.log(formValue)
    this.menuService.createMenu(formValue).subscribe(res => {
      console.log(res)
      alert("Menu Creado")
      this.form.reset()
    })
  }

  edit() {
    const formValue = {
      _id: this.menuId,
      ...this.form.value
    }
    console.log(formValue)
    this.menuService.editMenu(formValue).subscribe(res =>{
    alert("editado correctamente")
    })

  }
  loadImage(event:any){
    console.log(event)
    this.menuService.selectedMenu.file = event[0].base64
    alert("imagen cargada")
    //console.log(this.menuService.selectedMenu.file)//
  }

}
