import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class UpdateWeatherService {

  constructor(private http: Http) { }
    
    updateit(weatherup:any,description:string){
    	console.log(description)
    	weatherup.description = description;
    	const url="http://localhost:8080/update/"+weatherup.humidity;
    	console.log(url,weatherup)
             return this.http
             .put(url,weatherup)
             .map((response=>response.json()),error=>error.json())
    }

}
