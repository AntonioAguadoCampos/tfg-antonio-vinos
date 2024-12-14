import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  itemsAmount: string = '0'

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.cartService.itemsToBuy.subscribe(cartItems => {
      this.itemsAmount = `${cartItems.length}`
    })
  }

  
}



