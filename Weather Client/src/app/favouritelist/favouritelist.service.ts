import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {UserSchema} from '../model/UserSchema';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class FavouritelistService {
  url="http://localhost:8080/";
  Inurl="http://localhost:8080/delete"
  constructor(private http : Http) {}

 getData() : Observable<UserSchema>{
 	  return this.http.get(this.url)
 	  .map(response=>(response.json() as UserSchema))};
 
 weatherUpdate(d:any){
   return true;
}

Removedata(favouritelist:any)
	{
		console.log(favouritelist);
	 console.log(this.Inurl+'/'+favouritelist.dt_txt)
	 return this.http.delete(this.Inurl+'/'+favouritelist.dt_tx)
	 .map((response:Response)=>{console.log(response.json());
	 return <any[]>response.json()
	});
}}