import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/tokeninterceptor/auth.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { MenuService } from 'src/app/services/menu/menu.service';
import { Menu } from '../../models/menu';
import { Restaurante } from '../../models/restaurante';
import { RestauranteService } from '../../services/restaurante/restaurante.service';
import { CheckService } from 'src/app/services/tokeninterceptor/check.service';

@Component({
  selector: 'app-menu-description',
  templateUrl: './menu-description.component.html',
  styleUrls: ['./menu-description.component.css']
})
export class MenuDescriptionComponent implements OnInit {
  menus: Menu[] = [];
  listaDeCompra: Menu[] = [];
  paramId: any;

  constructor(public authService: AuthService,
    public menuService: MenuService,
    public restauranteService: RestauranteService,
    public router:Router,
    public checkService:CheckService,
    public activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.paramId = this.activatedRoute.snapshot.paramMap.get('id')
    this.loadMenus(this.paramId)
  }

  loadMenus(paramId: any){
    this.menuService.getAllMenus(paramId).subscribe((menus: Menu[]) => {
      console.log(menus)
      this.menus = menus
    })
  }
  createMenu(){
    this.router.navigate(['/crear-menu', this.paramId])
  }
  agregarMenu(menu : Menu){
    this.listaDeCompra.push(menu);
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






