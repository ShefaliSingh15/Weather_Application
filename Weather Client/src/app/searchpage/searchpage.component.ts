import { Component, OnInit } from '@angular/core';
import {SearchlistComponent} from '../searchlist/searchlist.component';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {

  constructor() { }
weather:any;

   handleTermData(data){
   this.weather=data;
   console.log(data);
} 
  ngOnInit() {
  }

}
