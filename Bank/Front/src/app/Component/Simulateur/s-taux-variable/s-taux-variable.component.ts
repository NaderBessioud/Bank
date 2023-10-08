import { Component, OnInit } from '@angular/core';
import {SimulateurServiceService } from 'src/app/Services/simulateur-service.service'
@Component({
  selector: 'app-s-taux-variable',
  templateUrl: './s-taux-variable.component.html',
  styleUrls: ['./s-taux-variable.component.scss']
})
export class STauxVariableComponent implements OnInit {

  msg:String
  constructor(private service:SimulateurServiceService) { }

  ngOnInit(): void {
  }

  simulateurImmoblierVariable(){
    let capital =(<HTMLInputElement>document.getElementById("capital")).value;
  let mois =(<HTMLInputElement>document.getElementById("mois")).value;
  let revenu =(<HTMLInputElement>document.getElementById("revenu")).value;
    this.service.ImmoblierATauxVariable(capital,mois,revenu).subscribe((res)=>{this.msg=res});
    
    
  }
}