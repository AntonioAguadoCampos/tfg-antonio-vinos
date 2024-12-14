import { NgModule } from '@angular/core';
import { SupermarketComponent } from './supermarket.component';
import { SupermarketRoutingModule } from './supermarket-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemDetailComponent } from '../components/item-detail/item-detail.component';

@NgModule({
    declarations: [
        SupermarketComponent,
        ItemDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SupermarketRoutingModule,
        MenubarModule,
        HttpClientModule,
        CardModule,
        ButtonModule,
    ],
})
export class SupermarketModule{}