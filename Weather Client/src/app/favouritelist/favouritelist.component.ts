import { Component, OnInit } from '@angular/core';
import {FavouritelistService} from './favouritelist.service';
import {UserSchema} from '../model/UserSchema';
@Component({
  selector: 'app-favouritelist',
  templateUrl: './favouritelist.component.html',
  styleUrls: ['./favouritelist.component.css'],
  providers:[FavouritelistService]
})
export class FavouritelistComponent implements OnInit {
   ref:any;
   update:any;
   deletes:any;

  constructor(private favouritelistService : FavouritelistService ) {}

  display():any{
  	this.favouritelistService.getData().subscribe((ref)=>this.ref=ref);}

weatherUpdate(d:any){
  this.update=d;}

 deletefavourites(favouritelist :any){
    this.favouritelistService.Removedata(favouritelist)
    .subscribe(data=> this.deletes=data);
  }

  ngOnInit() {}
}
