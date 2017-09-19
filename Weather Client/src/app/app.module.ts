import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SearchComponent} from './search/search.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { SearchlistComponent } from './searchlist/searchlist.component';
import { HomeComponent } from './home/home.component';
import { SearchdetailComponent } from './searchdetail/searchdetail.component';
import { FavouritelistComponent } from './favouritelist/favouritelist.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateWeatherComponent } from './update-weather/update-weather.component';
import { SearchpageComponent } from './searchpage/searchpage.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchlistComponent,
    HomeComponent,
    SearchdetailComponent,
    FavouritelistComponent,
    LoginComponent,
    RegisterComponent,
    UpdateWeatherComponent,
    SearchpageComponent
    

  ],
  imports: [
    BrowserModule,
     AppRoutingModule,
     HttpModule,
     FormsModule,
     NgxPaginationModule,

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
