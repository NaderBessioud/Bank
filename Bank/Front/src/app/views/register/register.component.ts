import { Component } from '@angular/core';
import {User} from "../../Modals/user";
import {UserServiceService} from "../../Services/user-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  u:User=new User()
  constructor(private service:UserServiceService,private route:Router) { }

  register(){
    this.service.register(this.u).subscribe();
    this.route.navigate([('/login')])
  }

}
