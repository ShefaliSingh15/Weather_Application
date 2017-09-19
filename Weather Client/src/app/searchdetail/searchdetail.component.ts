import { Component, OnInit,Input } from '@angular/core';
import {SearchlistComponent} from '../searchlist/searchlist.component';
import {UserSchema} from '../model/UserSchema';
import {SearchdetailService} from './searchdetail.service';

@Component({
  selector: 'app-searchdetail',
  templateUrl: './searchdetail.component.html',
  styleUrls: ['./searchdetail.component.css'],
  providers:[SearchdetailService]
})
export class SearchdetailComponent implements OnInit {
 @Input() users:any;
  p:number=1;
  constructor(private searchdetailService:SearchdetailService){}


   add(users):any{
	this.searchdetailService.create(users.dt_txt, users.main.humidity, users.weather[0].description)
	.subscribe(ref=>{ref=this.users});
  }
  ngOnInit() {

    console.log(this.users);
  }

}
