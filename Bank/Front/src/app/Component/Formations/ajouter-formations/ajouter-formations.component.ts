import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { FormationsServicesService } from 'src/app/Services/formations-services.service'
import { Formation } from 'src/app/Modals/Formation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-formations',
  templateUrl: './ajouter-formations.component.html',
  styleUrls: ['./ajouter-formations.component.scss'],

})
export class AjouterFormationsComponent implements OnInit {

  formation: Formation

  constructor(private Service: FormationsServicesService, private router: Router) {

  }

  ngOnInit(): void {

    this.formation = {
      idFormation: null,
      titre: null,
      description: null,

      heure: null,

      nbrparticipant: null,
      date: null,
      users : null

    }

     const thisDay = new Date().toISOString().slice(0, 16);
     const deadline = document.getElementsByName("intervention_date")[0] as HTMLInputElement;
     deadline.min = thisDay
     
  }

  ajouterFormation(formation) {

    this.Service.ajouterFormation(formation).subscribe(() => { this.router.navigate(["/Formations"]) });
  }

  retour() {
    this.router.navigate(["/Formations"])
  }


 
}
