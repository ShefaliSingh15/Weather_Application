import { Component,Input,OnInit} from '@angular/core';
import {UserSchema} from './../model/UserSchema';
@Component({
  selector: 'app-searchlist',
  templateUrl: './searchlist.component.html',
  styleUrls: ['./searchlist.component.css']
})


export class SearchlistComponent implements OnInit {
  @Input() user:any ;
  
  ngOnInit(){
  	console.log(this.user);
  }
}