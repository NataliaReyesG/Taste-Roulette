import { Component,Input, OnInit } from '@angular/core';
import { RestauranteService } from 'src/app/services/restaurante/restaurante.service';
import { Restaurante } from '../../models/restaurante';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-cliente',
  templateUrl: './card-cliente.component.html',
  styleUrls: ['./card-cliente.component.css']
})
export class CardClienteComponent implements OnInit {

  constructor(public restauranteService: RestauranteService, private router: Router) { }
  @Input() restaurante: any = {};

  ngOnInit(): void {
  }
  selectMenu(id: string) {
    console.log(id);
    this.router.navigate(['/menu-cortina', id])
  }

}
