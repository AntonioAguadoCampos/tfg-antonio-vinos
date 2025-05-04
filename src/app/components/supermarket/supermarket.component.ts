import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-supermarket',
  templateUrl: './supermarket.component.html',
  styleUrls: ['./supermarket.component.scss'],
})
export class SupermarketComponent {
  items: any[] = [];

  constructor(private cartService: CartService) {
    this.items = this.cartService.items;
  }

  onBuyItem(item: any) {
    item.inCart = true;
    this.cartService.addItem(item);
  }
}
