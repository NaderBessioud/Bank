import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-simulateur',
  templateUrl: './simulateur.component.html',
  styleUrls: ['./simulateur.component.scss']
})
export class SimulateurComponent implements OnInit {
x1 : boolean= false;
x2 : boolean= false;


  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  AfiicheB1(){
    this.x1 = !this.x1;
    this.x2 = false;
  }
  AfiicheB2(){
    this.x2 = !this.x2;
    this.x1 = false;
  }
  passeImoblierFixe(){
    this.router.navigate(["/simulateur-immoblierFixe"]);
  }
  passePersonnelFixe(){
    this.router.navigate(["/simulateur-PersonnelFixe"]);
  }
  passeVehiculeFixe(){
    this.router.navigate(["/simulateur-VehiculeFixe"]);
  }


  passeImoblierVariable(){
    this.router.navigate(["/simulateur-immoblierVariable"]);
  }
  passePersonnelVariable(){
    this.router.navigate(["/simulateur-PersonnelVariable"]);
  }
  passeVehiculeVariable(){
    this.router.navigate(["/simulateur-VehiculeVariable"]);
  }


}
