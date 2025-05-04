import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { PasswordModule } from 'primeng/password';

import { RadioButtonModule } from 'primeng/radiobutton';
import { SupermarketComponent } from './components/supermarket/supermarket.component';
import { ResultsComponent } from './components/results/results.component';
import { FinalFormComponent } from './components/final-form/final-form.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SupermarketComponent,
    ResultsComponent,
    FinalFormComponent,
    ItemDetailComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    HttpClientModule,
    ToolbarModule,
    CardModule,
    RadioButtonModule,
    ReactiveFormsModule,
    DropdownModule,
    TableModule,
    PasswordModule,
    RouterModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
