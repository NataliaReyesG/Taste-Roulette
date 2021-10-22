import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/models/restaurante';
import { Menu } from '../../models/menu';
import { RestauranteService } from '../../services/restaurante/restaurante.service';
import { CheckService } from 'src/app/services/tokeninterceptor/check.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menus: Menu[] = [];
  restaurantes: Restaurante[] = [];

  constructor(public restauranteService: RestauranteService,public checkService:CheckService ) { }

  
  ngOnInit(): void {
    console.log('Inicio vista')
    this.loadRestaurante()
  }
  loadRestaurante(){
    this.restauranteService.getAllRestaurante().subscribe((restaurantes: Restaurante[]) => {
      console.log(restaurantes)
      this.restaurantes = restaurantes
    })
  }

}


