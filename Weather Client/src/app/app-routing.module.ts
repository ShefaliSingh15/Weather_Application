import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouritelistComponent} from './favouritelist/favouritelist.component';
import {SearchpageComponent} from './searchpage/searchpage.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
const routes: Routes = [
 
  { path: 'favouritelist',component:FavouritelistComponent },
  { path: 'searchbar',component:SearchpageComponent },
  { path: 'register',component:RegisterComponent },
  {path: 'login' ,component:LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
	
}
