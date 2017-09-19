import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';


@Injectable()
export class RegisterService {
     url="http://localhost:8080";
  constructor(private http: Http) { }

  registerme(datas:any){
  	const insUrl=`${this.url}/register`;
     return this.http
      .post(insUrl, datas)
      .map(res => {res.json() },(error)=>error.json()) 
  }

}
