import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuService } from '../../services/menu/menu.service';
import { Menu } from '../../models/menu';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cards',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() menu: any = {};
  @Output() menuSeleccionado = new EventEmitter<Menu>(); 

  constructor(public menuService: MenuService, private router: Router) { }

  ngOnInit(): void {
  }
  deleteMenu(id:string) {
    this.menuService.deleteMenu(id).subscribe(res => {
      console.log(res)
      window.location.reload()
    })
  }
  editMenu(id: string) {
    this.router.navigate(['/crear-menu', id])
  }
  seleccionarMenu(menu: Menu){
    this.menuSeleccionado.emit(menu);
  }
}
