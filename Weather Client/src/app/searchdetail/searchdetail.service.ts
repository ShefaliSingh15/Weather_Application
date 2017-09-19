import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {UserSchema} from '../model/UserSchema';
@Injectable()
export class SearchdetailService {
  url="http://localhost:8080";
  constructor(private http: Http) {}


create(dt_txt:string,humidity:number,description:string):any {
     const insUrl=`${this.url}/saveUsers`;
     return this.http
      .post(insUrl, {dt_txt:dt_txt, humidity:humidity, description:description})
      .map(res => {res.json() as UserSchema },(error)=>error.json()) 
 }
}
