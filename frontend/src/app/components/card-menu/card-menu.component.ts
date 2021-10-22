import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuService } from '../../services/menu/menu.service';
import { Menu } from '../../models/menu';
import { ActivatedRoute, Router } from '@angular/router';
import { RestauranteService } from 'src/app/services/restaurante/restaurante.service';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.css']
})
export class CardMenuComponent implements OnInit {
  menus: Menu[] = [];
  listaDeCompra: Menu[] = [];
  paramId: any;

  @Input() menu: any = {};
  @Output() menuSeleccionado = new EventEmitter<Menu>();
  @Input() restaurante: any = {};
  constructor(public menuService: MenuService, private router: Router,public activatedRoute: ActivatedRoute,public restauranteService: RestauranteService) { }

  ngOnInit(): void {
    console.log(this.menu);

  }

  seleccionarMenu(menu: Menu){
    this.menuSeleccionado.emit(menu);
  }
}
