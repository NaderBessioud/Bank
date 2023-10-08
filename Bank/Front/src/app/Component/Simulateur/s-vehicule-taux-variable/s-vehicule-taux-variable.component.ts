import { Component, OnInit } from '@angular/core';
import {SimulateurServiceService } from 'src/app/Services/simulateur-service.service'

@Component({
  selector: 'app-s-vehicule-taux-variable',
  templateUrl: './s-vehicule-taux-variable.component.html',
  styleUrls: ['./s-vehicule-taux-variable.component.scss']
})
export class SVehiculeTauxVariableComponent implements OnInit {

  msg:String

  constructor(private service:SimulateurServiceService) { }

  ngOnInit(): void {
  }

  simulateurVeculeVariable(){
    let capital =(<HTMLInputElement>document.getElementById("capital")).value;
  let mois =(<HTMLInputElement>document.getElementById("mois")).value;
  let revenu =(<HTMLInputElement>document.getElementById("revenu")).value;
    this.service.vehiculeATauxVariable(capital,mois,revenu).subscribe((res)=>{this.msg=res});
    
    
  }

}
