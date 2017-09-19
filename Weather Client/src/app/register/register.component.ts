import { Component, OnInit } from '@angular/core';
import {RegisterService} from './register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[RegisterService]
})
export class RegisterComponent implements OnInit {
	data:any={};
  abc:any={};
  constructor(private registerService:RegisterService ) {}

  register(data:any){
  	console.log(data);
  	this.registerService.registerme(data)
	.subscribe(ref=>{ref=this.abc});
	console.log(this.abc);

  }

  ngOnInit() {
  }

}
