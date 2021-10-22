import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/tokeninterceptor/auth.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { MenuService } from 'src/app/services/menu/menu.service';
import { Menu } from '../../models/menu';
import { Restaurante } from '../../models/restaurante';
import { RestauranteService } from '../../services/restaurante/restaurante.service';
import { CheckService } from 'src/app/services/tokeninterceptor/check.service';

@Component({
  selector: 'app-menu-cortina',
  templateUrl: './menu-cortina.component.html',
  styleUrls: ['./menu-cortina.component.css']
})
export class MenuCortinaComponent implements OnInit {
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

  agregarMenu(menu: any){
    console.log(menu);

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
