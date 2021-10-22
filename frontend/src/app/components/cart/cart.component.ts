import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  listaDeCompra: Menu[] = [];
  totalCompra: number = 0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.listaDeCompra = JSON.parse(params["compra"]);
    });

    this.totalCompra = this.totalPrice();
  }

  totalPrice() {
    let total = 0;
    for(let data of this.listaDeCompra){
      total += parseInt(data.price);
    }

    return total;
  }

}
