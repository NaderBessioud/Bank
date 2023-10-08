import { Component, OnInit } from '@angular/core';
import {SimulateurServiceService } from 'src/app/Services/simulateur-service.service'

@Component({
  selector: 'app-s-personnel-taux-fixe',
  templateUrl: './s-personnel-taux-fixe.component.html',
  styleUrls: ['./s-personnel-taux-fixe.component.scss']
})
export class SPersonnelTauxFixeComponent implements OnInit {

  msg:String
  
  constructor(private service:SimulateurServiceService) { }

  ngOnInit(): void {
  }

  simulateurPersonnelFixe(){
    let capital =(<HTMLInputElement>document.getElementById("capital")).value;
  let mois =(<HTMLInputElement>document.getElementById("mois")).value;
  let revenu =(<HTMLInputElement>document.getElementById("revenu")).value;
    this.service.PersonnelrATauxFixe(capital,mois,revenu).subscribe((res)=>{this.msg=res});
    
    
  }

}
