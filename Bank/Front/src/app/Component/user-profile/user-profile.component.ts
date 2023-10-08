import { Component, OnInit } from '@angular/core';
import {User} from "../../Modals/user";
import {UserServiceService} from "../../Services/user-service.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
u:User=new User()
  fumer:any;
  constructor(private service:UserServiceService) { }

  ngOnInit(): void {
    this.service.getUser(sessionStorage.getItem("id")).subscribe(u=>{
      this.u=u
    })
  }

  edit(){
    if(this.fumer=="oui"){
      this.u.fumer=true

    }
     else if(this.fumer=="non"){
      this.u.fumer=false

    }

     this.service.modifuuser(this.u).subscribe();

  }


}
