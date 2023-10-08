import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CongeServiceService } from 'src/app/Services/conge-service.service'
@Component({
  selector: 'app-afficher-conge',
  templateUrl: './afficher-conge.component.html',
  styleUrls: ['./afficher-conge.component.scss']
})
export class AfficherCongeComponent implements OnInit {
  lists: any;
  holi:any
  p: number = 1;
  conge:any;
  x: string = "none";
  nbr:any;
  idu:any
  idC:any;
  email:any;
  body:any;
  constructor( private router: Router,
    private Service: CongeServiceService) { }

  ngOnInit(): void {

    this.conge={
      idConge:null,
      date_debut:null,
      date_fin:null,
      
      description:null,
      employeecon:null
    }
    
    
  }
  get_all_congesnonaccepter(){
    this.x="";
    this.Service.findAllCongesNoNAccepter().subscribe((lists)=>{this.lists=lists
      console.log(lists)
     
    });
  }
  get_all_congesaccepter(){
    this.x="";
    this.Service.findAllCongesAccepter().subscribe((lists)=>{this.lists=lists
      console.log(lists)
     
    });
  }
 accepter_Conge(){
this.Service.accepterConge(this.idC,this.email,this.body).subscribe(()=>{this.get_all_congesnonaccepter();
window.location.reload()}); }

calculer_Conge(id:any){
  this.Service.calculerConge(id).subscribe((c)=>{console.log(c)
  this.nbr=c}); }


   gotojourferier(){
    this.router.navigate(["/JourFerier"]);
   }
   delete_conge(id:any){
    this.Service.supprimerConge(id).subscribe(()=>this.get_all_congesnonaccepter());
  }
  gotoDemandeConge(){
    this.router.navigate(["DemandeConge"]);
   }
   getEmailandId(id:any , email:any){
this.idC = id;
this.email = email;
   }
}
