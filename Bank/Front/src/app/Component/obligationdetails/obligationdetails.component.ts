import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Obligation } from 'src/app/Modals/obligation';
import { ObligationService } from 'src/app/Services/obligation.service';
import Swal from 'sweetalert2';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-obligationdetails',
  templateUrl: './obligationdetails.component.html',
  styleUrls: ['./obligationdetails.component.scss']
})
export class ObligationdetailsComponent implements OnInit {
  id:Number;
  ido:Number;
  obligations:Obligation[];
  Obligation:Obligation=new Obligation();
  value: Number = 0;
  value1:any=0;
  value2:any=0;
  value3:any=0;
  value4:any=0;
  options: Options = {
    floor: 0,
    ceil: 10000
  };
  options1: Options = {
    floor: 0,
    ceil: 100
  };
  constructor(private router: Router,private obligationservice : ObligationService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.obligationservice.getobById(this.id).subscribe(data => {
      this.Obligation = data;})
      this.obligationservice.getobList().subscribe(data => {
        this.obligations = data;
      });
  }
 comparer(k:any){
  this.obligationservice.sim(k,this.ido).subscribe( data =>{
    if (data==0){ Swal.fire({
      title: '<strong>Calcul du rendement </strong>',
      icon: 'info',
      html:
        "Les deux obligations ont le meme rendement",
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
     
    
       
    })
    }
  if (data==1){ Swal.fire({
  title: '<strong>Calcul du rendement </strong>',
  icon: 'info',
  html:
    "Le rendement de l'obligation que vous venez d'inspecter est meilleur que celle que vous avez sélectionné",
  showCloseButton: true,
  showCancelButton: true,
  focusConfirm: false,
 

   
})
}
if (data==-1){ Swal.fire({
  title: '<strong>Calcul du rendement </strong>',
  icon: 'info',
  html:
    "Le rendement de l'obligation que vous venez de sélectionner est meilleur que celle que vous inspectez",
  showCloseButton: true,
  showCancelButton: true,
  focusConfirm: false,

  
  
})
}
   
   
})  
 }
 yield(){
  this.obligationservice.simulateur(this.value2,this.value1,this.value,this.value3,this.value4).subscribe(data=>
  console.log(data))
   
}
}
