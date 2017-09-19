import { Component, OnInit,Input } from '@angular/core';
import {UpdateWeatherService} from './update-weather.service';

@Component({
  selector: 'app-update-weather',
  templateUrl: './update-weather.component.html',
  styleUrls: ['./update-weather.component.css'],
  providers:[UpdateWeatherService]
})
export class UpdateWeatherComponent implements OnInit {
   @Input() weatherup:any
   toupdate:string
  constructor(private updateWeatherService:UpdateWeatherService) { }
data:any

update(weatherup){
	this.updateWeatherService.updateit(weatherup,this.toupdate).subscribe(ref=>this.data=ref)
     console.log(this.toupdate)
}

  ngOnInit() {
  }

}
