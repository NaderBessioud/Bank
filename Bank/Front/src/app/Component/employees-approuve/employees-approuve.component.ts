import { Component, OnInit } from '@angular/core';
import {User} from "../../Modals/user";
import {UserServiceService} from "../../Services/user-service.service";

@Component({
  selector: 'app-employees-approuve',
  templateUrl: './employees-approuve.component.html',
  styleUrls: ['./employees-approuve.component.scss']
})
export class EmployeesApprouveComponent implements OnInit {
  employee:User[]
  constructor(private service:UserServiceService) { }

  ngOnInit(): void {
    this.service.getEmployee().subscribe(users=>{
      this.employee=users
    })
  }
  approve(id){
    this.service.approve(id).subscribe()
    this.service.getEmployee().subscribe(users=>{
      this.employee=users
    })
  }

}
