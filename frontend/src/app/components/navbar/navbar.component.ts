
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from 'src/app/services/tokeninterceptor/auth.service';
import { NavigationExtras, Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu/menu.service';
import { Menu } from '../../models/menu';
import { Restaurante } from '../../models/restaurante';
import { RestauranteService } from '../../services/restaurante/restaurante.service';
import { CheckService } from 'src/app/services/tokeninterceptor/check.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menus: Menu[] = [];
  @Input() listaDeCompra: Menu[] = [];
  @Output() responderMenusAlPadre = new EventEmitter<Menu[]>();
  restaurantes: Restaurante[] = [];
    constructor(public authService: AuthService,public menuService: MenuService,
    public restauranteService: RestauranteService, public router:Router, public checkService:CheckService) { }

  ngOnInit(): void {
 }

 irAlCarrito(){
  let arrayCompra: NavigationExtras = {
    queryParams: {
        "compra": JSON.stringify(this.listaDeCompra)
    }
  };

  this.router.navigate(['/cart'], arrayCompra);
  }
}


