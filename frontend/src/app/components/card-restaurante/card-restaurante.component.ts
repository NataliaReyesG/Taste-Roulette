import { Component,Input, OnInit } from '@angular/core';
import { RestauranteService } from 'src/app/services/restaurante/restaurante.service';
import { Restaurante } from '../../models/restaurante';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card-restaurante',
  templateUrl: './card-restaurante.component.html',
  styleUrls: ['./card-restaurante.component.css']
})
export class CardRestauranteComponent implements OnInit {

  constructor(public restauranteService: RestauranteService, private router: Router) { }
  @Input() restaurante: any = {};

  ngOnInit(): void {
  }
  deleteRestaurante(id:string) {
    this.restauranteService.deleteRestaurante(id).subscribe(res => {
      console.log(res)
      window.location.reload()
    })
  }
  editRestaurante(id: string) {
    console.log(id);
    this.router.navigate(['/crear-restaurante', id])
  }
  selectMenu(id: string) {
    console.log(id);
    this.router.navigate(['/menu-description', id])
  }

}
