import { Component, OnInit } from '@angular/core';
import {SimulateurServiceService } from 'src/app/Services/simulateur-service.service'

@Component({
  selector: 'app-s-personnel-taux-variable',
  templateUrl: './s-personnel-taux-variable.component.html',
  styleUrls: ['./s-personnel-taux-variable.component.scss']
})
export class SPersonnelTauxVariableComponent implements OnInit {

  msg:String
  
  constructor(private service:SimulateurServiceService) { }

  ngOnInit(): void {
  }

  simulateurPersonnelVariable(){
    let capital =(<HTMLInputElement>document.getElementById("capital")).value;
  let mois =(<HTMLInputElement>document.getElementById("mois")).value;
  let revenu =(<HTMLInputElement>document.getElementById("revenu")).value;
    this.service.PersonnelrATauxVariable(capital,mois,revenu).subscribe((res)=>{this.msg=res});
    
    
  }

}
