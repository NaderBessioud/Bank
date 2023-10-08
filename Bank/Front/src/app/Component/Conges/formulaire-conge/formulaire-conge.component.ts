import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conge } from 'src/app/Modals/Conge';
import { CongeServiceService } from 'src/app/Services/conge-service.service';

@Component({
  selector: 'app-formulaire-conge',
  templateUrl: './formulaire-conge.component.html',
  styleUrls: ['./formulaire-conge.component.scss']
})
export class FormulaireCongeComponent implements OnInit {
conge :Conge;
idU:any
  constructor( private router: Router,
    private Service: CongeServiceService) { }

  ngOnInit(): void {
    this.conge={
      idConge:null,
      datedebut:null,
      datefin:null,
      
      description:null,
      employeecon:null
    }
  }

  ajouter_conge(conge:Conge,idU){
    this.Service.ajouterConge(conge,idU).subscribe(()=>this.router.navigate(["/Conges"]))
  }
}
