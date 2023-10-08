import { Component } from '@angular/core';
import {User} from "../../Modals/user";
import {UserServiceService} from "../../Services/user-service.service";
import {Router} from "@angular/router";
import {Message} from "../../Modals/message";
import {WebSocketServiceService} from "../../Services/web-socket-service.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  username:any;
  pass:any;
  user:User

  constructor(private service:UserServiceService,private router:Router,) {

  }

  login(){
    this.service.login(this.username,this.pass).subscribe(u=>{
      this.user=u;


      sessionStorage.setItem('token',this.user.token)
      sessionStorage.setItem('role',this.user.role)
      sessionStorage.setItem('id',this.user.idEmployee)
      sessionStorage.setItem('email',this.user.email)

      if((u.role=="PARTICULIER") && (u.approved==false)){
        this.router.navigate(['/dashboard'])
      }
      else{
        this.router.navigate(['/dashboard'])
      }
    })

  }
}
