
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from 'src/app/services/tokeninterceptor/auth.service';
import { NavigationExtras, Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu/menu.service';
import { Menu } from '../../models/menu';
import { Restaurante } from '../../models/restaurante';
import { RestauranteService } from '../../services/restaurante/restaurante.service';
import { CheckService } from 'src/app/services/tokeninterceptor/check.service';


@Component({
  selector: 'app-home-res',
  templateUrl: './home-res.component.html',
  styleUrls: ['./home-res.component.css']
})
export class HomeResComponent implements OnInit {
  restaurantes: Restaurante[] = [];
  menus: Menu[] = [];
  constructor(public restauranteService: RestauranteService,public authService: AuthService,public menuService: MenuService, public router:Router, public checkService:CheckService) { }

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
