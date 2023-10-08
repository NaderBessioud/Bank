import { Component, OnInit } from '@angular/core';
import {SimulateurServiceService } from 'src/app/Services/simulateur-service.service'

@Component({
  selector: 'app-s-vehicule-taux-fixe',
  templateUrl: './s-vehicule-taux-fixe.component.html',
  styleUrls: ['./s-vehicule-taux-fixe.component.scss']
})
export class SVehiculeTauxFixeComponent implements OnInit {

  msg:String

  constructor(private service:SimulateurServiceService) { }

  ngOnInit(): void {
  }

  simulateurVeculeFixe(){
    let capital =(<HTMLInputElement>document.getElementById("capital")).value;
  let mois =(<HTMLInputElement>document.getElementById("mois")).value;
  let revenu =(<HTMLInputElement>document.getElementById("revenu")).value;
    this.service.vehiculeATauxFixe(capital,mois,revenu).subscribe((res)=>{this.msg=res
      console.log(res)}
    );
    
    
  }
}
