import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SalairesService } from 'src/app/Services/salaires.service'

@Component({
  selector: 'app-affiche-salaire',
  templateUrl: './affiche-salaire.component.html',
  styleUrls: ['./affiche-salaire.component.scss']
})
export class AfficheSalaireComponent implements OnInit {

  listSalaires:any;
 salaire:any
  constructor(private router: Router,
    private Service: SalairesService) { }

  ngOnInit(): void {
    this.salaire={
      idSalaire:null,
  
  
      salairebase:null,
      dataperception:null,
      
      heuresup:null,
      prodheuresup:null,
      salairenet:null,
      employeecon :null,
    
    }
    


    this.findListSalaires();
  }

  findListSalaires(): void {
    this.Service.findAllSalaires()
    .subscribe(salaires => {
      console.log(salaires)
      this.listSalaires = salaires;
      
    });
  }
}
