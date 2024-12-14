import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CartService } from "src/app/services/cart.service";

@Component({
    selector: 'app-item-detail',
    templateUrl: './item-detail.component.html',
    styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent {

    item: any

    constructor (
        private route: ActivatedRoute,
        private cartService: CartService
    ) {
        this.route.params.subscribe((params: any) => {
            this.item = this.cartService.getItem(params?.id)
        })
    }

    onAddItem() {
        this.item.inCart = true
        this.cartService.addItem(this.item)
    }
}