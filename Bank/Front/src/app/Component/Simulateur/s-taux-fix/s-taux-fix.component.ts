import { Component, OnInit } from '@angular/core';
import {SimulateurServiceService } from 'src/app/Services/simulateur-service.service'

@Component({
  selector: 'app-s-taux-fix',
  templateUrl: './s-taux-fix.component.html',
  styleUrls: ['./s-taux-fix.component.scss']
})
export class STauxFixComponent implements OnInit {

  msg:String
  
  constructor(private service:SimulateurServiceService) { }

  ngOnInit(): void {
  }

  simulateurImmoblierFixe(){
    let capital =(<HTMLInputElement>document.getElementById("capital")).value;
  let mois =(<HTMLInputElement>document.getElementById("mois")).value;
  let revenu =(<HTMLInputElement>document.getElementById("revenu")).value;
    this.service.ImmoblierATauxFixe(capital,mois,revenu).subscribe((res)=>{this.msg=res});
    
    
  }
}
