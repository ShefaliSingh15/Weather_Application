import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import {UserSchema} from '../model/UserSchema';
@Injectable()
export class SearchService{
   
     
     constructor(private http: Http) {}
     getData(term:string){
        
     	return this.http.get("http://api.openweathermap.org/data/2.5/forecast?q="+term+"&APPID=e3230fbaa3d4f811544e8a9440d35b9f")
         .map((res:Response) => res.json(),(error)=>error.json()); }

 }
