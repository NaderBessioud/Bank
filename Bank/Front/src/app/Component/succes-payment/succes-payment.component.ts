import {Component, OnInit, ViewChild} from '@angular/core';
import {RDVServiceService} from "../../Services/rdvservice.service";
import {RDV} from "../../Modals/rdv";
import {User} from "../../Modals/user";

@Component({
  selector: 'app-succes-payment',
  templateUrl: './succes-payment.component.html',
  styleUrls: ['./succes-payment.component.scss']
})
export class SuccesPaymentComponent implements OnInit {
  R:RDV
  Conseiller:User=new User()

  constructor(private service:RDVServiceService) { }
  @ViewChild('primaryModal2') primaryModal2: any;
  ngOnInit(): void {
    this.Conseiller.nom=sessionStorage.getItem("conseillerName");
    sessionStorage.removeItem("conseillerName")
    this.Conseiller.prenom=sessionStorage.getItem("conseillerPrenom")
    sessionStorage.removeItem("conseillerPrenom")
    this.Conseiller.idEmployee=sessionStorage.getItem("conseillerID")
    sessionStorage.removeItem("conseillerID")
    this.R=new RDV()
    this.R.daterdv=sessionStorage.getItem("date");
    sessionStorage.removeItem("date")
    this.R.heure=sessionStorage.getItem("hour")
    sessionStorage.removeItem("hour")
    this.R.frais=sessionStorage.getItem("frais")
    sessionStorage.removeItem("frais")
    this.service.addRDV(this.R,this.Conseiller.idEmployee,2).subscribe(rdv=>{
      this.primaryModal2.show();
    })
  }

}
