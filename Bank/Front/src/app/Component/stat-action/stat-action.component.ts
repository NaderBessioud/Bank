import { Component, OnInit } from '@angular/core';
import {StatActionService} from "../../Services/stat-action.service";

@Component({
  selector: 'app-stat-action',
  templateUrl: './stat-action.component.html',
  styleUrls: ['./stat-action.component.scss']
})
export class StatActionComponent implements OnInit {

  statActions:any;

  constructor(private statActionService: StatActionService) { }

  ngOnInit(): void {
  }

  getStatics(){
    this.statActionService.getStatActions().subscribe(res =>
      this.statActions = res);
  }

  getActions(){
    this.statActionService.getJsonActions().subscribe(res =>
      this.statActions = res);
  }

}
