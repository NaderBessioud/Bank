import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/Modals/Formation';
import {FormationsServicesService } from 'src/app/Services/formations-services.service'

@Component({
  selector: 'app-afficher-formations',
  templateUrl: './afficher-formations.component.html',
  styleUrls: ['./afficher-formations.component.scss']
})
export class AfficherFormationsComponent implements OnInit {
  for1!: Formation;
  listFormations?: any 
  holi:any
  p: number = 1;
  idF?:any;
  type:any;
  constructor(
    private router: Router,
    private Service: FormationsServicesService
  ) { }

  ngOnInit(): void {
    this.findListFormations();
    this.getFormationByiD(1)
    
  }

  findListFormations(): void {
    this.Service.findAllFormations()
    .subscribe(formations => {
      console.log(formations)
      this.listFormations = formations;
      
    });
  }
  supprimerFormation(idf){
    this.Service.supprimerFormation(idf).subscribe(() => this.findListFormations());
  }
passetoajouter(){
  this.router.navigate(["/ajouter-Formations"])
}
modifierFormation(id){
  this.router.navigate(['/modifierformation',id]);
}
affecter_formation(){
  this.Service.affecter_formation(this.idF,this.type).subscribe(formations => {
    console.log("aff")
    
    
  });
  console.log("test")
  console.log(this.idF)
  console.log(this.type)

}
getFormationByiD(id){
  this.Service.getForById(id).subscribe(ff => {
    this.for1 = ff;
    
  });


}

IdFormationChoix(id:any){
this.idF = id;
}
}
