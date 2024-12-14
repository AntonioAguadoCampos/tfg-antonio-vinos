import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CartService {


    itemsToBuy = new BehaviorSubject<any[]>([])
    items = [
      {
        id: 1,
        name: 'Vino Mirto',
        src: 'assets/img/wines/mirto.jpg',
        price: '41,25€',
        madeInCanarias: false,
        stock: 20,
        inCart: false
      },
      {
        id: 2,
        name: 'Vino El Nido',
        src: 'assets/img/wines/nido.png',
        price: '181,50€',
        madeInCanarias: false,
        stock: 80,
        inCart: false
      },
        {
          id: 3,
          name: 'Vino Vulcano Tinto',
          src: 'assets/img/wines/vulcano.jpg',
          price: '27,35€',
          madeInCanarias: true,
          stock: 36,
          inCart: false
        },
        {
          id: 4,
          name: 'Vino Cráter tinto',
          src: 'assets/img/wines/crater.png',
          price: '28,70€',
          madeInCanarias: true,
          stock: 150,
          inCart: false
        },
        null,
        {
          id: 5,
          name: 'Vino Valara',
          src: 'assets/img/wines/valara.jpg',
          price: '48,18€',
          stock: 100,
          madeInCanarias: true,
          inCart: false
        },
        {
          id: 6,
          name: 'Vino Corimbo',
          src: 'assets/img/wines/corimbo.jpg',
          price: '22,20€',
          stock: 10,
          madeInCanarias: false,
          inCart: false
        },
        {
          id: 7,
          name: 'Vino Agala Crianza',
          src: 'assets/img/wines/agala.jpg',
          price: '38,90€',
          stock: 55,
          madeInCanarias: true,
          inCart: false
        },
        {
          id: 8,
          name: 'Vino Malleolus',
          src: 'assets/img/wines/malleolus.jpg',
          price: '35,45€',
          stock: 86,
          madeInCanarias: false,
          inCart: false
        }
      ]

    addItem(item: any) {
        const newItems = [...this.itemsToBuy.getValue(), item]
        this.itemsToBuy.next(newItems)
    }

    removeItem(item: any) {
        
    }

    getItem(id: number): any {
      return this.items.find(item => item?.id == id)
    }
}