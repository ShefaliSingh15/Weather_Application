import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login/login.service';
/*import {Router} from '@angular/router';*/

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
info:any;
refer:any;
 data:any={};
  constructor(private loginService:LoginService ) {}

  
  getdata(data:any)
{
  console.log(this.data);
  this.loginService.logindata(data)

  .subscribe((refer)=>{this.info=refer;
  console.log("Refer",refer);
  console.log("This is info",this.info[0]);
  console.log("This is data",data);
  /*if(this.info[0].email==data.email && this.info[0].password ===data.password)
  {
    window.alert('successful login')
  }
  else{
     alert("invalid entry");
  }*/
});
}

  ngOnInit() {
  }

}
    


 