import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormationsServicesService } from 'src/app/Services/formations-services.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-modifier-formation',
  templateUrl: './modifier-formation.component.html',
  styleUrls: ['./modifier-formation.component.scss']
})
export class ModifierFormationComponent implements OnInit {
  formation!:any;
  id!: any;
  routeSub!: Subscription;
  constructor(private Service: FormationsServicesService,private router:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.formation={
      idFormation:null,
      titre:null,
      description:null,
  
      heure:null,
    
      nbrparticipant:null,
      date:null,

    }
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id']; });
     
     this.Service.getForById(this.id).subscribe(p =>{
      console.log(p);
      this.formation = p;
    
    });
  
  }
  retour(){
    this.router.navigate(["/Formations"])
  }
  updateEvent(id:any){
    this.Service.modifier_formation(id, this.formation).subscribe(p =>{
      console.log();
    });
    this.router.navigate(['/Formations']).then(() => {
      
    });
  }
}
